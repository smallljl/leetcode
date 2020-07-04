 
/**
 *      给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

        '?' 可以匹配任何单个字符。
        '*' 可以匹配任意字符串（包括空字符串）。
        两个字符串完全匹配才算匹配成功。

        说明:

        s 可能为空，且只包含从 a-z 的小写字母。
        p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
        示例 1:

        输入:
        s = "aa"
        p = "a"
        输出: false
        解释: "a" 无法匹配 "aa" 整个字符串。
        示例 2:

        输入:
        s = "aa"
        p = "*"
        输出: true
        解释: '*' 可以匹配任意字符串。
        示例 3:

        输入:
        s = "cb"
        p = "?a"
        输出: false
        解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
        示例 4:

        输入:
        s = "adceb"
        p = "*a*b"
        输出: true
        解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
        示例 5:

        输入:
        s = "acdcb"
        p = "a*c?b"
        输出: false

        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/wildcard-matching
 * 
 * 
 */
var isMatch = function(s, p) {
    let n = s.length;
    let m = p.length;
    let dp = Array.from(new Array(n+1),()=>new Array(m+1).fill(false));
    dp[0][0] = true;
    for(let j = 1; j <= m;j++)
       (p[j-1] === "*") &&  (dp[0][j] = dp[0][j-1]);// 前一个字符 *a  s // s空串  p不为空串   
    for(let i = 1; i <= n; i++){
       for(let j = 1; j <= m;j++){
          if(s[i-1] === p[j-1] || p[j-1] === "?")
              dp[i][j] = dp[i-1][j-1];
          else if(p[j-1] === "*")
              dp[i][j] = dp[i][j-1] || dp[i-1][j];   // 0个 || 多个   abcde  a*b   
       }   
    }
    return dp[n][m];
};