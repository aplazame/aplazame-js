[![aplazame-js-banner](https://cloud.githubusercontent.com/assets/2305833/18111968/37951520-6f24-11e6-8732-fa73796231ab.png) ](https://aplazame.com "Aplazame")

[![Build Status](http://drone.aplazame.com/api/badges/aplazame/aplazame-js/status.svg)](http://drone.aplazame.com/aplazame/aplazame-js)

#### [ver documentación](https://aplazame.com/docs/api/)

Main File
---------
``` html
<script type="text/javascript" src="https://aplazame.com/static/aplazame.js"
        data-aplazame="f5f64b3e9c7d8da5de29d4a45f40d370282f6f05" data-sandbox="true"></script>

<!-- the recommended place for this line is at the end of <body> tag -->
```

Instalments Simulator Widget
----------------------------
![image](https://cloud.githubusercontent.com/assets/2305833/18111724/39eb570a-6f22-11e6-8b0a-86cc42f18916.png)


``` html
<div data-aplazame-simulator data-amount="10050" data-currency="EUR" data-country="ES"></div>
<!-- place this line where you want to show the simulator widget -->
```
you can specify selectors to watch price and quantity, and those values will be watched for changes
``` html
<div data-aplazame-simulator
     data-price="form#article .regular-price .price"
     data-qty="form#article input[name='qty']"></div>
<!-- place this line where you want to show the simulator widget -->
```

Aplazame button
---------------
![image](https://cloud.githubusercontent.com/assets/2305833/11635328/4417726a-9d16-11e5-9f8c-91205319aaa5.png)

``` html
<button>Payment Method</button>
<button data-aplazame-button data-amount="10050">
  <img src="assets/images/logo-color.svg">
</button>
<button>Other Payment Method</button>
<!-- place this line where you want to show the simulator widget -->
```

Checkout
---------------

[see demo](http://demo.aplazame.com)

![image](https://cloud.githubusercontent.com/assets/2305833/11635342/5cd3cc90-9d16-11e5-80b4-4e72824ba4ed.png)

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
