import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/* this App component provides a default layout in the webpage, we can also change it and use other html components like h1 */}
    {/* <h1>hello react</h1> */}
    {/* the styling occurs as I import the index.CSS */}

    {/* the strict mode will look for potential problems in the app */}
  </StrictMode>,
)

// // import React from 'react'

// const App = () => {
//   const name= 'Rakib'
//   const x = 10
//   const y = 20
//   const names = ['Brad','sexy','mexy']
//   const loggedIn = false

//   return (
//     <div>
//     <div classNameName='text-5xl'>App</div>
//     <p classNameName="text-red-500  text-3xl">My name is {name}.</p>
//     <p>The sum of {x} and {y} is {x+y}.</p>
//     <ul>
//       {names.map((names, index) => (
//         <li key={index}>
//           {names}
//         </li>
//       ))}
//     </ul>

//     {loggedIn? 'helloMember':'HelloGuest' }
//     </div>
//   )
// }
// //jsx returns only one type of element
// //if i wanna return multiple elements eg. div and p
// // i will wrap it inside another div className which will act as the parent
// //<>-> known as fragments, empty html tags can also be used
// export default App