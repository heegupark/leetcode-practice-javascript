// 47. Permutations II

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = [];
    let visited = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    const permutator = (array, visited) => {
        if(array.length === nums.length) return results.push(array);
        for(let i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] == nums[i-1] && !visited[i-1])) continue;
            visited[i] = true;
            permutator([...array, nums[i]], visited);
            visited[i] = false;
        };
    };
    permutator([], visited);
    return results;
};
