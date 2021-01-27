/*
 *  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

    示例 1:

    输入: s = "anagram", t = "nagaram"
    输出: true
    示例 2:

    输入: s = "rat", t = "car"
    输出: false

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-anagram
 * 
 * 
 * 
 */ 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length !== t.length){
       return false;
   }
   const map = new Map();
   for(let i = 0; i < s.length; i ++){
       if(map.has(s[i])){
           map.set(s[i],map.get(s[i]) + 1);
       } else {
           map.set(s[i],1);
       }
       if(map.has(t[i])){
           map.set(t[i],map.get(t[i]) - 1);
       } else {
           map.set(t[i],-1);
       }
   }

   for(const letter of map){
       if(letter[1] !== 0){
           return false;
       }
   }
   return true;

};