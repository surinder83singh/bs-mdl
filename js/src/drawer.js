/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Drawer = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'drawer'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.drawer'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'drawer-in'
  }

  const Selector = {
    DATA_TOGGLE        : '[data-toggle="drawer"]'
  }

  const Event = {
    CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Drawer {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    static toggle() {
      var $el = $(document.body);
      
      if ($el.hasClass(ClassName.ACTIVE)) {
        $backdrop.fadeOut();
      }else{
        $backdrop.fadeIn();
      }
      $el.toggleClass(ClassName.ACTIVE);
    }

    /*dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }*/


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        /*let data = $(this).data(DATA_KEY)

        if (!data) {
          //data = new Drawer(this)
          //$(this).data(DATA_KEY, data)
        }*/

        if (config === 'toggle') {
          toggle();
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, (event) => {
      event.preventDefault()
      Drawer.toggle();
    })

  var $backdrop = $("<div class='drawer-backdrop' data-toggle='drawer'></div>");
  $backdrop.appendTo(document.body)

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Drawer._jQueryInterface
  $.fn[NAME].Constructor = Drawer
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Drawer._jQueryInterface
  }

  return Drawer

})(jQuery)

export default Drawer
