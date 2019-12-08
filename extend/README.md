## `extend`

### Basic usage

```javascript
const object1 = { foo: 'bar' };
const object2 = { test: true };

extend(false, {}, object1, object2)
```

Will return the following object:

```json
{
    "foo": "bar",
    "test": true
}
```

### Deep merge

```javascript
const object1 = { foo: 'bar', settings: { name: 'button' }};
const object2 = { test: true };

extend(true, {}, object1, object2)
```

Will return the following object:

```json
{
    "foo": "bar",
    "settings": {
        "name": "button"
    },
    "test": true
}
```

### Parameters

#### `first parameter`

`boolean = false`

Tells to the function if it is a deep merge.

#### `second parameter`

`object`

Tells to the function the target object.

#### `next parameter(s)`

`object`

Tells to the function the objects to merged.
