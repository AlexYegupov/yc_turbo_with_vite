import { useState } from 'react';
import _ from 'lodash'

console.log(`l:`, _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))

const Counter = () => {
  const [counter, setCount] = useState(0);

  const clicked = () => {
    setCount(counter + 1)
  }

  return (
    <div>
      <span>Ui2 Counter: {counter}</span>
      <button onClick={clicked}>+</button>
    </div>
  )

}

export default Counter;
