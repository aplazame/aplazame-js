
import Parole from 'parole';

import apiHttp from '../core/api-http';

export default function fetchCheckout (checkout_data) {
  var checkout_id = null;

  if( typeof checkout_data === 'string' ) {
    checkout_id = checkout_data;
    checkout_data = null;
  }

  if( checkout_id ) return apiHttp.get('checkout/' + checkout_id, { api_version: 3 }).then(function (res) {
    return res.data;
  });

  if( !checkout_data.transaction ) return apiHttp.post('checkout', checkout_data, { api_version: 3 }).then(function (res) {
    return res.data;
  });

  return Parole.resolve(checkout_data);
}
