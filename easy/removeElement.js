/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let l = 0
    let h = nums.length - 1

    while (l < h) {
        if(nums[h]==val){
            h--
        }
        if (nums[l] == val) {
            nums[l] = nums[h]
            nums[h] = val
            h--
        }
        l++
    }
    return l+1
};