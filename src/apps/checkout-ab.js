
import api from '../core/api';

var _ab_list = [
  'e2550ccf301a86f32f5bd6b0f07ae52cc0ac3451',
  '11c20dd8276f2fb5dcfb78f685491f76087671dc',
  'b8e1bf782fd97e7ca7b84a6ab72cf9aaae048492',
  'fa596797f7bd8502e3d71b611ebf379f9e9f7794',
  '595403a7c63721a73036e6b3396d357c003d8bf3',
  '7e7d7a6b0b3e39e8f4e257648e99c9d721dd19e9',
  '392f86ed1e3a563872e53bb4f78b2ae27227544c',
  'c57482833f1861fd8387ab07835b28ac7bcd6e38',
  '9b99f9bd91386939c6655804279970f8a01242e3',
  // 'cb67e9f4d00eab8fa1dba5b5cb4b1200fb4c0fda',
  'ffcfcb85d6c002455d6cda6b32017659233a3189',
  '5f8e6303c30bfba45ded81d2689967b3feb21792',
  'eb9efd76834563e29914599f5c6e96832c59e83d',
  '913e366ef6d7e97640978c41acef0d64b2b162e0',
  '4c726ea1597febeee7505410a6b6b23addcd8a21',
  '45e3e3e40523fab4bf5d88ebed4586fa7653e45a',
  'a04cdc67d248f085a361ae2aa070b0c593dc3be5',
  '3c9b5e7c3007aea732ab0c0ab017a82e7cca35e6',
  '8297732b99c1569ef14f75de1c3abf23fbe7cdd4',
  '5bb8dbe8acbe223bb6d70b780826f033185cc27b',
  'c11547e2920196d6d4d100e636b9d0effe29c99e',
  '65a91c3596527d204d2656a0980589573d7fd6d3',
  '397c0cc6cc18095531941ccb33beaed1e947943a',

  // 'cb67e9f4d00eab8fa1dba5b5cb4b1200fb4c0fda',

  // '6f9f8f04a55c4b50cb888e97c75eca4d82962f69',
  // '78b9fe21619c6fc652b006fd1c772284bbd18f34',

  // '12093289b594f50d3971e4719eedd5c314ceb6ba',
  // '0e880ca5c85eb848ec878cb6d16dc223ea3ed2a8',
  // '519727259c5d55599369d19df95f75a582a9e685',
  // 'd78dcdcefe37c7b55cfa70ac48a4c8dc719e0875',
  // '868ff632cfab95b8fec42a1e970a776686d8cf38',
  // '73ee9ba32eab8893e7e07add3b133f706e95a761',
];

function _getCheckoutVanillaUrl () {
  if( /^https:\/\/api\.aplazame\.com\/?/.test(api.host) ) {
    return 'https://checkout-vanilla.aplazame.com/';
  }

  return 'https://checkout-vanilla-dev.aplazame.com/';
}

export default function checkoutAB (checkout_url) {

  if( _ab_list.indexOf(api.public_key) < 0 ) return _getCheckoutVanillaUrl();

  return checkout_url;

}
