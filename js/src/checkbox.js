/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Checkbox = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'checkbox'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.input:checkbox'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    CHECKED : 'is-checked'
  }

  const Selector = {
    CHECKBOX       : '.checkbox,.radio,.checkbox-inline,.radio-inline',
    INPUT          : 'input'
  }

  const Event = {
    CHANGE_DATA_API : `change${EVENT_KEY}${DATA_API_KEY}`,
    LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Checkbox {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public
    update(){
      let $el = Checkbox.getRootEl(this._element);
      let $input = $el.find(Selector.INPUT);
      if ($input.attr("type") == "radio"){
        $('input[type="radio"][name="'+$input.attr("name")+'"]').each(function(){
          $(this).closest(Selector.CHECKBOX).checkbox("updateClases");
        });
      }
      this.updateClases();
    }

    updateClases(){
      let $input = $(this._element).find(Selector.INPUT);
      $(this._element).toggleClass(ClassName.CHECKED, !!$input.is(":checked"));
    }

    // static
    static getRootEl(el){
      let $el = $(el);
      if ($el.get(0).tagName == "INPUT")
          $el = $el.closest(Selector.CHECKBOX);
        return $el;
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Checkbox(this)
          $(this).data(DATA_KEY, data)
        }
        if (config == "updateClases"){
            data.updateClases();
        }else if (config == "update"){
            data.update();
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
    .on(Event.CHANGE_DATA_API, Selector.CHECKBOX, (event) => {
      let group = $(event.target).closest(Selector.CHECKBOX)[0];
      $(group).checkbox("update");
    })

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.CHECKBOX).each(function () {
      Checkbox._jQueryInterface.call($(this), "updateClases");
    })
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Checkbox._jQueryInterface
  $.fn[NAME].Constructor = Checkbox
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Checkbox._jQueryInterface
  }

  return Checkbox

})(jQuery)
export default Checkbox
