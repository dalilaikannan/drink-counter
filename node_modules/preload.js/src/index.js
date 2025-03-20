export default function preload(imageUrls) {
    let images = [],
        count = 0,
        doneAction = function () {},
        progressAction = function () {};

    imageUrls = (typeof imageUrls != 'object') ? [imageUrls] : imageUrls;

    imageUrls.length === 0 && doneAction(images);

    imageUrls.map((image, i) => {
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
        done() {
            doneAction = arguments[0] || doneAction;
        },
        progress() {
            progressAction = arguments[0] || progressAction;
        },
    };
}
