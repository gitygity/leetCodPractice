/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []


    function dfs(start, path, sum) {

        //base condition
        if (sum > target) return
        //ok
        if (sum === target) {
            res.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            //pre condition
            path.push(candidates[i])
            //recursive
            dfs(i, path, sum + candidates[i])
            //post condition
            path.pop()
        }


    }

    dfs(0, [], 0)
    return res
};