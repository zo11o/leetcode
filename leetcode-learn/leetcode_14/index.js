/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 我的解答： 并未通过
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  var n1 = 0
  var n2 = 0
  var result = []

  function list2array (listNode, arr = []) {
    if (listNode.val !== null && listNode.val !== undefined) {
      arr.push(listNode.val);
      if (listNode.next !== null) {
        return list2array(listNode.next, arr)
      }
    }

    return arr
  }

  function array2list (arr, listNode = {}) {

    var newListNode = {}
    newListNode.val = arr[arr.length - 1];
    newListNode.next = listNode.val !== undefined ? listNode : null
    if (arr.length > 0) {
      arr.pop()
      return array2list(arr, newListNode)
    }

    return listNode
  }

  var arr1 = list2array(l1)
  var arr2 = list2array(l2)

  arr1.forEach((o, i) => {
    n1 += o * Math.pow(10, i)
  })

  arr2.forEach((o, i) => {
    n2 += o * Math.pow(10, i)
  })

  var total = n1 + n2

  if (total === 0) {
    return {
      val: 0,
      next: null
    }
  }

  while (total) {
    result.push(total % 10)
    total = parseInt(total / 10)
  }

  result = array2list(result, {})

  return result
}
addTwoNumbers([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [5, 6, 4])