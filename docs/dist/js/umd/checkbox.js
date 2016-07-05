(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.checkbox = mod.exports;
  }
})(this, function (exports, module) {
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.2): input.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Checkbox = (function ($) {

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'checkbox';
    var VERSION = '4.0.0-alpha';
    var DATA_KEY = 'bs.input:checkbox';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var ClassName = {
      CHECKED: 'is-checked'
    };

    var Selector = {
      CHECKBOX: '.checkbox,.radio,.checkbox-inline,.radio-inline',
      INPUT: 'input'
    };

    var Event = {
      CHANGE_DATA_API: 'change' + EVENT_KEY + DATA_API_KEY,
      LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Checkbox = (function () {
      function Checkbox(element) {
        _classCallCheck(this, Checkbox);

        this._element = element;
      }

      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */

      // getters

      _createClass(Checkbox, [{
        key: 'update',

        // public
        value: function update() {
          var $el = Checkbox.getRootEl(this._element);
          var $input = $el.find(Selector.INPUT);
          if ($input.attr("type") == "radio") {
            $('input[type="radio"][name="' + $input.attr("name") + '"]').each(function () {
              $(this).closest(Selector.CHECKBOX).checkbox("updateClases");
            });
          }
          this.updateClases();
        }
      }, {
        key: 'updateClases',
        value: function updateClases() {
          var $input = $(this._element).find(Selector.INPUT);
          $(this._element).toggleClass(ClassName.CHECKED, !!$input.is(":checked"));
        }

        // static
      }], [{
        key: 'getRootEl',
        value: function getRootEl(el) {
          var $el = $(el);
          if ($el.get(0).tagName == "INPUT") $el = $el.closest(Selector.CHECKBOX);
          return $el;
        }
      }, {
        key: '_jQueryInterface',
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY);

            if (!data) {
              data = new Checkbox(this);
              $(this).data(DATA_KEY, data);
            }
            if (config == "updateClases") {
              data.updateClases();
            } else if (config == "update") {
              data.update();
            }
          });
        }
      }, {
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }]);

      return Checkbox;
    })();

    $(document).on(Event.CHANGE_DATA_API, Selector.CHECKBOX, function (event) {
      var group = $(event.target).closest(Selector.CHECKBOX)[0];
      $(group).checkbox("update");
    });

    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.CHECKBOX).each(function () {
        Checkbox._jQueryInterface.call($(this), "updateClases");
      });
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Checkbox._jQueryInterface;
    $.fn[NAME].Constructor = Checkbox;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Checkbox._jQueryInterface;
    };

    return Checkbox;
  })(jQuery);
  module.exports = Checkbox;
});
