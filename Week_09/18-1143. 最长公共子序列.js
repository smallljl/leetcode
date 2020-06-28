/**
 *      给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。

        一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
        例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

        若这两个字符串没有公共子序列，则返回 0。

         

        示例 1:

        输入：text1 = "abcde", text2 = "ace" 
        输出：3  
        解释：最长公共子序列是 "ace"，它的长度为 3。
        示例 2:

        输入：text1 = "abc", text2 = "abc"
        输出：3
        解释：最长公共子序列是 "abc"，它的长度为 3。
        示例 3:

        输入：text1 = "abc", text2 = "def"
        输出：0
        解释：两个字符串没有公共子序列，返回 0。

        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/longest-common-subsequence
 * 
 * 
 * 
 */
var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length;
    let len2 = text2.length;
    let dp = Array.from(new Array(len1+1),()=> new Array(len2+1).fill(0));
    for(let i = 1;i<= len1;i++){
        for(let j = 1;j<= len2;j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1;  // 相等
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);  // 不相等
            }
        }
    }
    return dp[len1][len2];
};