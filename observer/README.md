## `observer`

### Usage

```javascript
const observer = new Observer({
    element: document.querySelector('.video'),
    onIntersection: () => {
        console.log('Element is visible, function is excecuted once.');
    }
});
observer.observe();
```

### Parameters

#### `element`

`HTMLElement`

Tells to the function the target element.

#### `element`

`function`

Specifies the function to execute once when the element is intersecting.
