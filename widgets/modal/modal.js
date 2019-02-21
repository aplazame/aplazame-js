import _ from '../../src/tools/tools';
import _createModal from '../../node_modules/ng-aplazame/toolkit/modal';

var Modal;

_.onMessage('modal', function (_e, message) {
  if( message.event === 'content' ) {
    Modal = Modal || _createModal(_);

    // console.log('modal', message);
    var m = new Modal(_.extend(message.content, {
      init: function (mEl) {
        _.each( mEl.querySelectorAll('[data-modal]'), function (dModal) {
          _.on(dModal, 'click', function () {
            m.close();
          });
        });
        var more_options_el = mEl.querySelector('.more-options');
        var summary_el = mEl.querySelector('.choices-wrapper.summary');
        var extended_el = mEl.querySelector('.choices-wrapper.expanded');
        extended_el.style.display = 'flex';
        var first_button_els = mEl.querySelectorAll('.choices-wrapper.summary button');

        /*
        summary_el?initSlide(summary_el):'';
        extended_el?initSlide(extended_el):'';
        (more_options_el?more_options_el.addEventListener('click', function(){
          toggleSlide(summary_el);
          toggleSlide(extended_el);
        }):'');


        if (first_button_els.length > 3 && _.isMobile()){
          first_button_els[0].style.display = 'none';
        }

        window.addEventListener('resize', function(){

            if (first_button_els.length > 3 && _.isMobile()){
              first_button_els[0].style.display = 'none';
            } else {
              first_button_els[0].style.display = 'block';
            }
        });
        */
      },
      beforeClose: function () {
        parent.window.postMessage({
          aplazame: 'modal',
          event: 'closing'
        }, '*');
      },
      onClose: function () {
        parent.window.postMessage({
          aplazame: 'modal',
          event: 'close'
        }, '*');
      }
    }));
  }
});

var getHeight = function(el) {
        var el_style      = window.getComputedStyle(el),
            el_display    = el_style.display,
            el_position   = el_style.position,
            el_visibility = el_style.visibility,
            el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

            wanted_height = 0;

        if(el_display !== 'none' && el_max_height !== '0') {
            return el.offsetHeight;
        }

        el.style.position   = 'absolute';
        el.style.visibility = 'hidden';
        el.style.display    = 'block';

        wanted_height     = el.offsetHeight;

        el.style.display    = el_display;
        el.style.position   = el_position;
        el.style.visibility = el_visibility;

        return wanted_height;
    };


    var toggleSlide = function(el) {
      if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
        el.style.display = 'flex';
        setTimeout(function(){
          el.style.maxHeight = el.getAttribute('data-max-height');
        },10);
      } else {
          el.style.maxHeight = el.getAttribute('data-max-height');
          setTimeout(function(){
            el.style.maxHeight = '0';
          },10);
      }
    };
    var initSlide = function(el){
      var el_max_height = 0;
      el_max_height                  = getHeight(el) + 'px';
      el.style.overflowY             = 'hidden';
      el.setAttribute('data-max-height', el_max_height);
      if (el.style.display === 'none'){
        el.style.maxHeight             = '0';
      }
    };

_.ready(function () {
  _.scroll.top(0);
  parent.window.postMessage({ aplazame: 'modal', event: 'opened' }, '*');
});
