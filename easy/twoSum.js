/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i!==j) {
               return [i, j]
                
            }
        }
    }
};

var twoSum = function (nums, target) {
    const mapNums=new Map()
    for (i = 0; i < nums.length; i++) {
        const diff=target-nums[i]
        if(mapNums.has(diff)) return [i,mapNums.get(diff)]
        else mapNums.set(nums[i],i)
    }
};