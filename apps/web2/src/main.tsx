import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { testts } from './test.ts'
import { a } from './testjs.js'

interface User {
  name: string;
}

//let aa = 4; aa += 'R_OK';

function test(u: User) {
  u.name = 'asdf'
  console.log(`testts:`, testts({name: 'vasya'}), 'a:', a)
}

//var a = 10;
//console.log(`111`)

test({name: 'asdf'})

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
