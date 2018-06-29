/**
 * @name storm-outliner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 1.0.6: Fri, 29 Jun 2018 12:55:37 GMT
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
       root.StormOutliner = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

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
};;
}));
