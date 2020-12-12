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

 * 
 * 
 * 
 * 
 * 
 */

const findLadders = (beginWord,endWord, wordList) => {
    const wordSet = new Set(wordList);
    wordSet.add(beginWord);
    if(!wordSet.has(endWord)) return [];

    const levelMap = new Map();            // 存放图中的单词
    const wordMap = new Map();            
    const visited = new Set();
    const queue =  [beginWord];;
    visited.add(beginWord);

    let finished = false;
    let level = 0;
    levelMap.set(beginWord,0);

    while(queue.length){
        const levelSize = queue.length;
        level++;
        for(let i = 0; i < levelSize; i++){

            const word = queue.shift();   // 当前出列的单词
            for(let i = 0; i < word.length; i++){
                for(let c = 97; c <= 122; c++){
                    const newWord = word.slice(0,i) + String.fromCharCode(c) + word.slice(i+1);
                    if(!wordSet.has(newWord)) continue;
                    if(wordMap.has(newWord))
                        wordMap.get(newWord).push(word);
                    else 
                        wordMap.set(newWord,[word]);
    
                    if(visited.has(newWord)) continue;
                    if(newWord === endWord)
                        finished = true;                 
                    
                    levelMap.set(newWord,level);
                    queue.push(newWord);
                    visited.add(newWord);
                }
            }
        }
    }

    if(!finished) return [];

    const res = [];
    const dfs = (path,beginWord,word) => {
        if(word === beginWord){
            res.push([beginWord,...path]);
            return;
        }

        path.unshift(word);
        if(wordMap.get(word)){
            for(const parent of wordMap.get(word)){
                if(levelMap.get(parent) + 1 === levelMap.get(word)){
                    dfs(path,beginWord,parent);
                }
            }
        }
        path.shift();
    }

    dfs([],beginWord,endWord);
    return res;
}