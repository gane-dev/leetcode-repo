function addone(nums) {
    function checkAndAdd(pos) {
        if (nums[pos] == 9) {
            if (pos == 0) {
                nums[pos] = 0;
                nums.unshift(1);
                return;
            }
            else {
                nums[pos] = 0;
            }
            checkAndAdd(pos - 1);
        } else {

            nums[pos] = nums[pos] + 1;
        }
    }
    const numsLen = nums.length;
    checkAndAdd(numsLen - 1);
    return nums;
}
// const input = [7, 1, 5, 3, 6, 4];
const input = [7, 1, 5, 3, 6, 9];
// const input = [9, 9, 9, 9, 9, 9];
console.log(addone(input));