/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)

    let closeSum = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length; i++) {
        let l = i + 1
        let h = nums.length - 1

        while (l < h) {
            let sum = nums[i] + nums[l] + nums[h]
            if (Math.abs(closeSum - target) > Math.abs(sum - target)) {
                closeSum = sum
            }
            if (sum < target) {
                l++
            } else {
                h--
            }
        }
    }

    return closeSum
};
