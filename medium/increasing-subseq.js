
function increasingTriplet(nums) {
    let count = 0;
    const countMap = new Map();
    for (idx = 0; idx < nums.length; idx++) {
        let min = nums[idx];


        for (i = idx + 1; i < nums.length; i++) {
            if (countMap.has(min)) {
                const arry = countMap.get(min);
                for (tmp = 0; tmp < arry.length; tmp++) {

                    if (arry[tmp] < nums[i]) {
                        return true;
                    }
                }
                if (min < nums[i]) {
                    arry.push(nums[i]);
                    countMap.set(min, arry);
                }
            }
            else {
                if (min < nums[i]) {
                    countMap.set(min, [nums[i]]);
                }
            }

        }
    }
    return false;
};
// const input = [1, 2, 3, 2, 5];

const input = [5, 1, 2, 5, 5, 5, 4]
console.log(increasingTriplet(input));