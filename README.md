# hw21-JS-moroz
function* Foo() {
  console.log('start')
  yield 1
  yield 2
  yield 3
  console.log('finish')
}

const iterator = Foo()
iterator.next().value // 1
iterator.next().done // false

// *******

function Boo() {
  // писати код тут
}

const iterator = Boo()
iterator.next().value // 1
iterator.next().done // false
