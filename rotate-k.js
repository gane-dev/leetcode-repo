function rotate(nums, k) {
    k %= nums.length
    let temp, previous;
    for (i = 0; i < k; i++) {
        previous = nums[nums.length - 1];
        for (j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
    return nums;
}
const input = [7, 1, 5, 3, 6, 4];
console.log(rotate(input, 2));