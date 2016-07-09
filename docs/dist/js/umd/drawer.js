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
    global.drawer = mod.exports;
  }
})(this, function (exports, module) {
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.2): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Drawer = (function ($) {

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'drawer';
    var VERSION = '4.0.0-alpha';
    var DATA_KEY = 'bs.drawer';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var ClassName = {
      ACTIVE: 'drawer-in'
    };

    var Selector = {
      DATA_TOGGLE: '[data-toggle="drawer"]'
    };

    var Event = {
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Drawer = (function () {
      function Drawer(element) {
        _classCallCheck(this, Drawer);

        this._element = element;
      }

      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */

      // getters

      _createClass(Drawer, null, [{
        key: 'toggle',

        // public

        value: function toggle() {
          var $el = $(document.body);
          var $drawer = $el.find('.drawer-panel');
          if ($drawer.css("position") != "fixed") return;

          if ($el.hasClass(ClassName.ACTIVE)) {
            $backdrop.fadeOut();
          } else {
            $backdrop.fadeIn();
          }
          $el.toggleClass(ClassName.ACTIVE);
        }

        /*dispose() {
          $.removeData(this._element, DATA_KEY)
          this._element = null
        }*/

        // static

      }, {
        key: '_jQueryInterface',
        value: function _jQueryInterface(config) {
          return this.each(function () {
            /*let data = $(this).data(DATA_KEY)
             if (!data) {
              //data = new Drawer(this)
              //$(this).data(DATA_KEY, data)
            }*/

            if (config === 'toggle') {
              toggle();
            }
          });
        }
      }, {
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }]);

      return Drawer;
    })();

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      Drawer.toggle();
    });

    var $backdrop = $("<div class='drawer-backdrop' data-toggle='drawer'></div>");
    $backdrop.appendTo(document.body);

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Drawer._jQueryInterface;
    $.fn[NAME].Constructor = Drawer;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Drawer._jQueryInterface;
    };

    return Drawer;
  })(jQuery);

  module.exports = Drawer;
});
