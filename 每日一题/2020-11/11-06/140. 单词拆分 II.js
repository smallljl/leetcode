/**
 * 
 * 
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

    说明：

    分隔时可以重复使用字典中的单词。
    你可以假设字典中没有重复的单词。
    示例 1：

    输入:
    s = "catsanddog"
    wordDict = ["cat", "cats", "and", "sand", "dog"]
    输出:
    [
      "cats and dog",
      "cat sand dog"
    ]
    示例 2：

    输入:
    s = "pineapplepenapple"
    wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
    输出:
    [
      "pine apple pen apple",
      "pineapple pen apple",
      "pine applepen apple"
    ]
    解释: 注意你可以重复使用字典中的单词。
    示例 3：

    输入:
    s = "catsandog"
    wordDict = ["cats", "dog", "sand", "and", "cat"]
    输出:
    []

 * 
 */

var wordBreak = function(s, wordDict) {
    // dp[i] ===> dp[j] + substring(j , i);
    let len = s.length;
    let wordSet = new Set(wordDict);
    let dp = new Array(len + 1).fill(false);
    dp[0] = true;
    for(let i = 1; i <= len; i ++){
        for(let j = 0; j < i; j ++){
            let tmp = s.substring(j,i);   // j 到 i 不包含i
            if(dp[j] && wordSet.has(tmp)){
                dp[i] = true;
                break;
            }
        }
    }
    
    let res = [];
    if(dp[len]){
        let path = [];
        dfs(s,len,wordSet,dp,path,res);
    }
    return res;

    // s 
    // len = 前缀字串
    // wordSet
    // dp 
    // path
    // res
    function dfs(s,len,wordSet,dp,path,res){
        if(len === 0){
            res.push(path.join(" "));
            return;
        }

        for(let i = len-1; i >= 0; i--){
            let tmp = s.substring(i,len);
            if(dp[i] && wordSet.has(tmp)){
                path.unshift(tmp);
                dfs(s, i , wordSet, dp, path, res);
                path.shift();
            }
        }
    }
};