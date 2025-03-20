(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('preload', factory) :
	(global.preload = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function preload(imageUrls) {
    var images = [],
        count = 0,
        doneAction = function doneAction() {},
        progressAction = function progressAction() {};

    imageUrls = (typeof imageUrls === 'undefined' ? 'undefined' : _typeof(imageUrls)) != 'object' ? [imageUrls] : imageUrls;

    imageUrls.length === 0 && doneAction(images);

    imageUrls.map(function (image, i) {
        images[i] = new Image();
        images[i].src = image;
        images[i].onload = imageLoad;
        images[i].onerror = imageLoad;
    });

    function imageLoad() {
        progressAction((count + 1) * 100 / images.length, images[count]);
        count++;
        if (count == imageUrls.length) doneAction(imageUrls.length === 1 ? images[0] : images);
    }

    return {
        done: function done() {
            doneAction = arguments[0] || doneAction;
        },
        progress: function progress() {
            progressAction = arguments[0] || progressAction;
        }
    };
}

return preload;

})));
//# sourceMappingURL=preload.js.map
