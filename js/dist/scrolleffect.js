/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ScrollEffect = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrolleffect';
  var VERSION = '4.0.0-alpha';
  var DATA_KEY = 'bs.scrolleffect';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    SCROLLED: 'is-scrolled',
    CAN_SCROLL: 'can-scroll',
    SCROLLED_TO_BOTTOM: 'scrolled-to-bottom'

  };

  var Selector = {
    DATA_SCROLLABLE: '[data-scrolleffect]'
  };

  var Event = {
    SCROLL_DATA_API: 'scroll' + EVENT_KEY + DATA_API_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollEffect = (function () {
    function ScrollEffect(element) {
      _classCallCheck(this, ScrollEffect);

      this._element = element;
      var data = $(element).data(DATA_KEY);
      if (!data) {
        $(element).off(Event.SCROLL_DATA_API).on(Event.SCROLL_DATA_API, function () {
          $(element).scrolleffect();
        });
      }
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(ScrollEffect, [{
      key: 'updateClasses',

      // public

      value: function updateClasses() {
        var $el = $(this._element);

        var scrollEl = $el.get(0);
        if (!scrollEl) return;

        var target = $el.data("scrolleffect");
        if (target) $el = $el.closest(target);

        $el.toggleClass(ClassName.SCROLLED, scrollEl.scrollTop > 0);
        $el.toggleClass(ClassName.CAN_SCROLL, scrollEl.offsetHeight < scrollEl.scrollHeight);
        $el.toggleClass(ClassName.SCROLLED_TO_BOTTOM, scrollEl.scrollTop + scrollEl.offsetHeight + 5 >= scrollEl.scrollHeight);
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._element).off(Event.SCROLL_DATA_API);
        this._element = null;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new ScrollEffect(this);
            $(this).data(DATA_KEY, data);
          } else {
            data.updateClasses();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return ScrollEffect;
  })();

  $(document).ready(function () {
    $(Selector.DATA_SCROLLABLE).scrolleffect();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollEffect._jQueryInterface;
  $.fn[NAME].Constructor = ScrollEffect;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollEffect._jQueryInterface;
  };

  return ScrollEffect;
})(jQuery);
//# sourceMappingURL=scrolleffect.js.map
