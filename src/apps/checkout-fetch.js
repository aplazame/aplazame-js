
import Parole from 'parole';

import apiHttp from '../core/api-http';

export default function fetchCheckout (checkout_data) {

  if( typeof checkout_data === 'string' ) return apiHttp.get('checkout/' + checkout_data, { api_version: 3 }).then(function (res) {
    return res.data;
  });

  if( !checkout_data.transaction ) return apiHttp.post('checkout', checkout_data, { api_version: 3 }).then(function (res) {
    return res.data;
  });

  return Parole.resolve(checkout_data);
}
