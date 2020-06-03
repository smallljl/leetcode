/*
 * 
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
示例:
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：
所有输入均为小写字母。
不考虑答案输出的顺序。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
* 
*/
var groupAnagrams = function(strs) {
    const map = {};
    for(let i = 0; i < strs.length;i++){
        let str = strs[i].split("").sort().join();
        if(!map[str]){
            map[str]= [strs[i]];
        }else{
            map[str].push(strs[i]);
        }
    }
    let result = [];
    for(let key in map){
        result.push(map[key]);
    }
    return result;
}