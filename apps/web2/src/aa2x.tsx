import React from 'react';
import { Header } from '@repo/ui2';
import { CounterReact } from '@repo/ui2';

var aa = 4;
//aa += 'R_OK';

function test(a: number) {
  return a + 'sadf';
}

const MyComponent = () => <div>mydiv</div>;

console.log(React, Header, CounterReact, MyComponent);
//console.log(test('a'));
console.log(test(1));
console.log(
  aa,
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
);
//console.log(aa === -0);
