
import api from '../core/api';

var _ab_list = [
  // '6f9f8f04a55c4b50cb888e97c75eca4d82962f69',
  // '78b9fe21619c6fc652b006fd1c772284bbd18f34',
  '12093289b594f50d3971e4719eedd5c314ceb6ba',
  '0e880ca5c85eb848ec878cb6d16dc223ea3ed2a8',
  '519727259c5d55599369d19df95f75a582a9e685',
  'd78dcdcefe37c7b55cfa70ac48a4c8dc719e0875',
  '868ff632cfab95b8fec42a1e970a776686d8cf38',
  '73ee9ba32eab8893e7e07add3b133f706e95a761',
];

function _getCheckoutVanillaUrl () {
  if( /\/api\.aplazame\.com\/?/.test(api.host) ) {
    return 'https://checkout-vanilla.aplazame.com/';
  }

  return 'https://checkout-vanilla-dev.aplazame.com/';
}

export default function checkoutAB (checkout_url) {

  if( _ab_list.indexOf(api.public_key) >= 0 ) return _getCheckoutVanillaUrl();

  return checkout_url;

}
