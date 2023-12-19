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

/* const twoSum = function (nums, target) {
  let objeto = [];
  let iteracion = 0
  let nums_2 = [...nums];
  while (objeto.length < 2 || iteracion < nums.length) {
    const extact = nums_2.splice(iteracion, iteracion + 1); // elimina y extrae
    console.log('numero extarido =', extact);
    const rest = target - extact;
    if (rest > 0) {
      const find = nums_2.indexOf(rest);
      if (find >= 0) {
        objeto.push(nums.indexOf(extact));
        objeto.push(find + 1);
        break;
      }
    } 
    iteracion++;
  }
  return objeto;
} */

/* var twoSum = function(nums, target) {
  let obj = []
  nums.forEach(i =>{
    if (i < target) {
      const rest = target - i;
      if (rest === i) {
        let nums_2 = [...nums];
        console.log(nums_2);
      }
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
}; */

/* cagazo 
const twoSum = function (nums, target) {
  let obj = [];
  let iter = 0
  while (obj.length < 2) {
    const rest = target - nums[iter];
    console.log(`numero a encontrar ${rest}, i = ${iter}`); 
    const pregunta = nums.indexOf(rest, iter++);
    console.log(`pregunta:${pregunta}`);
    if (pregunta > 0) {
      obj.push(iter);
      obj.push(pregunta);
      break;
    } else{
      iter++;
      console.log('fracazo:' ,iter);
    }
  }
  return obj
} */

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6));// [2, 2] // [1, 2]
console.log(twoSum([3,3], 6)); // [0,1]
//twoSum([2,7,11,15], 9);