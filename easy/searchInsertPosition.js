/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0
    let h = nums.length
     let m =-1
    let findedIndex = 0
    do {
             m = Math.floor(l + (h - l) / 2)
        if (target == nums[m]) {
              
            return m
        } else if (target < nums[m]) {
            h = m 
        } else if (target > nums[m]) {
            l = m+1
        }

    } while (l < h && m!==l)
    return l

};