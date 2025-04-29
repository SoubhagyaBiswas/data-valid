
<div align="center">
   <h1>data-valid</h1>
</div>

<p align="center">
    A lightweight data validation library for JavaScript / Typescript.
</p>


---

## Installing

### Package manager

Using npm:

```bash
$ npm install data-valid
```

Using yarn:

```bash
$ yarn add data-valid
```

Once the package is installed, you can import the library using `import` approach:

```js
import Validator from 'data-valid';
```

## Example

```javascript
import Validator from 'data-valid';

// TAKING TEST DATA
const data = {
    name: "Soubhagya Biswas",
    email: "soubhagyabiswas.work@gmail.com",
    age: 23,
    isSubscribedToNewsletter: true
};

// INITIALIZING THE VALIDATOR
let validator = new Validator({
    name: ['required', 'min:3', 'max:20'],
    email: ['required', 'email'],
    age: ['required', 'number', 'min:18'],
    isSubscribedToNewsletter: ['boolean']
})

// VALIDATE THE DATA BLOCK & CHECK VALIDITY
if(!validator.validate(data).isValid()) {
    console.error(validator.errors());
}
```


If validation fails `validator.errors()` returns

```javascript
{
    name: ["name must be at least 3 characters."],
    email: ["email must be a valid email address."],
    age: ["age must be at least 18."]
}
```

---

## Validator API

### `new Validator(rules)`
- Create a new Validator instance.
- `rules` is an object describing validation rules for each field.

### `.validate(data)`
- Validate the provided `data` object against the defined rules.

### `.isValid()`
- Returns `true` if validation passed.
- Returns `false` if there are errors.

### `.errors()`
- Returns an object with field names as keys and error messages as values.

---

## Supported Field Types

| Type      | Description |
|-----------|-------------|
| `text`    | Default string input. Supports `min` and `max` length. |
| `email`   | Validates email format. |
| `number`  | Validates numeric input. Supports minimum value (`min`). |
| `boolean` | Validates boolean values (`true`/`false`). |

---

## Credits

`data-valid` is inspired by the [Validator](https://api.laravel.com/docs/12.x/Illuminate/Support/Facades/Validator.html) component from [Laravel](https://laravel.com). It aims to offer a simple, lightweight solution for data validation in JavaScript and TypeScript applications.

## License

[MIT](LICENSE)