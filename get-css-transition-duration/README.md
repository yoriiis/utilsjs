## `getCSSTransitionDuration`

### Usage

```javascript
getCSSTransitionDuration({
    target: document.querySelector('.button'),
    ms: true
})
```

Will return `250`.

### Example

```css
.button {
    transition: opacity 250ms ease-out;
}
```

### Parameters

#### `target`

`HTMLElement`

Tells to the function the target element.

#### `ms`

`boolean`

Tells to the function if the duration is return in milliseconds (default is seconds).
