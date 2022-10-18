# requestPostAnimationFrame
Run tasks immediately after the browser has rendered.

Proposal: https://github.com/WICG/request-post-animation-frame/blob/main/explainer.md

## Usage

```javascript 
import { requestPostAnimationFrame } from './request-post-animation-frame.module.js';

// Read a value from the current layout
const $el = document.getElementById('some-element');
const height = $el.clientHeight;

// Mutate the DOM inside raf
requestAnimationFrame(() => {

  $el.style.height = `${height * 2.5}px`;
  
  // To read the updated value use rPAF callback and avoid layout trashing...
  requestPostAnimationFrame(() => {
    console.log($el.clientHeight);
  });
  
});

```
