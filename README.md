[![Image](https://aplazame.com/static/img/banners/banner-728-white-js.png "Aplazame") ](https://aplazame.com "Aplazame")

Aplazame.js [![wercker status](https://app.wercker.com/status/e3cdbafb5813b255e8dd982354e686ed/s/master "wercker status")](https://app.wercker.com/project/bykey/e3cdbafb5813b255e8dd982354e686ed) [![drone.io Status](http://drone.aplazame.com/api/badge/github.com/aplazame/aplazame-js/status.svg?branch=master)](http://drone.aplazame.com/github.com/aplazame/aplazame-js)
===========

Main File
---------
``` html
<script type="text/javascript" src="https://aplazame.com/static/aplazame.js"></script>

<!-- the recommended place for this line is at the end of <body> tag -->
```

Instalments Simulator Widget
----------------------------
<div style="text-align:center; margin: 1rem 0;">
[![image](https://cloud.githubusercontent.com/assets/2305833/10167877/aa757ad4-66ca-11e5-8423-079bb444e549.png)]()
</div>

``` html
<div data-aplazame-simulator data-amount="10050"></div>
<!-- place this line where you want to show the simulator widget -->
```

Aplazame button
---------------
<div style="text-align:center; margin: 1rem 0;">
[![image](https://cloud.githubusercontent.com/assets/2305833/10168408/e6d86bd8-66cc-11e5-9c02-bc5ed52df293.png)]()
</div>

``` html
<button>Payment Method</button>
<button data-aplazame-button="default" data-amount="10050">
  <img src="assets/images/logo-color.svg">
</button>
<button>Other Payment Method</button>
<!-- place this line where you want to show the simulator widget -->
```

Checkout
---------------

[see demo](demo.aplazame.com)

<div style="text-align:center; margin: 1rem 0;">
[![image](https://cloud.githubusercontent.com/assets/2305833/10168159/d4baa520-66cb-11e5-8101-c4f83154a21e.png)]()
</div>

``` js
aplazame.checkout({
  "toc": true,
  "merchant": {
    "public_api_key": "f5f64b3e9c7d8da5de29d4a45f40d370282f6f05",
    "confirmation_url": "/confirm?order_id=test3232321",
    "cancel_url": "/demo-cancel.html",
    "success_url": "/demo-success.html"
  },
  "customer": {
    "id": "140",
    "email": "dev@aplazame.com",
    "address": {
      "phone": "616123456",
      "alt_phone": "616001122",
      "street": "Torre Picasso, Plaza Pablo Ruiz Picasso 1",
      "address_addition": "Metro Santiago Bernabeu",
      "city": "Madrid",
      "state": "Madrid",
      "country": "ES",
      "zip": "28020"
    },
    "type": "e",
    "gender": 0,
    "first_name": "Lucky",
    "last_name": "Luciano",
    "date_joined": "2014-08-21T13:56:45+0000",
    "last_login": "2014-08-27T19:57:56+0000"
  },
  "order": {
    "id": orderId,
    "articles": [
      {
        "id": "acj00412f33f32231231",
        "name": "RELOJ EN ORO BLANCO DE 18 QUILATES Y DIAMANTES",
        "description": "Reloj en oro blanco de 18 quilates y diamantes. Pulsera en satén negro.Movimiento de cuarzo de alta precisión.",
        "url": "http://www.chanel.com/es_ES/Relojeria/relojes_joyer%C3%ADa#reloj-en-oro-blanco-de-18-quilates-y-diamantes-J10211",
        "image_url": "http://41.media.tumblr.com/44c89cc8b1bc05b24190286643da7406/tumblr_n3oajaviY71rka780o1_1280.jpg",
        "quantity": 2,
        "price": 3300,
        "tax_rate": 2100,
        "discount_rate": 200
      },
      {
        "id": "f342465j7d32214124",
        "name": "N°5 EAU PREMIERE SPRAY",
        "description": "A decidedly lighter, fresher, softer interpretation of N°5. . . a silky-smooth harmony of notes that reveals the delicate facet of the now and forever fragrance. The modern and airy interpretation of N°5 debuts in the iconic Classic Bottle to instantly elevate the N°5 experience.",
        "url": "http://www.chanel.com/en_US/fragrance-beauty/Fragrance-N%C2%B05-N%C2%B05-88145/sku/138083",
        "image_url": "http://www.chanel.com/en_US/fragrance-beauty/cms2export/Site1Files/P105170/S105340_XLARGE.jpg",
        "quantity": 1,
        "price": 2900,
        "tax_rate": 2100
      },
      {
        "id": "2r32r23r231231231r",
        "name": "ILLUSION D'OMBRE",
        "description": "This intensely shimmering long-wear eyeshadow offers true versatility. An innovative gel texture that is both soft and cushiony allows it to be worn as eyeshadow or eyeliner. Includes a specially designed shadow/liner brush, developed specifically for this unique formula.",
        "url": "http://www.chanel.com/en_US/fragrance-beauty/Makeup-Eyeshadow-ILLUSION-D%27OMBRE-122567",
        "image_url": "http://www.chanel.com/en_US/fragrance-beauty/cms2export/Site1Files/P189810/S189830_XLARGE.jpg",
        "quantity": 1,
        "price": 1300,
        "tax_rate": 2100,
        "discount_rate": 100
      }
    ],
    "discount": 300,
    "currency": "EUR",
    "total_amount": 13014
  },
  "billing": {
    "first_name": "Frank",
    "last_name": "Costello",
    "phone": "+34932671040",
    "alt_phone": null,
    "street": "Torre Picasso, Plaza Pablo Ruiz Picasso 1",
    "address_addition": "",
    "city": "Madrid",
    "state": "Madrid",
    "country": "ES",
    "zip": "28020"
  },
  "shipping": {
    "first_name": "Fernando",
    "last_name": "Cabello",
    "phone": "616123456",
    "alt_phone": "616001122",
    "street": "Torre Picasso, Plaza Pablo Ruiz Picasso 1",
    "address_addition": "Metro Santiago Bernabeu",
    "city": "Madrid",
    "state": "Madrid",
    "country": "ES",
    "zip": "28020",
    "price": 500,
    "tax_rate": 2100,
    "name": "SEUR",
    "discount": 100
  },
  "meta": {
    "source": {
      "data": {
        "ecommerce_version": "1.9.0.1"
      },
      "client_name": "ecommerce client"
    }
  }
});
```
