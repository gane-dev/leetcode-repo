
function moveZeroes(nums) {
    let initLength = nums.length - 1;
    let nonZero = 0;
    while (nonZero < initLength)
        if (nums[nonZero] == 0) {
            for (i = nonZero; i <= initLength; i++) {
                nums[i] = nums[i + 1];
            }
            if (nums[nonZero] != 0)
                nonZero++;
            nums[initLength] = 0;
            initLength = initLength - 1;
        }
        else {
            nonZero++;
        }
    return nums;
};
// const input = [7, 0, 5, 0, 6, 9];
const input = [0, 0, 1];
console.log(moveZeroes(input));