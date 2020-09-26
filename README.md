### React Notes

Some advanced react concepts which I'm learning right now.

- This app is created with npx create-react-app

Feel free to fork and star the repo !

- HOC - Higher Order Component Concept (Wrapping a component in its parent) => available in src/hoc folder

#### Why HOOKS

- Classes are a bit difficult for beginners
- Classes in Javascript are not real classes but a syntactical sugar over constructor function
- this keyword is confusing in js .
- Classes require some boilerplate code.
- Hence react team improved functional components
- sfc will avoid repeated references to this keyword. Simply pass props as an argument to your function. We will use a special method call useState() from react library. This is called hooks
- useState() is called react Hook. It is used to hook into react state.

### 1. Explaination of Hook (useState)

- useState allows us to work with state
- import {useState} from 'react'
- useState() will return an array containing two items.
- We can use array destructuring to access those values. for eg
  const [count, setCount] = useState(0)
  The value we pass to this useState is INITIAL VALUE of that variable. for eg useState('') for changing some text
- Remember - you cannot call hooks in loops, nested conditions or nested functions.. if() {hook here} -> wrong
- Good Practice : When naming a setter function for state variable, use this name 'set<VarName>'
  eg setCount, setName, setLassun
- Avoid using setState as a name because its very generic

### 2. Explaination of Hook (useEffect)

- In class components we have

1.  componentDidMount()
2.  componentDidUpdate()
3.  componentWillUnmount()

these are good but managing so many fx becomes cumbersome when we have complex operations.

The solution to this is using useEffect hook

- useEffect(func)
  - the function passed in useEffect gets called everytime our component renders
  - useEffect also takes a second argument called dependencies.. usually an array
    eg. useEffect(()=>{
    something happens here
    },[])
    in this second argument, we pass array of those variables, useEffect is dependent upon. suppose we want the inner block to execute only when count is changed , we pass count into dependency array of useEffect

### 3. Custom Hook

- What are these ? bascially export a new module ..
- use the name scheme as use<whatever your purpose>
  eg useDocumentTitle
- Name that file use<purpose>.js
- in it, export default function(any args){
  useEffect(()=>{
  do something with args
  })
  }

and import in your jsx

### 4. Context API

- Traditionally, what happens when our app grows component wise, we have to constantly drill the props to pass values to each other. This is called Prop Drilling

- Maintaining such thing becomes really really tough. To encounter this issue, React team has a new API called
  'Context API'

- How to use ??
- In our APP.js we have some state. To pass this state down the component tree, we create a context first

<code>
import React from 'react';

const UserContext = React.createContext(); // return context object

export default UserContext

</code>

import this in our App.js

- Wrap our components in FileNameContext.provider value={the prop values which you want to pass to the component tree}

<code>
<UserContext.Provider value={this.state.currentUser}>

</UserContext.Provider>
</code>