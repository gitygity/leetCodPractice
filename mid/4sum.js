/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    let answer = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue
            if (j > i + 1 && nums[j] == nums[j - 1]) continue


            let l = j + 1
            let h = nums.length - 1

            while (l < h) {
                let sum = nums[i] + nums[j] + nums[l] + nums[h]
                if (sum == target) {
                    answer = [...answer, [nums[i], nums[j], nums[l], nums[h]]]
                    while (l < h && nums[l] == nums[l + 1]) l++
                    while (l < h && nums[h] == nums[h - 1]) h--
                }
                if (sum < target) {
                    l++
                } else {
                    h--
                }
            }

        }
    }

    return answer
};


