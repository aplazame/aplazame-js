'use strict';

var simulatorCampaigns = require('./simulator-campaigns'),
    simulatorOptions = require('./simulator-options'),
    _ = require('../tools/tools'),
    $q = require('parole');

function simulatorList(product, callback){

  var price = product.amount;
  var id = product.productId;

  var getData = $q.all([
    simulatorOptions(),
    getCampaignByMonth(id)
  ]);

  return getData.then(function(results){
    var options = results[0];
    var productCampaigns = results[1];
    var quotas = [];
    for (var i = 0; i < 12; i++ ){
      var poly = new Poly(productCampaigns[i].coeffs);
      var downpayment;
      var quota;

      productCampaigns[i].polynom = poly.jsFunction;
      quota = productCampaigns[i].polynom(i+1) * price;

      if (i === 0){
        downpayment = options.downpayment_deferred_rate/10000*quota;
      } else {
        downpayment = options.downpayment_m*quota;
      }

      var output = {
        amount: quota,
        annual_equivalent: productCampaigns[i].annual_equivalent,
        downpayment_amount: downpayment,
        num_instalments: i+1,
      };
      quotas.push(output);

    }
    quotas = serializeQuotas(quotas);
    (callback || _.noop)( quotas );
    return quotas;
  });

}

function serializeQuotas(quotas){
  return quotas.map(function(quota){
    quota.amount = Math.round(quota.amount*100);
    quota.downpayment_amount = Math.round(quota.downpayment_amount*100);
    return quota;
  })
}

function Poly(coeffs){
  this.mathFunction = '';
  this.jsFunction = '';

  for (var i = 0; i < coeffs.length ; i++){
    var sign = (coeffs[i]>=0)?'+':'';
    var grade = (coeffs.length-i-1);
    this.jsFunction += sign + coeffs[i] + '*Math.pow(x,' + grade + ')';
    this.mathFunction += sign + coeffs[i] + '*x^' + grade;
  }
  this.jsFunction = new Function('x','return ' + this.jsFunction);
}

function getCampaignByMonth(id){
      var filteredCampaign = [];
      var merchantInfo = simulatorCampaigns();

      for (var i = 1; i <= 12; i++){
        var bestCampaign = {
            annual_equivalent: merchantInfo.annual_equivalent,
            coeffs: merchantInfo.coeffs
        };
        // Recuperamos las campañas que aplican al mes i
        var campaigns = [];
        if (merchantInfo.campaigns){
          campaigns = merchantInfo.campaigns.filter(function(campaign){
            return campaign.num_instalment.indexOf(i) > -1;
          });
        }

        if (campaigns.length){

          for (var j = 0, campaignLength = campaigns.length; j < campaignLength; j++){

            var campaign = merchantInfo.campaigns[j];
            if (campaign.products.indexOf(id) > -1){

              if (bestCampaign.annual_equivalent > campaign.annual_equivalent){

                bestCampaign = campaign;
              }
            }

          }

        }

        filteredCampaign.push( bestCampaign );
      }

      return filteredCampaign;
    }


module.exports = simulatorList;
