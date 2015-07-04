!function(t){"use strict";function e(t,r){return r?t.replace(/\{([^\}]+)\}/g,function(t,e){return r[e]}):function(r){return e(t,r)}}function r(){for(var t,e=m.call(arguments),r=m.call(arguments);r;){for(t in r)e[t]=r[t];r=m.call(arguments)}return e}function a(t){var e=t[0].toUpperCase()+t.substr(1);return e.replace(/([a-z])([A-Z])/,function(t,e,r){return e+"-"+r})}function n(t){var e=t[0].toLowerCase()+t.substr(1);return e.replace(/([a-z])-([A-Z])/,function(t,e,r){return e+r})}function s(t,e,r){var a=t.match(v);return"json"===a[3]?JSON.parse(data):"xml"===a[3]?r:e}function o(t,e){e=e||{},e.headers=e.headers||{},e.url=t;var r=null,o={fulfill:[],reject:[]};try{r=new XMLHttpRequest}catch(c){try{r=new ActiveXObject("Msxml2.XMLHTTP")}catch(u){r=new ActiveXObject("Microsoft.XMLHTTP")}}if(null===r)throw"Browser does not support HTTP Request";r.open((e.method||"get").toUpperCase(),t);for(var i in e.headers)r.setRequestHeader(a(i),e.headers[i]);r.resolve=function(t){o.fulfill.forEach(function(e){e(t.data,t.status,t.headers,t.xhr)})},r.reject=function(t){o.reject.forEach(function(e){e(t.data,t.status,t.headers,t.xhr)})};var f;return r.getHeaders=function(){return f||(f=r.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g,function(t,e,a){r.headers[n(e)]=a.trim()})),f},r.onreadystatechange=function(){if("complete"===r.readyState||4===r.readyState){var t={data:s(contentType,text,xml),status:r.status,headers:r.getHeaders,xhr:r};if(r.status>=200&&r.status<300)r.resolve(t);else{if(!(r.status>=400))throw new Error("Unexpected status code "+r.status);r.reject(t)}}},r.options=e,r.send(e.data),{success:function(t,e){o.fulfill.push(t),e instanceof Function&&o.reject.push(onreject)},error:function(t){o.reject.push(t)}}}function c(t){if(t=t||{},t.version=t.version||1,t.sandbox=t.sandbox?".sandbox":"",t.paramsStr="",t.params)for(var e in t.params)t.paramsStr+=(t.paramsStr?"&":"?")+e+"="+encodeURIComponent(t.params[e]);return t}function u(t){return t=c(t),o(h.host+t.paramsStr,{headers:{accept:e(h.accept,t)}})}function i(t){return t=c(t),o(h.host+t.paramsStr,{method:"post",headers:{accept:e(h.accept,t)}})}function f(){}function p(){var t=document.createElement("iframe");t.src="data:text/html;charset=utf-8,"+encodeURI(d),r(t.style,l),t.frameBorder="0",document.body.appendChild(t)}var d="<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Aplazame Checkout</title></head><body ui-view=\"\"></body></html>",l={position:"fixed",top:0,left:0,width:"100%",height:"100%"},h={host:"https://api.aplazame.com/",accept:"application/vnd.aplazame{sandbox}-v{version}+json"},m=[].shift,v=/([^\/]+)\/([^+]+\+)?(.*)/;t.aplazame={checkout:p,button:f,apiGet:u,apiPost:i}}(this);