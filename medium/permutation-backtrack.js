// class Solution {
//   constructor(nums) {
//     this.nums = nums;
//     this.cnt = 0;
//   }
//   generatePermutation() {
//     let ans = [];
//     this.backtrack(ans, [], this.nums.length);
//     return ans;
//   }
//   backtrack(ans, cur, max) {
//     if (cur.length == max) {
//       ans.push(cur);

//       return;
//     }
//     let idx = 0;
//     while (idx < max) {
//       if (!cur.includes(nums[idx])) {
//         cur.push(nums[idx]);
//       }
//       idx++;
//     }
//     this.cnt += 1;
//     this.backtrack(ans, cur, max);
//   }
// }
function perm(a, k = 0) {
  if (k == a.length) {
    console.log(a);
  } else {
    for (i = k; i < a.length; i++) {
      a[k], (a[i] = a[i]), a[k];
      perm(a, k + 1);
      a[k], (a[i] = a[i]), a[k];
    }
  }
}
const nums = [1, 2, 3];
// let sol = new Solution(nums);
perm([1, 2, 3]);
// console.log(ol.generatePermutation());
