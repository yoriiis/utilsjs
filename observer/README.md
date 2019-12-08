## `observer`

```javascript
const observer = new Observer({
    element: document.querySelector('.video'),
    onIntersection: () => {
        console.log('Element is visible, function is excecuted once.');
    }
});
observer.observe();
```
