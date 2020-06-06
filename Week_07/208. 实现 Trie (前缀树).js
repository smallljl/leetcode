/*
 * @Author: your name
 * @Date: 2020-06-01 22:08:11
 * @LastEditTime: 2020-06-07 00:47:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_07\208. 实现 Trie (前缀树).js
 */ 
/*
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */ 
/**
 * Initialize your data structure here.
 */

var TrieNode = function(){
    this.next = {};
    this.isEnd = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word) return false;
    let node = this.root;
    for(let i = 0; i < word.length; i++){
        if(!node.next[word[i]]){
            node.next[word[i]] = new TrieNode();
        }
        node = node.next[word[i]];
    }
    node.isEnd = true;
    return false;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!word) return false;
    let node = this.root;
    for(let i = 0; i < word.length;i++){
        if(node.next[word[i]]){
            node = node.next[word[i]];
        } else {
            return false;
        }
    }
    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(!prefix) return true;
    let node = this.root;
    for(let i = 0; i < prefix.length;i++){
        if(node.next[prefix[i]]){
            node = node.next[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */