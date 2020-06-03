/**
function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
	
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		
	}
}**/

/**

1

function Queue(){
		this.items = [];

		// 1.将元素加入到对列中
		Queue.prototype.enqueue = function(element){
			this.items.push(element)
		}
		// 2.从对列中删除前端元素
		Queue.prototype.dequeue = function(){
			return this.items.shift();
		}
		// 3.查看前端元素
		Queue.prototype.front = function(){
			return this.items[0];
		}
		
		// 4.查看对列是否为空
		Queue.prototype.isEmpty = function(){
			return this.items.length === 0;
		}
		// 5.查看对列中元素的个数
		Queue.prototype.size = function(){
			return this.items.length;
		}
		// 6.toString方法
		Queue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length; i++){
				resultString += this.items[i] + " ";
			}
			return resultString;
		}
}
**/

/**

2

function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}

3333

function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length; i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}



function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length; i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}



444444


function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}

55555

function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length; i ++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}



function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}


77777

function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0	
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}


888888



function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		return this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}

999999



function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}

100000000000000

function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	}
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0;i < this.items.length; i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/

/**
function passGame(nameList,num){
	var queue = new Queue();
	for(var i = 0; i < nameList.length; i++){
		queue.enqueue(nameList[i]);
	}
	while(queue.size() > 1){
		for(var i = 0; i < num-1;i++){
			queue.enqueue(queue.dequeue())
		}
		queue.dequeue();
	}
	alert(queue.size());
	var endName = queue.front();
	alert(`最终剩下的人${endName}`);
	return nameList.indexOf(endName);
}

222222222222222222222

function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length;i++){
		enque.enqueue(nameList[i]);
	}
	
	while(enque.size()> 1){
		for(var i = 0; i < num-1;i++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName);
	return nameList.indexOf(endName);
	
}


333333333333333333333333333


function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length;i++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num - 1;i++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName)
	return nameList.indexOf(endName)
}


4444444444444444444444444444444


function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length;i++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num - 1; i++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	return nameList.indexOf(endName);
}


555555555555555555555555555555


function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length; i ++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num - 1; i ++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName);
	return nameList.indexOf(endName);
}


66666666666666666666666666666666666


function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length; i ++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num - 1; i++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	return nameList.indexOf(endName);
}


777777777777777777777777777777777

function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length; i ++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num-1; i ++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName);
	return nameList.indexOf(endName);
}


88888888888888888888888888888888

function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length; i ++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num-1; i ++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName);
	return nameList.indexOf(endName);
}


9999999999999999999999999999999

function passGame(nameList,num){
	var enque = new Queue();
	for(var i =0; i< nameList.length; i++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num -1 ; i++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName);
	return nameList.indexOf(endName);
}
   
 
1000000000000000000000000000000000


function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length;i++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num - 1 ; i ++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	alert(endName);
	return nameList.indexOf(endName);
}
 
11111111111111111111111111111111111111




**/

function Queue(){
	this.items = [];

	// 1.将元素加入到对列中
	Queue.prototype.enqueue = function(element){
		this.items.push(element);
	};
	// 2.从对列中删除前端元素
	Queue.prototype.dequeue = function(){
		return this.items.shift();
	};
	// 3.查看前端元素
	Queue.prototype.front = function(){
		return this.items[0];
	};
	
	// 4.查看对列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0;
	};
	// 5.查看对列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	};
	// 6.toString方法
	Queue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length; i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	};
}

function passGame(nameList,num){
	var enque = new Queue();
	for(var i = 0; i < nameList.length;i++){
		enque.enqueue(nameList[i]);
	}
	while(enque.size() > 1){
		for(var i = 0; i < num - 1; i++){
			enque.enqueue(enque.dequeue());
		}
		enque.dequeue();
	}
	var endName = enque.front();
	return nameList.indexOf(endName);
}




 

	





