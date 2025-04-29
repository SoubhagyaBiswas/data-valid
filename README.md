# data-valid

A simple and lightweight data validation library for JavaScript.

Validate objects against defined rules for `text`, `email`, `number`, and `boolean` fields.

---

## Installation

```bash
npm install data-valid
```

---

## Example

### 1. Define your data

```javascript
const data = {
    name: "Soubhagya Biswas",
    email: "soubhagyabiswas.work@gmail.com",
    age: 23,
    lovesFood: true
};
```

### 2. Define your validation rules

```javascript
const rules = {
    name: ['required', 'min:3', 'max:20'],
    email: ['required', 'email'],
    age: ['required', 'number', 'min:18'],
    lovesFood: ['boolean']
};
```

### 3. Validate

```javascript
let validator = new Validator(rules);
validator.validate(data);

if (!validator.isValid()) {
    console.error(validator.errors());
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

## Example Error Output

If validation fails:

```javascript
{
  name: ["name must be at least 3 characters."],
  email: ["email must be a valid email address."],
  age: ["age must be at least 18."]
}
```

---

## License

MIT