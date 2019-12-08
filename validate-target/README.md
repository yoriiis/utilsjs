## `validateTarget`

```javascript
document.addEventListener('click', e => {
    let validateTargetButtonClick = validateTarget({
        'target': e.target,
        'className': 'button',
        'nodeName': ['button', 'a']
    });

    if (validateTargetButtonClick) {
        console.log('Button is clicked.');
    }
}
```
