function binarySearch(arr, val, start, end) {
  var start = start === undefined ? 0 : start
  var end = end === undefined ? arr.length : end

  if (start > end) {
    return -1
  }

  const index = Math.floor((start + end) / 2)
  const item = arr[index]

  console.log(start, end, index)
  if (item == val) {
    return index
  }

  else if (item < val) {
    return binarySearch(arr, val, index + 1, end)
  }

  else if (item > val) {
    return binarySearch(arr, val, start, index - 1)
  }
}

const myArr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
console.log(binarySearch(myArr, 16))