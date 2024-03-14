import React from 'react';
import { Header } from 'ui';
import { Counter } from 'ui2';

var aa = 4;
aa += 'R_OK';

Math.sin(34);

function test(a) {
  return a + 3;
}

console.log(React, Header, Counter);
console.log(test('1'));
console.log(aa);
console.log(aa === -0);
