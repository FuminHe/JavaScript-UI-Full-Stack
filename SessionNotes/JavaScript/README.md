# The JavaScript language

## Objects: the basics

### `Object.assign`

Create an independent copy, a clone of an object:

`Object.assign(dest, [src1, src2, src3...])`

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
// now user = { name: "John", canView: true, canEdit: true }
Object.assign(user, permissions1, permissions2);

// now user = { name: "Pete" } => re-write
Object.assign(user, { name: "Pete" });
```

### Garbage collection

- Garbage collection is performed automatically. We cannot force or prevent it.
- Objects are retained in memory while they are reachable.
- Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.

### Optional chaining '?.'

The optional chaining `?.` stops the evaluation if the value **before** `?.` is undefined or null and returns `undefined`.

```js
let user = {};
const res = user?.address; // return undefined if user is null/undefined
```

### [Symbol type](https://javascript.info/symbol)

It's used as the key in object, unique and can't show in `for..in..` loop.

`let id = Symbol();`

## Data types

### Array

- `arr.push()`
- `arr.pop()` – extracts an item from the end,
- `arr.shift()` – extracts an item from the beginning,
- `arr.unshift(...items)` – adds items to the beginning.
- `arr.splice`

  ```js
  let arr = ["I", "study", "JavaScript", "right", "now"];

  // remove 3 first elements and replace them with another
  arr.splice(0, 3, "Let's", "dance");

  alert(arr); // now ["Let's", "dance", "right", "now"]
  ```

- `arr.slice([start], [end])`
- `arr.concat(arg1, arg2...)`
- indexOf,includes,findIndex
- find, filter, reduce
- split, join, sort, reverse

### WeakMap and WeakSet

- The first difference between `Map` and `WeakMap` is that keys must be objects, not primitive values.
- In `WeakMap`, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically. But in `Map`, it will not be removed from memory.

- `WeakMap` does not support iteration and methods `keys()`, `values()`, `entries()`, so there’s no way to get all keys or values from it.

### Object.keys, values, entries

- `Object.keys(obj)` – returns an array of keys.
- `Object.values(obj)` – returns an array of values.
- `Object.entries(obj)` – returns an array of [key, value] pairs.

### Destructuring assignment

**Destructuring assignment** is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables.

- Array

  ```js
  let arr = ["John", "Smith"];

  let [firstName, surname] = arr;
  ```

- Object
- Nested

## Advanced working with functions

### Recursion

When a function calls itself, that's called recursion.

```js
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
```

- the _base_ of recursion: `if (n == 1) return x`
- a _recursive step_: `x * pow(x, n - 1)`
- recursion depth: `n`
