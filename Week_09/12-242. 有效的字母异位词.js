/*
 * @Author: your name
 * @Date: 2020-06-17 09:22:51
 * @LastEditTime: 2020-06-24 11:19:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Week_09\12-242. 有效的字母异位词.js
 */ 
/**
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
var isAnagram = function(s, t) {
   if (s === "" && t === "") return true
   if (s.length > t.length) return false
   let hashMap = new Map()
   for(let i = 0; i < s.length; i++) {
       if (!hashMap.has(s[i])) {
           hashMap.set(s[i], 1)
       } else {
           hashMap.set(s[i], hashMap.get(s[i])+1)
       }
   }
   for(let i = 0; i < t.length; i++) {
       if(!hashMap.has(t[i])){
        return false
     }
       if(hashMap.get(t[i]) > 0){
           hashMap.set(t[i], hashMap.get(t[i])-1)
       } else {
           return false
       }
   }
   return true
};