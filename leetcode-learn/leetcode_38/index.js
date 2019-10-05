/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let mapArray = ['0', '1']
  let newStr = ''
  let count = 1
  let x = 1
  while (x <= 30) {
    let _str = mapArray[x]

    for (let i = 0; i <= _str.length - 1; i++) {
      if (_str.charAt[i + 1] !== undefined && _str.charAt[i + 1] === _str[i]) {
        i++
        count++
        if (i > _str.length - 1) {
          newStr = count.toString() + _str[i]
          mapArray.push(newStr)
          count = 1
        }
      } else {
        newStr = count.toString() + _str[i]
        mapArray.push(newStr)
        count = 1
      }
    }

    newStr = ''
    x++
  }

  console.log(mapArray)
}

countAndSay(2)
