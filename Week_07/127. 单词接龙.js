/*
 *
 *  给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

    每次转换只能改变一个字母。
    转换过程中的中间单词必须是字典中的单词。
    说明:

    如果不存在这样的转换序列，返回 0。
    所有单词具有相同的长度。
    所有单词只由小写字母组成。
    字典中不存在重复的单词。
    你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
    示例 1:

    输入:
    beginWord = "hit",
    endWord = "cog",
    wordList = ["hot","dot","dog","lot","log","cog"]

    输出: 5

    解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
        返回它的长度 5。
    示例 2:

    输入:
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot","dot","dog","lot","log"]

    输出: 0

    解释: endWord "cog" 不在字典中，所以无法进行转换。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/word-ladder
 * 
 * 
 * 
 * 
 */ 
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!endWord || wordList.indexOf(endWord) === -1) return 0;
    let comboDict = {};
    let len = beginWord.length;
    for(let i = 0; i < wordList.length;i++){
        for(let r = 0; r < len; r++){
            let newWord = wordList[i].substr(0,r)+"*"+wordList[i].substr(r+1,len);
            if(!comboDict[newWord]){
                comboDict[newWord] = [];
            }
            comboDict[newWord].push(wordList[i]);
        }
    }  
  
    function visitWord(currQueue,currVisited,otherVisited){
        let currentNode = currQueue.shift();
        let currentWord = currentNode[0];
        let currentLevel = currentNode[1];
        for(let i = 0; i < len;i++){
            let newWord = currentWord.substr(0,i) + "*" + currentWord.substr(i+1,len);
            if(newWord in comboDict){
                let tmpWords = comboDict[newWord];
                for(let j = 0; j < tmpWords.length;j++){
                    if(otherVisited[tmpWords[j]]){
                        return currentLevel + otherVisited[tmpWords[j]];
                    }
                    if(!currVisited[tmpWords[j]]){
                        currVisited[tmpWords[j]] = currentLevel + 1;
                        currQueue.push([tmpWords[j],currentLevel + 1]);
                    }
                }
            }
        }
        return -1;
    }

    let queueBegin = [[beginWord,1]];
    let queueEnd = [[endWord,1]];
    let visitedStart = {};
    visitedStart[beginWord] = 1;
    let visitedEnd = {};
    visitedEnd[endWord] = 1;

    while(queueBegin.length > 0 && queueEnd.length > 0){
        let ans = visitWord(queueBegin,visitedStart,visitedEnd);
        if(ans > - 1) return ans;
        ans = visitWord(queueEnd,visitedEnd,visitedStart);
        if(ans > -1) return ans;
    }

    return 0;
};