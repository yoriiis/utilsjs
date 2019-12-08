## `ajax`

### Usage

```javascript
ajax({
    type: 'GET',
    url: '',
    data: JSON.stringify({ foo: 'bar' }),
    withCredentials: false,
    beforeSend: () => {
        console.log('The request is not yet send.')
    },
    success: (request) => {
        console.log(request.responseText)
    },
    error: (request) => {
        throw new Error(request)
    }
})
```

### Parameters

#### `type`

`string = 'GET'`

Tells the type of the request (`GET`, `POST`).

#### `url`

`string = ''`

Tells the url of the request.

#### `data`

`string = ''`

Tells the datas to passed to the request. Datas need to be stringify as a string with `JSON.stringify()`.

#### `withCredentials`

`boolean = false`

Tells to the function if credentials informations need to be passed.

#### `beforeSend`

`null || function`

Specifies the function to execute before the request sent.

#### `success`

`null || function`

Specifies the function to execute when the request succeeded.

#### `error`

`null || function`

Specifies the function to execute when the request aborted.
