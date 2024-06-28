import React from 'react';
import { useState } from 'react'
import './App.css'

//import Counter from '@repo/ui2/Counter';
const Counter = React.lazy(() => import('@repo/ui2/Counter'));

function App() {
  const [lazyLoaded, setLazyLoaded] = useState(false)

  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />

      <React.Suspense fallback={<div>Loading...</div>}>
        { lazyLoaded
          ?
          <Counter />
          :
          <button onClick={() => setLazyLoaded(true)}>
            Load lazy
          </button>
        }
      </React.Suspense>
    </>
  )
}

export default App
