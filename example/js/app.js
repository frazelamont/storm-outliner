(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
 * @version 1.0.6: Fri, 29 Jun 2018 12:55:37 GMT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLW91dGxpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLGlCQUFBLFFBQUEsdUJBQUEsQ0FBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU1BO0FBQ0ksUUFBSSxlQUFlLFNBQUEsYUFBQSxDQUFuQixPQUFtQixDQUFuQjtBQUFBLFFBQ0ksU0FBUyxTQUFULE1BQVMsQ0FBQSxPQUFBLEVBQVc7QUFDaEIscUJBQUEsU0FBQSxHQUFBLE9BQUE7QUFGUixLQUFBOztBQUtBLGFBQUEsb0JBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLFdBQUEsQ0FBQSxZQUFBOztBQUVBLGFBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQXVDLFlBQU07QUFDekMsZUFBQSxrQ0FBQTtBQURKLEtBQUE7O0FBSUEsYUFBQSxnQkFBQSxDQUFBLFNBQUEsRUFBcUMsWUFBTTtBQUN2QyxlQUFBLEVBQUE7QUFESixLQUFBO0FBR0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgT3V0bGluZXIgZnJvbSAnLi9saWJzL3N0b3JtLW91dGxpbmVyJzsiLCIvKipcbiAqIEBuYW1lIHN0b3JtLW91dGxpbmVyOiBIaWRlIENTUyBvdXRsaW5lIG9uIG1vdXNlIGludGVyYWN0aW9ucywgc2hvdyBvbiBrZXlib2FyZCBpbnRlcmFjdGlvbnNcbiAqIEB2ZXJzaW9uIDEuMC42OiBGcmksIDI5IEp1biAyMDE4IDEyOjU1OjM3IEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xue1xuICAgIGxldCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpLFxuICAgICAgICBzZXRDc3MgPSBjc3NUZXh0ID0+IHtcbiAgICAgICAgICAgIHN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBjc3NUZXh0O1xuICAgICAgICB9O1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFQUQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICBzZXRDc3MoJyo6Zm9jdXN7b3V0bGluZTpub25lICFpbXBvcnRhbnR9Jyk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4ge1xuICAgICAgICBzZXRDc3MoJycpO1xuICAgIH0pO1xufTsiXX0=
