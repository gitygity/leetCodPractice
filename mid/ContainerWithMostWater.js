/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0
    let h = height.length - 1
    const distance = h - l
    let target = Math.min(height[l], height[h]) * distance
    while (l < h) {
        const min = Math.min(height[l], height[h])
        let distanceNew = h - l
        let volume = min * distanceNew
        if (target < volume)
            target = volume
        if (height[l] <= height[h]) {
            l++

        } else if (height[h] < height[l]) {
            h--
        }
    }
    return target
};