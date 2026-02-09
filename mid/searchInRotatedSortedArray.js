/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let h = nums.length
    
    do {
        let m = Math.floor(l + (h - l) / 2)
        let mValue = nums[m]
        if(mValue===target){
            return m
        }else if (mValue>target && nums[m+1]>nums[m]){
            h=m
        }else {
            l=m+1
        }
    }
    while (l<h)
    return -1
};