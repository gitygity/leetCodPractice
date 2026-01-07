/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const num1Length = nums1.length;
    const num2Length = nums2.length;
    let temp = [];
    let j = 0; i = 0
    const sumLength = num1Length + num2Length;

    for (k = 0; k < sumLength; k++) {

        if (nums1[i] > nums2[j]) { temp = [...temp, nums2[j]]; j++; }
        else if (nums1[i] < nums2[j]) { temp = [...temp, nums1[i]]; i++ }

        else if (i >= num1Length) { temp = [...temp, nums2[j]]; j++; }
        else if (j >= num2Length) { temp = [...temp, nums1[i]]; i++; }

    }

    const minIndex = Math.floor(sumLength / 2)

    if (sumLength % 2 != 0) return temp[minIndex]
    else return (temp[minIndex] + temp[minIndex - 1]) / 2

};