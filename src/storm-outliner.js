(function(root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.StormOutliner = factory();
  }
}(this, function() {
	'use strict';
    
    var el = document.getElementsByTagName('HEAD')[0].appendChild(document.createElement('STYLE'));
    
    document.addEventListener('mousedown', function () {
        el.innerHTML = '*:focus{outline:none !important}';
    });
    
    document.addEventListener('keydown', function () {
        el.innerHTML = '';
    });

 }));