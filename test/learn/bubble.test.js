import sort from '../../code/sort/bubbleSort'
test('冒泡排序', () => {
  expect(sort([1])).toEqual([1])
})

test('冒泡排序 大数组', () => {
  expect(sort([33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6])).toEqual([0, 1, 2, 4, 4, 6, 24, 33, 55, 55, 77])
})
