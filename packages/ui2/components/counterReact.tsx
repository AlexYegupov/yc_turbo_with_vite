import { useState } from 'react';

var a = 10;
console.log(a)

export const CounterReact = () => {
  const [counter, setCount] = useState(0);

  const clicked = () => {
    setCount(counter + 1)
  }

  return (
    <div>
      <h3>Ui2 react counter: {counter}</h3>
      <button onClick={clicked}>+</button>
    </div>
  )

}
