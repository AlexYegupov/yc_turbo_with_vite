import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

//let aa = 4; aa += 'R_OK';

console.log(`React,`, React)

function App() {
  const [count, setCount] = useState(0)

  // const fff = (p) => {
  //   console.log(`123`, p)
  //   console.log(`123`)
  //   let a;
  //   if (p > 5) a = 1
  //   a = 'asdf';
  //   console.log(a)
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
