# `closest`

## Usage

```javascript
closest({
    element: document.querySelector('.list-itemLink'),
    className: 'nav'
})
```

Will return the following HTML element:

```javascript
document.querySelector('.nav')
```

## Example

```html
<nav class="nav">
    <ul class="list">
        <li class="list-item">
            <a href="" class="list-itemLink">Link</a>
        </li>
    </ul>
</nav>
```

## Parameters

### `element`

`HTMLElement`

Tells to the function the element to start the research.

### `className`

`string`

Tells to the function the class name to search.
