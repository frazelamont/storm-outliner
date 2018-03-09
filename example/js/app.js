(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _stormOutliner = require('./libs/storm-outliner');

var _stormOutliner2 = _interopRequireDefault(_stormOutliner);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./libs/storm-outliner":2}],2:[function(require,module,exports){
'use strict';

/**
 * @name storm-outliner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 1.0.5: Fri, 09 Mar 2018 19:37:52 GMT
 * @author stormid
 * @license MIT
 */

{
    var styleElement = document.createElement('STYLE'),
        setCss = function setCss(cssText) {
        styleElement.innerHTML = cssText;
    };

    document.getElementsByTagName('HEAD')[0].appendChild(styleElement);

    document.addEventListener('mousedown', function () {
        setCss('*:focus{outline:none !important}');
    });

    document.addEventListener('keydown', function () {
        setCss('');
    });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLW91dGxpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU1BLEFBQ0k7UUFBSSxlQUFlLFNBQUEsQUFBUyxjQUE1QixBQUFtQixBQUF1QjtRQUN0QyxTQUFTLFNBQVQsQUFBUyxnQkFBVyxBQUNoQjtxQkFBQSxBQUFhLFlBQWIsQUFBeUIsQUFDNUI7QUFITCxBQUtBOzthQUFBLEFBQVMscUJBQVQsQUFBOEIsUUFBOUIsQUFBc0MsR0FBdEMsQUFBeUMsWUFBekMsQUFBcUQsQUFFckQ7O2FBQUEsQUFBUyxpQkFBVCxBQUEwQixhQUFhLFlBQU0sQUFDekM7ZUFBQSxBQUFPLEFBQ1Y7QUFGRCxBQUlBOzthQUFBLEFBQVMsaUJBQVQsQUFBMEIsV0FBVyxZQUFNLEFBQ3ZDO2VBQUEsQUFBTyxBQUNWO0FBRkQsQUFHSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiaW1wb3J0IE91dGxpbmVyIGZyb20gJy4vbGlicy9zdG9ybS1vdXRsaW5lcic7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1vdXRsaW5lcjogSGlkZSBDU1Mgb3V0bGluZSBvbiBtb3VzZSBpbnRlcmFjdGlvbnMsIHNob3cgb24ga2V5Ym9hcmQgaW50ZXJhY3Rpb25zXG4gKiBAdmVyc2lvbiAxLjAuNTogRnJpLCAwOSBNYXIgMjAxOCAxOTozNzo1MiBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbntcbiAgICBsZXQgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1RZTEUnKSxcbiAgICAgICAgc2V0Q3NzID0gY3NzVGV4dCA9PiB7XG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gY3NzVGV4dDtcbiAgICAgICAgfTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRUFEJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgc2V0Q3NzKCcqOmZvY3Vze291dGxpbmU6bm9uZSAhaW1wb3J0YW50fScpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcbiAgICAgICAgc2V0Q3NzKCcnKTtcbiAgICB9KTtcbn07Il19
