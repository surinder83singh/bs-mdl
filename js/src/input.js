/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Input = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'input'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.input'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    FOCUS : 'focus',
    HAS_CONTENT: "has-content",
    FLOAT : 'float'
  }

  const Selector = {
    FORM_GROUP       : '.form-group',
    INPUT              : '.form-control'
  }

  const Event = {
    CHANGE_DATA_API      : `change${EVENT_KEY}${DATA_API_KEY}`,
    FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} `
                        + `blur${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Input {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public



    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Input(this)
          $(this).data(DATA_KEY, data)
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
    .on(Event.CHANGE_DATA_API, Selector.FORM_GROUP, (event) => {
      let group = $(event.target).closest(Selector.FORM_GROUP)[0];
      let $element = $(group).find(Selector.INPUT);
      if (!$element.length || $element.attr("type") == "radio" || $element.attr("type") == "checkbox")
        return
      $(group).toggleClass(ClassName.HAS_CONTENT, !!$element.val().length);
    })
    .on(Event.FOCUS_BLUR_DATA_API, Selector.FORM_GROUP, (event) => {
      let group = $(event.target).closest(Selector.FORM_GROUP)[0];
      $(group).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Input._jQueryInterface
  $.fn[NAME].Constructor = Input
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Input._jQueryInterface
  }

  return Input

})(jQuery)
export default Input
