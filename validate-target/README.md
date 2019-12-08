## `validateTarget`

### Usage

```javascript
document.querySelector('.nav')
    .addEventListener('click', e => {
        let validateTargetButtonClick = validateTarget({
            target: e.target,
            className: 'list-itemLink',
            nodeName: ['a']
        });

        if (validateTargetButtonClick) {
            console.log('Button is clicked.');
        }
    });
```

### Example

```html
<nav class="nav">
    <ul class="list">
        <li class="list-item">
            <a href="" class="list-itemLink">Link</a>
        </li>
    </ul>
</nav>
```

### Parameters

#### `target`

`HTMLElement`

Tells to the function the event target.

#### `className`

`string`

Tells to the function the class name to target element.

#### `nodeName`

`array`

Tells to the function the list of possible node names.
