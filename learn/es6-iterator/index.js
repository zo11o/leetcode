// var obj = {
//   name: 'hello',
//   age: 13,
//   [Symbol.iterator]: function () {
//     let self = this
//     console.log(Object.keys(obj))
//     let index = 0
//     return {
//       next () {
//         if (index < Object.keys(self).length) {
//           return {
//             value: { [Object.keys(self)[index++]]: self[Object.keys(self)[index]] },
//             done: false
//           }
//         }
//         return {
//           value: { [Object.keys(self)[index]]: self[Object.keys(self)[index]] },
//           done: true
//         }
//       }
//     }
//   }
// }

// for (let prop of obj) {
//   console.log(prop)
// }

// 简版 object 实现 iterator 接口
// var obj = {
//   name: 'zorro',
//   age: 44,
//   * [Symbol.iterator] () {
//     yield 'hello'
//     yield 'world'
//   }
// }

// for (let x of obj) {
//   console.log(x)
// }

// let delegatedIterator = (function * () {
//   yield 'Hello!'
//   yield 'Bye!'
// }())

// let delegatingIterator = (function * () {
//   yield 'Greetings!'
//   yield * delegatedIterator
//   yield 'Ok, bye.'
// }())

// for (let value of delegatingIterator) {
//   console.log(value)
// }

// function * gn () {
//   yield 1
//   yield * '3erfsqwefsdf'
//   yield 3
// }

// for (const g of gn()) {
//   console.log(g)
// }

// 铺平数组
// function * getItem (tree) {
//   if (Array.isArray(tree)) {
//     for (let i = 0; i < tree.length; i++) {
//       yield * getItem(tree[i])
//     }
//   } else {
//     yield tree
//   }
// }

// const tree = [ 'a', ['b', 'c'], ['d', 'e'] ]

// for (const t of getItem(tree)) {
//   console.log(t)
// }

// 二叉树
function Tree (left, label, right) {
  this.left = left
  this.label = label
  this.right = right
}

// 生成二叉树
function make (arr) {
  if (arr.length === 1) return new Tree(null, arr[0], null)
  return new Tree(make(arr[0]), arr[1], make(arr[2]))
}

let tree = [[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]

console.log()

function * inOrder (t) {
  if (t) {
    yield * inOrder(t.left)
    yield t.label
    yield * inOrder(t.right)
  }
}

var result = []
for (const t of inOrder(make(tree))) {
  result.push(t)
}

console.log(result)

function * gen () {
  console.log(this)
  yield 1
  console.log(this)
  yield 3
  return 2
}

let g = gen()

console.log(
  g.next().value,
  g.next().value
)
