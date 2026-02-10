/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort((a, b) => a - b)

    //set positive number for start
    let minPositive = nums[0]
    while (minPositive <= 0) minPositive++;

    //upper 1 return 1
    if (nums[0] > 0) {
        minPositive = 1;
    } else {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === minPositive) continue

            if (nums[i] === minPositive + 1) {
                minPositive = minPositive + 1
                if (minPositive === nums[nums.length - 1]) {
                    minPositive = nums[nums.length - 1] + 1;
                    break
                }

            } if (nums[i] > minPositive) {
                minPositive = minPositive + 1
                break
            } else {
                minPositive = minPositive + 1

            }
        }
    }

    return minPositive <= 0 ? 1 : minPositive
};