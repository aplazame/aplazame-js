'use strict';

var simulatorCampaigns = require('./simulator-campaigns'),
    simulatorOptions = require('./simulator-options');

function simulatorList(product){

  var price = product.amount;
  var id = product.productId;

  console.log(price , id);

  var options = simulatorOptions();


  // En funcion del ID del producto y de las opciones de la tienda obtenemos las campañas que aplican a cada mes
  var productCampaigns = getCampaignByMonth(id);

  var quotas = [];
  for (var i = 0; i < 12; i++ ){
    var poly = new Poly(productCampaigns[i].coeffs);
    var downpayment;
    var quota;

    productCampaigns[i].polynom = poly.jsFunction;
    quota = productCampaigns[i].polynom(i+1) * price;

    if (i === 0){
      downpayment = options.d_deferred_rate*quota;
    } else {
      downpayment = options.m_merchant*quota;
    }

    var output = {
      instalment: i+1,
      downpayment: downpayment,
      quota: quota
    };
    quotas.push(output);

  }

  return quotas;

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
      console.log(merchantInfo);
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
