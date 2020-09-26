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
 ### Explaination of Hook (useState)
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