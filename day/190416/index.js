
function formatData (data) {
  let result = Array.from({ length: 12 }).map((o,index) => {
    return data[index + 1] || null
  })

  console.log(result)

  return result
}

var data = { 1: 222, 2: 123, 5: 888 }
formatData(data)
