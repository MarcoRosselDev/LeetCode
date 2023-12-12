// problem n-1
// easy

/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = []
  nums.forEach(i =>{
    if (i < target) {
      const rest = target - i;
      console.log('tenemos un numero para encontrar :', rest);
      const found = nums.indexOf(rest)
      const ind = nums.indexOf(i);
      console.log(`Encontramos la posicion de ${rest}, esta en el indice :` ,found);
      if (found > 0 && obj.length < 2) {
        obj.push(ind, found)
      }
    }
  })
  return obj;
};

console.log(twoSum([3,3], 6));
//twoSum([2,7,11,15], 9);