/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0
   let h = nums.length
   let res=[-1,-1]
   do {
       let m = Math.floor(l + (h - l) / 2)
       let mValue = nums[m]
       if(mValue===target){
          let s=m
          let e=m

          while (s - 1 >= 0 && nums[s - 1] === target) s--;
           while (e + 1 < nums.length && nums[e + 1] === target) e++;

           return [s, e];
       }else if (mValue>target){
           h=m
       }else {
           l=m+1
       }
   }
   while (l<h)
   return res
};