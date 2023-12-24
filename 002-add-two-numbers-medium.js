/* You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself. */

/* Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let resp = []
  for (let index = 0; index < l1.length; index++) {
    let a = ListNode(l1[index]);
    console.log(a);
    resp.push()
  }
  return resp

  //const l1_reverse = Number(l1.reverse().join(''))
  //const l2_reverse = Number(l2.reverse().join(''))
  //const l2_reverse = l2.reverse().join('')
  //const suma = l1_reverse + l2_reverse
  //return suma.toString().split('').reverse();
};


//addTwoNumbers([2,4,3], [5,6,4]); // [7,0,8]
console.log(addTwoNumbers([2,4,3], [5,6,4])); // [7,0,8]
//console.log(addTwoNumbers([0], [0])); // [0]
//console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1]
// solucion de la suma = 10.009.998, pero se almacena alreves
