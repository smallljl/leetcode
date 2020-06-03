/***
 *
 *   给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
     说明：解集不能包含重复的子集。
     示例:
     输入: nums = [1,2,3]
     输出:
     [
         [3],
         [1],
         [2],
         [1,2,3],
         [1,3],
         [2,3],
         [1,2],
         []
     ]
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/subsets
 *
 */
var subsets1 = function(nums) {
    let list = [];
    let sublist = [];
    let n = nums.length;
    function dfs(sublist,index){
        if(index === n){
            list.push(sublist.slice(0));
            return;
        }
        dfs(sublist,index+1);  // 不选
        sublist.push(nums[index]);
        dfs(sublist,index+1); // 选
        sublist.pop();
    }
    dfs(sublist,0);
    return list;
};

var subsets = function(nums){
    let n = nums.length;
    let tmpPath = [];
    let res = [];
    let backtrack = (tmpPath,start) => {
        res.push(tmpPath);
        for(let i = start;i < n;i++){
            tmpPath.push(nums[i]);
            backtrack(tmpPath.slice(),i+1);
            tmpPath.pop();
        }
    };
    backtrack(tmpPath,0);
    return res;
};

console.log(subsets([1, 2]));