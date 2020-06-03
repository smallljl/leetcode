function LinkedList (){
	function Node(data){
		this.data = data;
		this.next = null;
	}
	
	this.head = null;
	this.length = 0;
	
	// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else {
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	};
	
	LinkedList.prototype.toString = function(){
		var listString = "";
		var current = this.head;
		while(current){
			listString += current.data+ " ";
			current = current.next;
		}
		return listString;
	};
	
	// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length ++;
		return true;
	};
	
	
	LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
	};
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		var index = 0; 
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	};
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	};

	
	LinkedList.prototype.indexOf = function(data){
		var index = 0;
		var current = this.head;
		while(current){
			if(current.data === data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	};
	
	LinkedList.prototype.remove = function(data){
		return this.removeAt(this.indexOf(data));
	};
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	};
	
	LinkedList.prototype.size = function(){
		return this.length;
	};
}

/**

1111111111111111111111111111111111


// 1.追加方法
	LinkedList.prototype.append = function(data){
		// 判断是否添加的是第一个节点
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		} else {
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next  = newNode;
		}
		this.length ++;
	}
	
	
	// 2 toString 方法
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}


2222222222222222222222222222222222222222222222

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	LinkedList.prototype.toString = function(){
		var listString = "";
		var current = this.head;
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

3333333333333333333333333333333333333333333333333

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length ++;
	}
	
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

44444444444444444444444444444444444444444444444444

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length ++;
	}
	
	LinkedList.prototype.toString = function(){
		var listString = "";
		var current = this.head;
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

555555555555555555555555555555555555555555555555555555

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

66666666666666666666666666666666666666666666666666

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length ++;
	}
	
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

7777777777777777777777777777777777777777777777777777

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length ++;
	}
	
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

8888888888888888888888888888888888888888888888888888888

	// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}
9999999999999999999999999999999999999999999999999999999
// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length ++;
	}
	
	LinkedList.prototype.toString = function(){
		var current = this.head;
		var listString = "";
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}

10000000000000000000000000000000000000000000000000000

// 1.追加方法
	LinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
		}else{
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length ++;
	}
	
	LinkedList.prototype.toString = function(){
		var listString = "";
		var current = this.head;
		while(current){
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}
11111111111111111111111111111111111111111111111111

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var index = 0;
			var current = this.head;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			newNode.next = current;
			previous.next = newNode;
		}
		
		this.length++;
	}

22222222222222222222222222222222222222222222222222222

LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var index = 0;
			var current = this.head;
			var prevoius = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			
			previous.next = newNode;
			newNode.next = current;
		}
		this.length++;
	}

333333333333333333333333333333333333333333333333333333

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length++;
	}


44444444444444444444444444444444444444444444444444444

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		
		this.length++;
	}

55555555555555555555555555555555555555555555555555555555555

LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length++;
	}

6666666666666666666666666666666666666666666666666666666666666666

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length ) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index= 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			
			previous.next = newNode;
			newNode.next = current;
		}
		
		this.length ++;
	}

77777777777777777777777777777777777777777777777777777777777777777777

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length ++;
	}

888888888888888888888888888888888888888888888888888888888888888888888

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var index = 0;
			var current = this.head;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		
		this.length ++;
	}

999999999999999999999999999999999999999999999999999999999999999999999

// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length++;
	}

10000000000000000000000000000000000000000000000000000

	// 3.insert方法
	LinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data);
		
		if(position === 0){
			newNode.next = this.head;
			this.head = newNode;
		}else{
			var current = this.head;
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length ++;
		return true;
	}
	
	
11111111111111111111111111111111111111111111111111111111111

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			
			var index = 0;
			var previous = null;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		
		}
		this.length -=1;
		return current.data;
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return false;
		var current = this.head;
		var index = 0;
		while(index ++ < position){
			current = current.next;
		}
		current.data = data;
		return true;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		var index = 0;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index += 1;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var position = this.indexOf(data);
		return this.removeAt(position);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}


222222222222222222222222222222222222222222222222222

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		var current = this.head;
		
		if(position === 0){
			this.head = this.head.next;
		}else{
			var previous = null;
			var index = 0;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		return current.data;
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		var index = 0;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return index;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}

333333333333333333333333333333333333333333333333333333333

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var previous = null;
			var index = 0;
			while(index ++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return null;
		
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		var index = 0;
		while(index ++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}

444444444444444444444444444444444444444444444444444444

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return true;
		}
		
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return false;
		
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		
		var current = this.head;
		var index = 0;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}


55555555555555555555555555555555555555555555555555555555555555555555

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length){
			return false;
		}
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length){
			return null;
		}
		
		var index = 0;
		var current = this.head;
		while(index ++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}

6666666666666666666666666666666666666666666666666666666666666

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
		}
		return current.data;
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return null;
		
		var index = 0;
		var current = this.head;
		while(index ++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
		
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}


777777777777777777777777777777777777777777777777777777777777777

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return false;
		
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index ++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}

88888888888888888888888888888888888888888888888888

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
		
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return false;
		
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
		return true;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var index = 0;
		var current = this.head;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}

99999999999999999999999999999999999999999999999999999999999999999999999999

LinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;	
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	
	LinkedList.prototype.indexOf = function(data){
		var index = 0;
		var current = this.head;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
		
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
		
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}

100000000000000000000000000000000000000000000000000000000000000

LinkedList.prototype.removeAt = function(position){
		if(position < 0 ||position >= this.length) return false;
		var current = this.head;
		if(position === 0){
			this.head = this.head.next;
		}else{
			var index = 0;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			this.length--;
			return current.data;
		}
		
	}
	
	
	LinkedList.prototype.update = function(position,data){
		if(position < 0 || position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = data;
	}
	
	LinkedList.prototype.get = function(position){
		if(position < 0 || position >= this.length){
			return null;
		}
		var index = 0;
		var current = this.head;
		while(index ++ < position){
			current = current.next;
		}
		return current.data;
		
	}
	
	LinkedList.prototype.indexOf = function(data){
		var index = 0;
		var current = this.head;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	LinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	LinkedList.prototype.size = function(){
		return this.length;
	}


**/