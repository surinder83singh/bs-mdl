/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ScrollEffect = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'scrolleffect'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.scrolleffect'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    SCROLLED            : 'is-scrolled',
    CAN_SCROLL          : 'can-scroll',
    SCROLLED_TO_BOTTOM  : 'scrolled-to-bottom'

  }

  const Selector = {
    DATA_SCROLLABLE     : '[data-scrolleffect]'
  }

  const Event = {
    SCROLL_DATA_API     : `scroll${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollEffect {

    constructor(element) {
      this._element = element;
      let data = $(element).data(DATA_KEY);
      if (!data){
        $(element).off(Event.SCROLL_DATA_API).on(Event.SCROLL_DATA_API, function(){
          $(element).scrolleffect();
        })
      }
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    updateClasses() {
      let $el = $(this._element);

      let scrollEl = $el.get(0);
      if (!scrollEl)
        return;

      let target = $el.data("scrolleffect");
      if (target)
        $el = $el.closest(target);

      $el.toggleClass(ClassName.SCROLLED, scrollEl.scrollTop > 0);
      $el.toggleClass(ClassName.CAN_SCROLL, scrollEl.offsetHeight < scrollEl.scrollHeight);
      $el.toggleClass(ClassName.SCROLLED_TO_BOTTOM, scrollEl.scrollTop + scrollEl.offsetHeight + 5 >= scrollEl.scrollHeight);
    }

    dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(Event.SCROLL_DATA_API);
      this._element = null;
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new ScrollEffect(this)
          $(this).data(DATA_KEY, data)
        }else{
          data.updateClasses();
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
   $(document).ready(function(){
     $(Selector.DATA_SCROLLABLE).scrolleffect();
   })
  
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = ScrollEffect._jQueryInterface
  $.fn[NAME].Constructor = ScrollEffect
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollEffect._jQueryInterface
  }

  return ScrollEffect

})(jQuery)

export default ScrollEffect
