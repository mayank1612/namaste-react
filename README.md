# Lecture 1

- React library has core react logic
- React DOM has logic to play with DOM
- Different library because react is used in mobile, website(react-dom), some react 3d
- For a library, your app code calls the library code. For a framework, your app code is called by the framework.
- React element is object: Can inject react in any part of website. In existing project it can be added in header only
- React has mojorly a single root
- npx is to directly execute

# Lecture 2

- React is replacing root, not appending
- Script inside root is not replaced by react

# parcel

- Dev build
- Create server
- HMR Hot module replacement - Auto refresh browser on refresh

# Lecture 3

- npm start is same as npm run start > works only for start
- npm run build != npm build

- JSX is not Javascript inside HTML. It is html like syntax
- JSX is converted to react element > JS object > HTML element
- JSX is transpilled by babel (which is javascript compiler)
- As javascript engine (browser) only understand pure jacascript and not JSX

- React component is a normal js function which returns jsx (react element)
- React element is object
  // Element
- const heading = `<h1>Heading</h1>`
  root.render(heading)
  // Component
- const HeadingComponent = () => {return `<h1>Heading</h1>`}
  root.render(`<HeadingComponent />`) // Babel get to know it is component by <>
  `<HeadingComponent />` is same as HeadingComponent()
  render needs element as a arguement

- Element can have component inside it
- JSX sanitize data before executing it. Whatever data is inside {} under jsx is sanitized to prevent cross-site scripting
- Key is given as prop to iterating element/component to make it unique which helps in rerender optimization
- Avoid to use index as a key

# Lecture 4

- Two type of export - named and default (to export only one item)

# Lecture 5

- React is fast because it is using virtual DOM (efficient DOM manipulation)
- Virtual DOM is nested js object which is representation of actual DOM
- Reconciliation algo - React fibre - Diff algo
- React creates copy of virtual DOM then check diff then update DOM
- We need function in useState to update variable. Function will trigger the diff algorithm

# Lecture 6

- Monolith (All at one place - UI, API's, backend) vs micro services
- babelrc pending
- useEffect with empty dependency called 'after' initial render. (First render then useEffect)
- In JSX, JS expression is allowed, not statement. But statement can be converted to expression
- Optional chaining (?.) `obj.val?.prop
obj.val?.[expr]
obj.func?.(args)`
- (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.
- fetch() is browser functionality. Node doesn't know it. Install package to use it. json() on response is prototype of response
- expressions return a value, while statements perform an action
- array is valid react child. It automatically iterate
- don't create component inside component
- useState provide local state variable which is used inside react component
- good practice to use cdn for images. (It cache, optimise, 100% up etc)

# Lecture 7

- SPA
- Client side(don't make api call, code is present here only) vs server side routing(call api to fetch another html file)
- routes
- formik library for react forms
- createBrowserRouter, RouterProvider, Link, useRouteError, useParams, Outlet from 'react-router-dom'

# Lecture 8 : Let's get classy

- render() method is compulsory for class based component
- Life cycle methods
  Constructor, render, componentDidMount (make api calls here - first render it then will update)
- Why api call is inside useEffect (componentDidMount in class) > First render whatever is possible using default state then after useEffect rerender
- React component life cycle
- Why super() is called in constructor > This is because super() initializes the parent class and sets up the this keyword and its context.
- Life cycle example > parent constructor, parent render, child constructor, child render, child componentDidMount, parent componentDidMount
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Refer About.js for detailed lifecycle
- Lifecycle has two phase, render phase and commit phase. In render phase, constructor and render is completed for all parent + child. In commit phase, React updates ­D­O­M and componentDidMount() is executed
- You can make componenentDidMount async but not useEffect callback. Why?
  React relies on the return value of the callback to handle the cleanup of the effect. If you were to use an async function directly as the callback, it would return a Promise, which is not a valid type for the cleanup function.
- Don't compare react class life cycle with useEffect

# Lecture 9 : Optimizing the app

- custom hook
- chunking/code spliting/dynamic bundling/lazy loading/on demand loading/ dymamic import
- upon on demand loading, react tries to suspend it
- lazy, suspense
- don't use lazy load inside component, always lazy load on top

# Lecture 10 : Jo dikhta h vo bikta h

- Tailwind css : Override default behaviour of HTML tags like <h1>, <a>
  - Easy to debug, less bundle size, less code, intutive using extention
  - Not much readable, if many attributes are used

# Lecture 11 : Data is new oil

- Prop drilling : Passing prop from one component to another
- Rerender occur when:
  Update in State
  Update in prop
  Re-rendering of the parent component
- lifting the state up : controlled accordian - when siblings state depends on each other

# Lecture 12 : Let's build our store

- On click, dispatches an action, it calls the reducer function, it updates the slice of a redux store
- Cannot udate direct redux store
- To read slice, selector is used. Selector is a hook
- App is subscribed with slice via selector
- Core job of redux is to mantain store/slice
- ligting the state up : controlled accordian - when siblings state depends on each other
- context is like useState for whole app
- Provider is updating context value. Provider takes value as a prop
- Consumer is used in class based component. Check About.js

# Extras

- useEffect cleanup function does not only run when our component wants to unmount, it also runs right before the execution of the next scheduled effect.
- The cleanup is commonly used to cancel all subscriptions made and cancel fetch requests
- Pure js function - They always yield consistent result and does not manipulate non-local state or have any side effects. Article: https://www.scaler.com/topics/pure-function-in-javascript/
  (Advantage: Better redability, better testing etc)
- A React component is considered pure if it renders the same output for the same state and props.
- PureComponent is similar to Component but it skips re-renders for same props and state.
- However, your component will still re-render if a context that it’s using changes.
  (Advantage: Optimized as number of re-render is reduced)
- Strict Mode enables the following development-only behaviors:
  Your components will re-render an extra time to find bugs caused by impure rendering.
  Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
  Your components will be checked for usage of deprecated APIs.
- JSX doesn't return null,undefined and false
- The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
- logical AND or short circuit '&&' operator, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
- falsy values = null, undefined, false, 0, "", NaN
- truthy values means all values except falsy values
- In useState, whenever using state variable to update new value, use function version in setState
- "state variable will change only when it is rerendered", so it clubs all state changes when performed multiple at a time without using callback function on same state and in result update only last useState
