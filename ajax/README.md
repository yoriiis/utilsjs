## `ajax`

```javascript
ajax({
    type: 'GET',
    url: '',
    data: JSON.stringify({ foo: 'bar' }),
    withCredentials: false,
    beforeSend: () => {
        // ...
    },
    success: (request) =>{
        console.log(request.responseText)
    },
    error: (request) => {
        throw new Error(request)
    }
})```
