
function backtrack(cand, target, path, st, end, rst) {
    if (target < 0) {
        return;
    }
    if (path.length > 2)
        return;
    if (target == 0) {
        if (path.length < 2)
            return;
        rst.push(path);
        return;
    }
    for (i = st; i < end + 1; i++) {
        if (cand[i] > target)
            continue;
        else
            // path.push(cand[i]);
            backtrack(cand, target - cand[i], path.concat(cand[i]), i + 1, end, rst);
    }
}
function combinationSum(candidates, target) {

    // candidates.sort();
    rst = [];
    for (k = 0; k < candidates.length - 1; k++) {
        backtrack(candidates, target, [], k, candidates.length - 1, rst);
    }
    return rst;
}
const nums = [4, 5, 1, 2, 3];
const res = combinationSum(nums, 5);
res.map(x => console.log(x));