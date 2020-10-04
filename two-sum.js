
var twoSum = function (nums, target) {
    const sumMap = new Map();
    let idx = 0;

    while (idx < nums.length) {
        if (sumMap.has(nums[idx])) {
            return [sumMap.get(nums[idx]), idx];
        }
        else {
            sumMap.set(target - nums[idx], idx);
        }
        idx++;
    }
};
const input = [3, 2, 4];
// const input = [-3, 4, 3, 90]
console.log(twoSum(input, 6));