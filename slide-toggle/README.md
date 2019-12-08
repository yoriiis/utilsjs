## `slideToggle`

```javascript
slideToggle({
    target: document.querySelector('.element')
    action: 'open',
    callback: () => {
        console.log('Element is now open.');
    }
})
```

```html
<div class="element">
    <br /><br /><br /><br /><br />
</div>
```

```css
.element {
    display: none;
    height: 200px;
    transition: height 250ms ease-out;
}
```
