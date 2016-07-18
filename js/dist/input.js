/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Input = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'bsinput';
  var VERSION = '4.0.0-alpha';
  var DATA_KEY = 'bs.input';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    FOCUS: 'focus',
    HAS_CONTENT: "has-content",
    FLOAT: 'float'
  };

  var Selector = {
    FORM_GROUP: '.form-group',
    INPUT: '.form-control'
  };

  var Event = {
    CHANGE_DATA_API: 'change' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Input = (function () {
    function Input(element) {
      _classCallCheck(this, Input);

      this._element = element;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Input, null, [{
      key: 'updateClasses',
      value: function updateClasses(el) {
        var group = $(el).closest(Selector.FORM_GROUP)[0];
        var $element = $(group).find(Selector.INPUT);
        if (!$element.length || $element.attr("type") == "radio" || $element.attr("type") == "checkbox") return;
        $(group).toggleClass(ClassName.HAS_CONTENT, !!$element.val().length);
      }

      // public

      // static

    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          /*
          let data = $(this).data(DATA_KEY)
          if (!data) {
            data = new Input(this)
            $(this).data(DATA_KEY, data)
          }
          */
          Input.updateClasses(this);
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Input;
  })();

  $(document).on(Event.CHANGE_DATA_API, Selector.FORM_GROUP, function (event) {
    Input.updateClasses(event.target);
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.FORM_GROUP, function (event) {
    var group = $(event.target).closest(Selector.FORM_GROUP)[0];
    $(group).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  }).ready(function () {
    $(Selector.FORM_GROUP)[NAME]();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Input._jQueryInterface;
  $.fn[NAME].Constructor = Input;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Input._jQueryInterface;
  };

  return Input;
})(jQuery);
//# sourceMappingURL=input.js.map
