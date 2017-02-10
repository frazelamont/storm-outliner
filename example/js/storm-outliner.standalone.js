/**
 * @name storm-outiner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 0.1.0: Fri, 10 Feb 2017 16:49:25 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormOutiner = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

{
    (function () {
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
    })();
};;
}));
