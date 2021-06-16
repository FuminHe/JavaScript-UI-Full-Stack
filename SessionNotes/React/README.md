# React Basic

## Functional component

**Always the best choice => smaller & faster and use hooks**

```jsx
import React from "react";

function functionalComponent() {
  return <>functionalComponent</>;
}

export default functionalComponent;
```

## Class component

**Use constructor.Need to bind in order to use `this` if use narmal function rather than arrow function.**

```jsx
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({});
  }

  // life-cycle
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidUpdate() {}
  render() {
    return <></>;
  }
}
export default EventBind;
```

- Why we need to `super(props)` in the beginning?

  The **constructor** for a React component is called before it is mounted. When implementing the constructor for a `React.Component` subclass, you should call `super(props)` before any other statement. **Otherwise, this.props will be undefined in the constructor, which can lead to bugs**.

## State Updates

- Do Not Modify State Directly, use `setState`.
- State Updates May Be Asynchronous.

  `setState()` does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling `setState()` a potential pitfall.

  ```js
  this.setState((state, props) => {
    return { counter: state.counter + props.increment };
  });
  ```

- State Updates are Merged.

  If your state may contain several independent variables, you can update them independently with separate setState() calls.

  ```js
  this.setState({
    posts: response.posts,
  });
  this.setState({
    comments: response.comments,
  });
  ```

  The merging is shallow, so `this.setState({comments})` leaves `this.state.posts` intact, but completely replaces `this.state.comments`.

> `setState(updater, [callback])`
>
> - `updater`: An updater function with the signature: `(prevState,props) => ({count: prevState + 1})` or an object: `{count: 5}`.
>   <br> If the cout is an object and you just want to modify part of it or add one property. Try: `{ count : {...prevState.count, count_pro:"sample"}}`.
> - `callback`: The second parameter to `setState()` is an optional callback function that will be executed once `setState` is completed and the component is re-rendered. Generally we recommend using `componentDidUpdate()` for such logic instead.

## Unidirectional Data Flow

This is commonly called a **"top-down" or "unidirectional" data flow**. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

> I think unidirectional data flow means: data is always from parent components to child components, never from child component sto parent components.

## JSX

Can't processed in Browser directly. Hence there is a need to convert this JSX into something which the browser can understand using **Bable**. And Babel will already be there for us in our app automatically.

## Conditional Rendering

Use `if` statement, conditional operator (`expression ? true:false`) or `{true && JSX_expression}`

## Error Boundaries

A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an **error boundary**.

**Error boundaries** are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

**Error boundaries** catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

- `getDerivedStateFromError()`: render a fallback UI after an error has been thrown.
- `componentDidCatch()`: log error information.

```js
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

```js
// usage
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

## PureComponent - reduce re-render

`React.PureComponent` implements it with a shallow prop and state comparison(**Shallow Comparison**) => `shouldComponentUpdate()`. If your React component’s `render()` function renders the same result given the same props and state, you can use `React.PureComponent` for a performance boost in some cases.

> **Shallow Comparision(SC)**:
>
> 1. Primitive Types: a,b => return true only if a and b have the same value and same type.
>
> 2. Complex Types:<br/>
>    For example: a = ['a','b'], b = ['a','b'], c = a
>    then, a,b => return false; a,c => return true(must be same object)

> **shouldComponentUpdate(T/F)** => SC props and states.
>
> SC of prevState with currentState => T to re-render.

## Fragments

## createElement() & cloneElement()

## Code Spliting

## Hooks

## Routing

### react-router-dom

### react-router

## Context

Do the same thing that **Flux** and **Redux** do => have a common store to share data.

**Context** is designed to share data that can be considered _global_ for a tree of React components, such as the current authenticated user, theme, or preferred language.

- `React.createContext()`
- `Context.Provider`
- `Context.Consumer`
- `Class.contextType`

1. Create Context: When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

```js
const MyContext = React.createContext(defaultValue);
```

# React-Redux

## Redux Basic

## Middleware

### Thunk

### Saga

# Flux
