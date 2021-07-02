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

### Spread syntax `...`

```js
function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
```

### Closure

A **closure** is a function that remembers its outer variables and can access them.

So all functions are naturally closures in Javascript. Because of the hidden property `[[Environment]]`.

It keeps the reference to the Lexical Environment where the function was created which means all functions could know their outer Lexical Environment reference from their `[[Environment]]` property and have access to the outer variables.

```js
function sum(a) {
  return function (b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4
```

### `setTimeout`

Any `setTimeout` will run only after the current code has finished.

```js
let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
```

### `.call`, `.apply` and `.bind`

To set `this` context.

- **bind**: returns a function which will act like the original function but with this predefined.

  `let bindPokemon = pokemonName.bind(pokemon); `
  `bindPokemon("sushi", "js");`

---

**call** and **apply** will call a function immediately letting you specify both the value of this and any arguments the function will receive.

- **call**: `func.call(context, arg1, arg2, ...)`
- **apply**: `func.apply(context, [arg1, arg2, ...])`

## Object properties configuration

### Property flags and descriptors

- `writable`
- `enumerable`
- `configurable`

---

- `Object.getOwnPropertyDescriptor(obj, propertyName)`
- `Object.defineProperty(obj, propertyName, descriptor)`

### Property getters and setters

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

## Prototypes, Inheritance ?? 没看完

### Prototypal inheritance

We'd like to reuse what we have in an exist object, not copy/reimplement its methods, just build a new object on top of it. **Prototypal inheritance** is a language feature that helps in that.

- `[[Prototype]]`

  In JavaScript, objects have a special hidden property `[[Prototype]]`, that is either null or references another object. That object is called _"a prototype"_.

  When we read a property from `object`, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called _"prototypal inheritance"_.

  > We can use `obj.__proto__ = parentObject`.

- `F.prototype`

  ```js
  let animal = {
    eats: true,
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

  alert(rabbit.eats); // true
  ```

## Classes
