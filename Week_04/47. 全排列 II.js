/**
 *
 *  给定一个可包含重复数字的序列，返回所有不重复的全排列。
    示例:
    输入: [1,1,2]
    输出:
     [
         [1,1,2],
         [1,2,1],
         [2,1,1]
     ]
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/permutations-ii
 *
 *
 */
var permuteUnique = function(nums) {
    let list = [];
    let sublist = [];
    let len = nums.length;
    nums.sort((a,b)=>a-b);
    let used = [];
    function dfs(sublist,index,used){
        if(index === len){
            list.push(sublist.slice(0));
            return;
        }
        for(let i = 0; i < len;i++){
            if(used[i]) continue;
            // 剪枝条件, i > 0 是为保证num[i-1] 有意义
            // used[i-1] 是因为 nums[i-1] 在回退的过程中刚刚被撤销选择
            if(i > 0 && nums[i] === nums[i-1] && used[i-1] === false)
                continue;
            sublist.push(nums[i]);
            used[i] = true;
            dfs(sublist,index+1,used);
            sublist.pop();
            used[i] = false;
        }
    }
    dfs(sublist,0,used);
    return list;
};
console.log(permuteUnique([1, 4, 5]));