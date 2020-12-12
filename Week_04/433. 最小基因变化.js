/**
 *   一条基因序列由一个带有8个字符的字符串表示，
 *   其中每个字符都属于 "A", "C", "G", "T"中的任意一个。
     假设我们要调查一个基因序列的变化。一次基因变化意味着这个基因序列中的一个字符发生了变化。
     例如，基因序列由"AACCGGTT" 变化至 "AACCGGTA" 即发生了一次基因变化。
     与此同时，每一次基因变化的结果，都需要是一个合法的基因串，即该结果属于一个基因库。
     现在给定3个参数 — start, end, bank，分别代表起始基因序列，目标基因序列及基因库，
     请找出能够使起始基因序列变化为目标基因序列所需的最少变化次数。如果无法实现目标变化，请返回 -1。
     注意:
         起始基因序列默认是合法的，但是它并不一定会出现在基因库中。
         所有的目标基因序列必须是合法的。
         假定起始基因序列与目标基因序列是不一样的。
     示例 1:
         start: "AACCGGTT"
         end:   "AACCGGTA"
         bank: ["AACCGGTA"]
         返回值: 1
     示例 2:
         start: "AACCGGTT"
         end:   "AAACGGTA"
         bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
         返回值: 2
     示例 3:
         start: "AAAAACCC"
         end:   "AACCCCCC"
         bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
         返回值: 3
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/minimum-genetic-mutation
 *
 */
var minMutation1 = function(start, end, bank) {
    let min = Infinity;
    function backtracing(start,end,bank,used,count){
        if(start === end){
            min = Math.min(min,count);
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
    return min === Infinity ? -1 : min;
};
let start = "AACCGGTT";
let end =  "AAACGGTA";
let bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];

// 1
console.log(minMutation(start, end, bank));

function minMutation2(start, end, bank){
    let min = Infinity;
    let choose = ["A","C","G","T"];
    let bankSet = new Set(bank);
    let checkset = new Set();
    function dfs(start,end,level,checkset){
        if(start === end){
            min = Math.min(level,min);
            return;
        }
        for(let i = 0; i < start.length;i++){
            for(let j = 0; j < choose.length;j++){
                // 基因变化是否存在bank中
                let d = start.slice(0,i) + choose[j] + start.slice(i+1);
                if(!checkset.has(d) && bankSet.has(d)){
                    checkset.add(d);
                    dfs(d,end,level+1,checkset);
                    checkset.delete(d);
                }
            }
        }
    }
    dfs(start,end,0,checkset);
    return min === Infinity ? -1 : min;
}