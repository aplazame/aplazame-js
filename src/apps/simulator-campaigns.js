'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    campaignsPromise = null,
    log = require('../tools/log');

function simulatorCampaigns (callback, onError) {

  campaignsPromise = (campaignsPromise)?campaignsPromise:apiHttp.get('instalment-plan-simulator', { params: { fields: 'campaigns' } } )
    .then(function (response) {
      (callback || _.noop)( response );
      return response;
    }, function (response) {
      if( response.status === 403 ) {
        log('Aplazame[error]: Permiso denegado usando la clave pública', response.config.publicKey,
          'Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.message') ) {
        log('Aplazame[error]: ' + response.data.error.message);
      }
      (onError || _.noop)(response);
    });
  //Temp value
  campaignsPromise = {
      annual_equivalent: 2450,
      coeffs: [ -1.62552016e-10,1.28386940e-08,-4.54262268e-07,9.51164131e-06,
  -1.31167778e-04,1.25475370e-03,-8.54550332e-03,4.18893641e-02,
  -1.47968404e-01,3.75165667e-01,-6.82389192e-01,9.20715412e-01],
      campaigns: [
        {
            campaign_id: '443dil321j33dsi',
            annual_equivalent: 1000,
            start_date: '2017-08-21T13:56:45+0000',
            end_date: '2017-10-21T13:56:45+0000',
            num_instalment: [1,2,3],
            products: ['id1', 'id2'],
            coeffs: [-6.32609467e-09,4.87427610e-07,-1.67257188e-05,3.36970598e-04,-4.42284581e-03,3.96529038e-02,-2.47421589e-01,1.07298042e+00,-3.16694715e+00,6.06980174e+00,-6.89099371e+00,3.87769567e+00],
        },
        {
            campaign_id: '232131321211321',
            annual_equivalent: 500,
            start_date: '2017-08-21T13:56:45+0000',
            end_date: '2017-10-21T13:56:45+0000',
            num_instalment: [1,2,3],
            products: ['id1', 'id2'],
            coeffs: [-6.22139921e-09,4.79368280e-07,-1.64494961e-05,3.31414169e-04,-4.35006709e-03,3.90022935e-02,-2.43379155e-01,1.05556585e+00,-3.11613356e+00,5.97462797e+00,-6.78921754e+00,3.82651200e+00],
        },
      ]
    };

  return campaignsPromise;
}

module.exports = simulatorCampaigns;
