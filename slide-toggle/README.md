## `slideToggle`

### Usage

```javascript
slideToggle({
    target: document.querySelector('.element')
    action: 'open',
    callback: () => {
        console.log('Element is now open.');
    }
})
```

### Example

```html
<div class="element">
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
</div>
```

```css
.element {
    display: none;
    height: auto;
    transition: height 250ms ease-out;
}
```

### Parameters

#### `target`

`HTMLElement`

Tells to the function the element to slide.

#### `action`

`boolean`

Tells to the function the action: `open` or `close`.

#### `callback`

`function`

Specifies the function to execute when the animation is complete.
