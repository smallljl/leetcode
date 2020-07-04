/**
 *      给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

        字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

        说明：

        字母异位词指字母相同，但排列不同的字符串。
        不考虑答案输出的顺序。
        示例 1:

        输入:
        s: "cbaebabacd" p: "abc"

        输出:
        [0, 6]

        解释:
        起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
        起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
         示例 2:

        输入:
        s: "abab" p: "ab"

        输出:
        [0, 1, 2]

        解释:
        起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
        起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
        起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
 * 
 * 
 * 
 */
let s = "cbaebabacd", p="abc";

/**
 * @description: 不理解 
 * @param {type} 
 * @return: 
 */
var findAnagrams = function(s, p) {
      let arrS = s.split("");
      let arrP = p.split("");
      let ans = [];  // 接收最后返回的结果
      let needs = new Array(26).fill(0);  // 定义一个 needs 数组来看 arrP 中包含元素的个数
      let window = new Array(26).fill(0); // 定义一个 window 数组来看滑动窗口中是否有 arrP 中的元素，并记录出现的个数
      // 先将 arrP 中的元素保存到 needs 数组中
      for(let i = 0; i < arrP.length; i++){
        needs[arrP[i] - 'a'] += 1;
      }
      let left = 0;
      let right = 0;
      while(right < arrS.length){
        let curR = arrS[right] - "a";
        right++;
        // 将右窗口当前访问到的元素 curR 个数加 1 
        window[curR] += 1;
        // 当 window 数组中 curR 比 needs 数组中对应元素的个数要多的时候就该移动左窗口指针 
        while (window[curR] > needs[curR]) {
            let curL = arrS[left] - 'a';
            left++;
            // 将左窗口当前访问到的元素 curL 个数减 1 
            window[curL] -= 1;            
        }
        // 这里将所有符合要求的左窗口索引放入到了接收结果的 List 中
        if (right - left == arrP.length) {
            ans.add(left);
        }
      }
      return ans;
};
console.log(findAnagrams(s,p));