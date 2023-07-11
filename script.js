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
  console.log("start");
  const values = [1, 2, 3];
  let n = 0;
  let finish = false;

  return {
    next: function() {
      if (n < values.length) {

        return {
          value: values[n++],
          done: false
        };
      } else if (!finish) {
        finish = true;
        console.log('finish');
        return {
          value: undefined,
          done: true
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
}

const iterator = Boo();
console.log(iterator.next().value); // 1
console.log(iterator.next().done); // false
