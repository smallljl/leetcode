/****
 * 
 * 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
*
*/
// 1.暴力求解
var isAnagram1 = function(s, t) {
    if (s.length !== t.length) {
      return false
    }
    let A = s.split("");
    let B = t.split("");
    return (A.sort().join("") === B.sort().join(""));
};
// map 的解法
var isAnagram = function(s,t){
   if(s.length !== t.length) return false;
   const wordMap = {};
   for(let i = 0; i < s.length;i++){
       if(wordMap[s[i]]){
           wordMap[s[i]]++;
       }else{
           wordMap[s[i]] = 1;
       }
   }
   for(let i = 0; i < t.length;i++){
       if(wordMap[t[i]] && wordMap[t[i]] > 0){
           wordMap[t[i]]--;
       }else{
           return false;
       }
   }
   return true;
};
