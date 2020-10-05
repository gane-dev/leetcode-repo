class Solution {
  generateParanthesis(n) {
    let ans = [];
    this.backtrack(ans, "", 0, 0, n);
    return ans;
  }
  backtrack(ans, cur, open, close, max) {
    if (cur.length == max * 2) {
      ans.push(cur);
      return;
    }
    if (open < max) this.backtrack(ans, cur + "(", open + 1, close, max);
    if (close < open) this.backtrack(ans, cur + ")", open, close + 1, max);
  }
}
let sol = new Solution();
console.log(sol.generateParanthesis(3));
