/*给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
示例 1:
输入:
    "bbbab"
输出:
    4
一个可能的最长回文子序列为 "bbbb"。
示例 2:
输入:
    "cbbd"
输出:
    2
一个可能的最长回文子序列为 "bb"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-subsequence*/

// time1: 44918.669ms
var longestPalindromeSubseq2 = function(s) {
    const cache = [];
    function _longestPalindromeSubseq(s,i,j){
        if(i>j) return 0;
        if(i === j) return 1;
        for(let k = 0; k < cache.length;k++){
            if(cache[k].start === i && cache[k].end === j){
                return cache[k].result;
            }
        }
        let result = null;
        if(s[i] === s[j]){
            result =  _longestPalindromeSubseq(s,i+1,j-1)+2;
        }else{
            result = Math.max(_longestPalindromeSubseq(s,i+1,j),_longestPalindromeSubseq(s,i,j-1));
        }
        cache.push({
            start:i,
            end:j,
            result:result
        });
        return result;
    }
    return _longestPalindromeSubseq(s,0,s.length-1);
};

// 用二维数组做缓存  15.135ms
var longestPalindromeSubseq3 = function(s){
    let length = s.length;
    let dp = new Array(length);
    for (let i = 0; i < length; i++) {
        dp[i] = new Array(length).fill(0);
    }
    function _longestPalindromeSubseq(s,i,j,memo){
        if(memo[i][j] !== null) return memo[i][j];
        if(i>j) return 0;
        if(i === j) return 1;
        let result = null;
        if(s[i] === s[j]){
            memo[i][j] =  _longestPalindromeSubseq(s,i+1,j-1,memo)+2;
        }else{
            memo[i][j] = Math.max(_longestPalindromeSubseq(s,i+1,j,memo),_longestPalindromeSubseq(s,i,j-1,memo));
        }
        return memo[i][j] ;
    }
    return _longestPalindromeSubseq(s,0,length-1,dp);
};

// time2: 21.740ms
var longestPalindromeSubseq1 = function(s) {
    let length = s.length;
    // dp[i][j]表示的是从s[i]至s[j]之间的最长回文子序列的长度
    let dp = new Array(length);
    for (let i = 0; i < length; i++) {
        dp[i] = new Array(length).fill(0);
    }
    for (let i = length - 1; i >= 0; i--) {
        // 每一个字符都是一个回文字符串，因此对于dp[i][i]设置为1
        dp[i][i] = 1;
        for (let j = i+1; j < length; j++) {
            // 状态转移方程为:
            // 当s[i]等于s[j]时，dp[i][j] = dp[i-1][j+1] + 2;
            // 当s[i]不等于s[j]时，dp[i][j] = max(dp[i-1][j], dp[i][j+1])
            if (s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][length-1];
};

var longestPalindromeSubseq = function(s){
    let max = 0;
    function _longestPalindromeSubseq(s,n){
        if(n === 1) return [s[0]];
        if(n === 2){
            if(s[0] === s[1]){
                return [s[0][0]];
            }else{
                return [s[0]];
            }
        }else{
            let result = [];
            for(let i = 1; i < n; i++){
                result = _longestPalindromeSubseq(s,i);
                if(result.length && result[0] === s[n-1]){
                    result.push(s[n-1]);
                }
                max = Math.max(max,result.length);
            }
            return result;
        }
    }
     _longestPalindromeSubseq(s,0,s.length);
     return max;
};

let str  = "euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew";
let str1 = "abbbbbb";
console.time("time1");
console.log(longestPalindromeSubseq(str1));
console.timeEnd("time1");
console.time("time2");
console.log(longestPalindromeSubseq1(str));
console.timeEnd("time2");