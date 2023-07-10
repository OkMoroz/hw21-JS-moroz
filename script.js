"use strict";
// function* Foo() {
//   console.log("start");
//   yield 1;
//   yield 2;
//   yield 3;
//   console.log("finish");
// }

// const iterator = Foo();
// iterator.next().value; // 1
// iterator.next().done; // false

// // *******

function Boo() {
  const values = [1, 2, 3];
  let n = 0;

  return {
    next: function () {
      if (n < values.length) {
        n++;
        return { value: n, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iterator = Boo();
console.log(iterator.next().value); // 1
console.log(iterator.next().done); // false
