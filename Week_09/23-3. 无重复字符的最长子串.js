/*
*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
*/
var lengthOfLongestSubstring = function(s) {
  let map = new Map(), max = 0;
  for(let i = 0, j = 0,len = s.length; j < len; j++) {
      (map.has(s[j])) && (i = Math.max(map.get(s[j]) + 1, i));
      max = Math.max(max, j - i + 1);
      map.set(s[j], j);
  }
  return max;
};