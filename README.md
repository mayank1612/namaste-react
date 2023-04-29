Lecture 1

- React library has core react logic
- React DOM has logic to play with DOM
- Different library because react is used in mobile, website(react-dom), some react 3d
- For a library, your app code calls the library code. For a framework, your app code is called by the framework.
- React element is object: Can inject react in any part of website. In existing project it can be added in header only
- React has mojorly a single root

Lecture 2

- React is replacing root, not appending
- Script inside root is not replaced by react

# parcel

- Dev build
- Create server
- HMR Hot module replacement - Auto refresh browser on refresh

Lecture 3

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

Lecture 3

- Key is given as prop to iterating element/component to make it unique which helps in rerender optimization
- Avoid to use index as a key

Lecture 4

- Two type of export - named and default (to export only one item)

Lecture 5

- React is fast because it is using virtual DOM (efficient DOM manipulation)
- Virtual DOM is nested js object which is representation of actual DOM
- Reconciliation algo - React fibre - Diff algo
- React creates copy of virtual DOM then check diff then update DOM
- We need function in useState to update variable. Function will trigger the diff algorithm

Lecture 6

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
- array is valid react child. It aautomatically iterate
- don't create component inside component
- useState provide local state variable which is used inside react component
- good practice to use cdn for images. (It cache, optimise, 100% up etc)

Lecture 7

- SPA
- Client side(don't make api call, code is present here only) vs server side routing(call api to fetch another html file)
