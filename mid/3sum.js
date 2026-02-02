/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    const numsMap = new Map()
    let finalTrippleMap = new Map()
    
    let finalTripple = []


    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        if (!numsMap.get(first)) {
            numsMap.set(first, i);
            for (let j = 0; j < nums.length; j++) {
                if (i != j) {
                    for (let k = 0; k < nums.length; k++) {
                        if (k !== i && k !== j) {

                            if (nums[k] + first + nums[j] == 0) {
                                addTuple([first, nums[j], nums[k]])
                            }
                        }
                    }
                }
            }
        }
    }

    function addTuple(tuple) {
    let key= tuple.slice().sort().join(',');

    if (!finalTrippleMap.has(key)) {
        finalTrippleMap.set(key);
       finalTripple = [...finalTripple, tuple];
    }
}

    return finalTripple
}




