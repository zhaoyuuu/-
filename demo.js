function search(list, target) {
  // 这里假设 给定的list数组是递增的
  let left = 0, right = list.length - 1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(list[mid] === target) return mid
    else if(list[mid] > target) right = mid - 1
    else if(list[mid] < target) left = mid + 1
  }
  return -1
}

// 使用
const arr = [-1,0,3,5,9,12]
const searchIndex = search(arr, 9)
console.log(searchIndex);  // 4