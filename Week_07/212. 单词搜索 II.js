/*
 *
 *  给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

    单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
    同一个单元格内的字母在一个单词中不允许被重复使用。

    示例:

    输入: 
    words = ["oath","pea","eat","rain"] and board =
    [
      ['o','a','a','n'],
      ['e','t','a','e'],
      ['i','h','k','r'],
      ['i','f','l','v']
    ]

    输出: ["eat","oath"]
 * 
 *
 */ 

var findWords = function(board, words) {
   /**
    * build trie --> traverse board --> DFS
    */
   let res = [], row = board.length, col = board[0].length
   // 构建 tire
   const getTrie = words => {
     let root = Object.create(null)
     for (let word of words) {
       let node = root;
       for (let c of word) {
         if (!node[c]) node[c] = Object.create(null);
         node = node[c];
       }
       node.word = word;
     }
     return root;
   }
 
   // DFS 深度优先搜素
   const search = (trie, x, y) => {
     if (trie.word) {
       res.push(trie.word);
       trie.word = null; // make sure only print one time for each word
     }
 
     // handle board boundary
     if (x < 0 || y < 0 || y >= row || x >= col) return;
     
     // can't find board[y][x]
     if (!trie[board[y][x]]) return;
     
     let prefixChar = board[y][x];
     board[y][x] = "#"; // mark visited
     search(trie[prefixChar], x, y - 1);
     search(trie[prefixChar], x, y + 1);
     search(trie[prefixChar], x - 1, y);
     search(trie[prefixChar], x + 1, y);
     board[y][x] = prefixChar; // restore
   }
 
   // traverse board
   let trie = getTrie(words);
   for (let y = 0; y < row; y++) {
     for (let x = 0; x < col; x++) {
       search(trie, x, y);
     }
   }
   return res;
 };