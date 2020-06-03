// 1
/**
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		
	}
	
	Stack.prototype.pop = function(){
		
	}
	
	Stack.prototype.peek = function(){
		
	}
	
	Stack.prototype.isEmpty = function(){
		
	}
	
	Stack.prototype.size = function(){
		
	}
	
	Stack.prototype.toString = function(){
		
	}
}
**/



/**  2 
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.items.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.length === 0;   dder15
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i=0;i<this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/


// 3
/**
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.length === 1;
	}
	
	Stack.prototype.size = function(){
		return this.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0;i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/

/**  4
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.items.length - 1]
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0;i< this.items.length ; i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/


/**  
5
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.items.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 1;
	}
	
	Stack.prototype.size = function(){
		return  this.items.length
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i< this.items.length ; i ++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/


/**
6

function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 1;
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/

/**

7
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
***/
/**

8
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.items.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " "; 
		}
		return resultString;
	}
}

**/

/**
9
function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.items.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0;i<this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}
**/

function Stack (){
	this.items = [];
	
	Stack.prototype.push = function(element){
		return this.items.push(element);
	}
	
	Stack.prototype.pop = function(){
		return this.items.pop();
	}
	
	Stack.prototype.peek = function(){
		return this.items[this.items.length - 1];
	}
	
	Stack.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	
	Stack.prototype.size = function(){
		return this.items.length;
	}
	
	Stack.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i] + " ";
		}
		return resultString;
	}
}

/**
  function dec2bin(n10){
      var stack = new Stack();
	  while(n10 > 0){
		// 获取到余数并且放到栈中
		stack.push(n10 % 2);
		n10 = Math.floor(n10 / 2);
	  }
	  var binnaryString = "";
	  while(!stack.isEmpty()){
		  binnaryString += stack.pop();
	  }
	  return binnaryString;
  }

	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	3
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);		
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	4
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	5
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2) ;
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
		
	}
	
	
	6
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	
	7
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	8
	
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10>0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	9
	
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			stack.push(d10 % 2);
			d10 = Math.floor(d10 / 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	10
	
	function dec2bin(d10){
		var stack = new Stack();
		while(d10 > 0){
			d10 = Math.floor(d10 / 2);
			stack.push(d10 % 2);
		}
		var resultString = "";
		while(!stack.isEmpty()){
			resultString += stack.pop();
		}
		return resultString;
	}
	
	**/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	