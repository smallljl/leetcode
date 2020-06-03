/**
 * 
 *  给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。
    转换需遵循如下规则：

    每次转换只能改变一个字母。
    转换过程中的中间单词必须是字典中的单词。
    说明:

    如果不存在这样的转换序列，返回一个空列表。
    所有单词具有相同的长度。
    所有单词只由小写字母组成。
    字典中不存在重复的单词。
    你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
    示例 1:

    输入:
    beginWord = "hit",
    endWord = "cog",
    wordList = ["hot","dot","dog","lot","log","cog"]

    输出:
    [
        ["hit","hot","dot","dog","cog"],
        ["hit","hot","lot","log","cog"]
    ]

    示例 2:

    输入:
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot","dot","dog","lot","log"]

    输出: []

    解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/word-ladder-ii
 * 
 * 
 * 
 * 
 * 
 */
// 解法一：BFS   有bug 好需测试
let ladderL = function(beginWord,endWord,wordList){
    if(!endWord || wordList.indexOf(endWord) === -1) return 0;
    // 各个通用状态对应所有单词   abc ===> 对应得所有状态 a*b *ab 
    let comboDict = {};
    let len = beginWord.length;
    for(let i = 0; i < wordList.length; i ++){
        for(let r = 0; r < len; r++){
            let newWord = wordList[i].substr(0,r)+"*"+wordList[i].substr(r+1,len);  // a*b  其中的两个  
            if(!comboDict[newWord]){
                comboDict[newWord] = [];
            }
            comboDict[newWord].push(wordList[i]);
        }
    }
    let queue = [[beginWord,1,[beginWord]]];
    let visited = {beginWord:true};
    let res = [];
    while(queue.length){
        let currentNode = queue.shift();
        let currentWord = currentNode[0];
        let currentLevel = currentNode[1];
        let currentRes = currentNode[2];
        for(let i = 0; i < len; i++){
            let newWord = currentWord.substr(0,i)+"*"+currentWord.substr(i+1,len);
            // 新的word在字典里
            if(newWord in comboDict){
                let tempWords = comboDict[newWord];
                for(let j = 0;j<tempWords.length;j++){
                    if(tempWords[j] === endWord){   // 找到    // ["si","go","se","mr","pa","sa","he","lr","sq","ye"]
                        currentRes.push(endWord);
                        if(!res.length) {
                            res.push(currentRes)
                        } else if(currentLevel+1 < res[0].length){
                            res.length = 0;
                            res.push(currentRes)
                        } else if(currentLevel+1 === res[0].length){
                            res.push(currentRes);
                        }
                        continue;
                    }
                    if(!visited[tempWords[j]]){  // wordList中的一个   // 第一次访问了  下次访问次数比第一次的次数多   所以可能排除掉
                        visited[tempWords[j]] = true; // 表示访问过了
                        queue.push([tempWords[j],currentLevel+1,currentRes.concat(tempWords[j])]);
                    }
                }
            }
        }
    }
    console.log(res);
}


let beginWord = "hit";
let endWord = "cog";
let wordList =["hot","dot","dog","lot","log"]
console.log(ladderL(beginWord, endWord, wordList));