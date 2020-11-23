/**
 *  请你仅使用两个栈实现先入先出队列。队列应当支持一般队列的支持的所有操作（push、pop、peek、empty）：

    实现 MyQueue 类：

    void push(int x) 将元素 x 推到队列的末尾
    int pop() 从队列的开头移除并返回元素
    int peek() 返回队列开头的元素
    boolean empty() 如果队列为空，返回 true ；否则，返回 false
     

    说明：

    你只能使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
    你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
     

    进阶：

    你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。

 * 
 * 
 */

var MyQueue = function() {
    this.input = [];  // 入栈
    this.output = []; // 出栈
};

MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

MyQueue.prototype.pop = function() {
    if(!this.output.length){
        while(this.input.length){
            this.output.push(this.input.pop());
        }
    }
    return this.output.pop();
};

MyQueue.prototype.peek = function() {
    if(!this.output.length){
        while(this.input.length){
            this.output.push(this.input.pop());
        }
    }
    return this.output[this.output.length-1];
};

MyQueue.prototype.empty = function() {
    if(this.input.length || this.output.length){
        return false;
    } else {
        return true;
    }
};