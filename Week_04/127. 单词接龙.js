/**
 *      给定两个单词（beginWord 和 endWord）和一个字典，
 *      找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
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
     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 *
 */
// 超时
var ladderLength = function(beginWord, endWord, wordList) {
    let min = Infinity;
    function backtracing(start,end,bank,used,count){
        if(start === end){
            min = Math.min(min,count+1);
            return;
        }
        for(let i = 0; i < bank.length; i ++){
            if(!used[i] && diff(start,bank[i]) === 1){
                used[i] = true;
                backtracing(bank[i],end,bank,used,count+1);
                used[i] = false;
            }
        }
    }       
    function diff(a,b){
        let d = 0;
        for(let i = 0; i < a.length;i++){
            if(a.charAt(i) !== b.charAt(i)){
                d++;
            }
        }
        return d;
    }
    backtracing(start,end,bank,[],0);
    return min === Infinity ? 0 : min;
};

// dfs stack
function ladder(beginWord,endWord,wordList){
    let queue = [{word:beginWord,used:[],level:0}];
    let min = Infinity;
    while(queue.length){
        let item = queue.pop();
        if(item.word === endWord) {
            min = Math.min(item.level+1,min)
            continue;
        }
        for(let i = 0; i < wordList.length;i++){
            if(diff(wordList[i],item.word) === 1 && !item.used[i]){
                let newUsed = [...item.used]
                newUsed[i] = true;
                queue.push({word:wordList[i],used:newUsed,level:item.level+1});
            }
        }
    }
    return min === Infinity ? 0 : min;
    function diff(a,b){
        let d = 0;
        for(let i = 0; i < b.length;i++){
            if(a.charAt(i) !== b.charAt(i)){
                d++;
            }
        }
        return d;
    }
}


// BFS  next[]  保存下一层的值
function ladderLength2(beginWord,endWord,wordList){
   let queue = [beginWord];
   let step = 1;
   while(queue.length !== 0){
       let next = [];
       for(let word of queue){
           for(let i = 0; i < word.length;i++){
               let temp = word.substr(0,i)+word.substr(i+1);
               for(let j = 0; j < wordList.length;j++){  // 
                   let check = wordList[j].substr(0,i)+wordList[j].substr(i+1);
                   if(temp === check){
                       if(wordList[j] === endWord){
                           return step+1;
                       }
                       next.push(wordList[j]);
                       wordList.splice(j,1);
                       j--;
                   }
               }
           }
       }
       queue = next;
       step++;
   }
   return 0;
}

//BFS递归版
function ladderLength3(beginWord,endWord,wordList){
    let min = Infinity;
    function bfs(level,layers,end,wordList){
        if(!layers.length) return;
        let next = [];
        for(let word of layers){
            if(word === end){
                min = Math.min(min,level);
                return;
            }else{
                for(let k = 0; k < word.length;k++){
                    let temp = word.substr(0,k)+word.substr(k+1);
                    for(let j = 0; j < wordList.length;j++){
                        let check = wordList[j].substr(0,k)+wordList[j].substr(k+1);
                        if(temp === check){
                            next.push(wordList[j]);
                            wordList.splice(j,1);
                            j--;
                        }
                    }
                }
            }
        }
        bfs(level+1,next,end,wordList);
        next.length = 0;
    }
    bfs(0,[beginWord],endWord,wordList);
    return min === Infinity ? 0 : min+1;
}

let beginWord = "qa";
let endWord = "sq";
let wordList = ["si","go","se","mr","pa","sa","he","lr","sq","ye"]
console.log(ladder(beginWord, endWord, wordList));



// 解法一：BFS
let ladderL = function(beginWord,endWord,wordList){
    if(!endWord || wordList.indexOf(endWord) === -1) return 0;
    // 各个通用状态对应所有单词   abc ===> 对应得所有状态 a*b *ab 
    let comboDict = {};
    let len = beginWord.length;
    for(let i = 0; i < wordList.length; i ++){
        for(let r = 0; r < len; r++){
            let newWord = wordList[i].substr(0,r)+"*"+wordList[i].substr(r+1,len);  // a*b  其中的两个  
            if(comboDict[newWord]){
                comboDict[newWord] = [];
            }
            comboDict[newWord].push(wordList[i]);
        }
    }
    let queue = [[beginWord,1]];
    let visited = {beginWord:true};
    while(queue.length){
        let currentNode = queue.shift();
        let currentWord = currentNode[0];
        let currentLevel = currentNode[1];
        for(let i = 0; i < len; i++){
            let newWord = currentWord.substr(0,i)+"*"+currentWord.substr(i+1,len);
            // 新的word在字典里
            if(newWord in comboDict){
                let tempWords = comboDict[newWord];
                for(let j = 0;j<tempWords.length;j++){
                    if(tempWords[j] === endWord){
                        return currentLevel+1;  // 找到    // ["si","go","se","mr","pa","sa","he","lr","sq","ye"]
                    }
                    if(!visited[tempWords[j]]){  // wordList中的一个   // 第一次访问了  下次访问次数比第一次的次数多   所以可能排除掉
                        visited[tempWords[j]] = true; // 表示访问过了
                        queue.push([tempWords[j],currentLevel+1]);
                    }
                }
            }
        }
    }
    return 0;
}


// 解法三：双端BFS
let ladderL2 = function(beginWord,endWord,wordList){
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
    function visitWord(currQueue,currVisited,otherVisited){
        let currentNode = currQueue.shift();
        let currentWord = currentNode[0];
        let currentLevel = currentNode[1];
        for(let i = 0; i < len;i++){
            let newWord = currentWord.substr(0,i)+"*"+currentWord.substr(i+1,len);
            if(newWord in comboDict){
                let tmpWords = comboDict[newWord];
                for(let j = 0; j < tmpWords.length;j++){
                    if(otherVisited[tempWords[j]])
                        return currentLevel + otherVisited[tmpWords[j]];
                    if(!currVisited[tmpWords[j]]){
                        currVisited[tmpWords[j]] = currentLevel + 1;
                        currQueue.push([tmpWords[j],currentLevel+1]);
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
        if(ans > -1) return ans;
        ans = visitWord(queueEnd,visitedEnd,visitedStart);
        if(ans > -1) return ans;
    }
    return 0;
}