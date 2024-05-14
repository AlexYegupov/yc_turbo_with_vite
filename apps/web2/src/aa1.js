import React from 'react';
import { Header } from '@repo/ui2';
import { CounterReact } from '@repo/ui2';

var aa = 4;
aa += 'R_OK';

Math.sin(34);

function test(a) {
  return a + 3;
}

//let a = 19;

let MyComponent = () => <div>mydiv</div>;

console.log(React, Header, CounterReact, MyComponent);
console.log(test('1'));
//console.log(aa, a);
//console.log(aa == 1);
//console.log(aa === -0);
