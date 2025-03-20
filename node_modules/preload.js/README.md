# preload.js

Tiny library to preload images.

## Usage

```js
preload('1.png').done((image) => {
    console.log(image);
});

// or

preload([
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]).done((images) => {
    console.log(images);
});

// also

preload([
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]).progress((percent, image) => {
    console.log(percent, image);
});
```
