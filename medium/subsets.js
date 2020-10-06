class Solution {
  constructor(nums) {
    this.output = [];
    this.n = nums.length;
    this.k = 0;
    this.nums = nums;
  }
  backtrack(first, curr) {
    if (curr.length == this.k) this.output.push(curr);
    for (let i = first; i < this.n; i++) {
      curr.push(this.nums[i]);
      this.backtrack(i + 1, curr);
      curr.pop();
    }
  }
  subsets() {
    for (this.k = 0; this.k < this.n + 1; ++this.k) {
      this.backtrack(0, []);
    }
    return this.output;
  }
}
const nums = [1, 2, 3];
let cls = new Solution(nums);
console.log(cls.subsets());
