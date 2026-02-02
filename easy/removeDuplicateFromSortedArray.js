/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pointer = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[pointer] == nums[i]) {
            continue
        } else {
            nums[pointer + 1] = nums[i]
            pointer++
        }
    }
   
    return  pointer+1
};