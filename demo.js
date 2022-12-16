/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    let j = i, sum = 0
    while(sum < k && j < nums.length) {
      sum += nums[j]
      j++
    }
    console.log(sum);
    if(sum === k) count++
  }
  return count
};

const nums = [1]
console.log(subarraySum(nums, 0));