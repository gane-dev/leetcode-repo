var removeDuplicates = function (nums) {
    let uniqPos = nums.length - 1;
    let currPos = uniqPos - 1;
    let uniqCount = 1;
    while (uniqPos > -1 && currPos > -1) {
        if (nums[currPos] == nums[uniqPos]) {
            let temp = uniqPos;
            while (temp < nums.length - 1) {
                nums[temp] = nums[temp + 1]
                temp = temp + 1;
            }
        }
        else {

            uniqCount = uniqCount + 1;
        }
        currPos = currPos - 1;
        uniqPos = uniqPos - 1;
    }

    return uniqCount;

};
// const nums = [1, 1, 2];
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(nums.slice(0, removeDuplicates(nums)));