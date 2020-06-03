/**
	function PririorityQueue(){
		function prioriQue(element,pirority){
			
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			
		}	
	}
*/


/*
*
function PririorityQueue(){
	function prioriQue(element,pirority){
		this.element = element;
		this.pirority = pirority;
	}
	
	this.items = [];
	
	PririorityQueue.prototype.enqueue = function(element,pirority){
		var priorique = new prioriQue(element,pirority);

		if(!this.items.length){
			this.items.push(priorique);
		}else{
			var addSucs = false;
			for(var i = 0; i < this.items.length;i++ ){
				if(priorique.pirority < this.items[i].pirority){
					addSucs = true;
					this.items.splice(i,0,priorique);
					break;
				}
			}
			
			if(!addSucs){
				this.items.push(priorique);
			}
		}
	}
	
	
	// 2.从对列中删除前端元素
	PririorityQueue.prototype.dequeue = function(){
		return this.items.shift();
	}
	// 3.查看前端元素
	PririorityQueue.prototype.front = function(){
		return this.items[0];
	}
	
	// 4.查看对列是否为空
	PririorityQueue.prototype.isEmpty = function(){
		return this.items.length === 0;
	}
	// 5.查看对列中元素的个数
	PririorityQueue.prototype.size = function(){
		return this.items.length;
	}
	// 6.toString方法
	PririorityQueue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0; i < this.items.length;i++){
			resultString += this.items[i].element + "-" + this.items[i].pirority + " ";
		}
		return resultString;
	}
	
}

111111111111111111111111111111111111111111

function PririorityQueue(){
	function prioriQue(element,pirority){
		this.element = element;
		this.pirority = pirority;
	}
	
	this.items = [];
	
	PririorityQueue.prototype.enqueue = function(element,pirority){
		var priqueue = new prioriQue(element,pirority);
		if(!this.items.length){
			this.items.push(priqueue);
		}else{
			var addSucs = false;
			for(var i = 0; i < this.items.length;i++){
				if(priqueue.pirority < this.items[i].pirority){
					addSucs = true;
					this.items.splice(i,0,priqueue);
					break;
				}
			}
			if(!addSucs){
				this.items.push(priqueue);
			}
		}
		
	}
	
	// 6.toString方法
	PririorityQueue.prototype.toString = function(){
		var resultString = "";
		for(var i =0; i < this.items.length;i++){
			resultString += this.items[i].element + "-" + this.items[i].pirority + " "
		}
		return resultString;
	}
	
}

222222222222222222222222222222222222222222


function PririorityQueue(){
	function prioriQue(element,pirority){
		this.element = element;
		this.pirority = pirority;
	}
	
	this.items = [];
	
	PririorityQueue.prototype.enqueue = function(element,pirority){
		var pirque = new prioriQue(element,pirority);
		if(!this.items.length){
			this.items.push(pirque);
		}else{
			var addSuc = false;
			for(var i = 0; i < this.items.length;i++){
				if(pirque.pirority < this.items[i].pirority){
					this.items.splice(i,0,pirque);
					addSuc = true;
					break;
				}
			}
			if(!addSuc){
				this.items.push(pirque);
			}
		}
	}
	
	// 6.toString方法
	PririorityQueue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0;i<this.items.length;i++){
			resultString += this.items[i].element + '-'+this.items[i].pirority+" ";
		}
		return resultString;
	}	
}

3333333333333333333333333333333333333333333333333333

function PririorityQueue(){
	function prioriQue(element,pirority){
		this.element = element;
		this.pirority = pirority;
	}
	
	this.items = [];
	
	PririorityQueue.prototype.enqueue = function(element,pirority){
		var enque = new prioriQue(element,pirority);
		if(!this.items.length){
			this.items.push(enque);
		}else{
			var addSuc = false;
			for(var i = 0; i < this.items.length;i++){
				if(enque.pirority < this.items[i].pirority){
					this.items.splice(i,0,enque);
					addSuc = true;
					break;
				}
			}
			if(!addSuc){
				this.items.push(enque);
			}
		}
	}
	
	// 6.toString方法
	PririorityQueue.prototype.toString = function(){
		var resultString = "";
		for(var i = 0;i< this.items.length;i++){
			resultString += this.items[i].element + "-" + this.items[i].pirority + " ";
		}
		return resultString;
	}	
}

4444444444444444444444444444444444444444444444444444444


function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0;i<this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						this.items.splice(i,0,enque);
						addSuc = true;
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + "-"+this.items[i].pirority+" ";
			}
			return resultString;
		}
	}
	
555555555555555555555555555555555555555555555555555555555555555555
function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0; i < this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						this.items.splice(i,0,enque);
						addSuc = true;
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + '-'+this.items[i].pirority + " ";
			}
			return resultString;
		}	
	}

666666666666666666666666666666666666666666666666666

function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0;i<this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						this.items.splice(i,0,enque);
						addSuc = true;
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + '-'+this.items[i].pirority + " "
			}
			return resultString;
		}	
	}

7777777777777777777777777777777777777777777
function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0; i < this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						addSuc = true;
						this.items.splice(i,0,enque);
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + "-" + this.items[i].pirority + " ";
			}
			return resultString;
		}	
	}

888888888888888888888888888888888888888888

function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0;i< this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						addSuc = true;
						this.items.splice(i,0,enque)
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0;i < this.items.length;i++){
				resultString += this.items[i].element + '-'+this.items[i].pirority + " ";
			}
			return resultString;
		}	
	}

999999999999999999999999999999999999999999999999999999999

function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0;i< this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						addSuc = true;
						this.items.splice(i,0,enque);
						break;
					}				
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + "-"+this.items[i].pirority + " ";
			}
			return resultString;
		}	
	}

1000000000000000000000000000000000000000000000000

function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0; i < this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						this.items.splice(i,0,enque);
						addSuc = true;
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + "-"+ this.items[i].pirority + " ";
			}
			return resultString;
		}	
	}

111111111111111111111111111111111111111111111111111111111

function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0; i < this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						this.items.splice(i,0,enque);
						addSuc = true;
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i< this.items.length;i++){
				resultString += this.items[i].element + "-"+this.items[i].pirority+" ";
			}
			return resultString;
		}	
	}

1222222222222222222222222222222222222222222222222222222222222222

function PririorityQueue(){
		function prioriQue(element,pirority){
			this.element = element;
			this.pirority = pirority;
		}
		
		this.items = [];
		
		PririorityQueue.prototype.enqueue = function(element,pirority){
			var enque = new prioriQue(element,pirority);
			if(!this.items.length){
				this.items.push(enque);
			}else{
				var addSuc = false;
				for(var i = 0; i < this.items.length;i++){
					if(enque.pirority < this.items[i].pirority){
						this.items.splice(i,0,enque);
						addSuc = true;
						break;
					}
				}
				if(!addSuc){
					this.items.push(enque);
				}
			}
		}
		
		// 6.toString方法
		PririorityQueue.prototype.toString = function(){
			var resultString = "";
			for(var i = 0; i < this.items.length;i++){
				resultString += this.items[i].element + "-" + this.items[i].pirority + " ";
			}
			return resultString;
		}	
	}


*/
















