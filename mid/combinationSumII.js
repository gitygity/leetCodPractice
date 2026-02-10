/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a,b) => a - b);
   const res = []

   function dfs(start, path, sum) {
       if (sum > target) return
       if (sum === target) {
           res.push([...path])
           return
       }

       for(let i=start;i<candidates.length;i++){
           if (i > start && candidates[i] === candidates[i - 1]) continue;
           //pre
           path.push(candidates[i])
           //recursive
           dfs(i+1,path,sum+candidates[i])
           //post
           path.pop()
       }
   }

   dfs(0,[],0)
   return res
};