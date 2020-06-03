function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	};

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	};

	doubleLinkedList.prototype.backwardString = function(){
		var resultString  = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	};
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	};
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		var current = this.head;
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			if(position === 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if( position === this.length){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous  = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
			this.length++;
			return current.data;
		}
	};
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	};
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	};
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data = newData;
	};
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		}
	};
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.remove(index);
	};
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	};
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	};
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	};
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	};
}

/**********************

11111111111111111111111111111111111111111111111111111111111111111

function doubleLinkedList (){
	
	function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		}else{
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var current = this.head;
		var resultString = "";
		
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var current = this.tail;
		var resultString = "";
		
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position >= this.length) return null;
		
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		}else{
			if(position == 0){
				this.head.prev = newNode;
				newNode.next = this.head;
				this.head = newNode;
			}else if(position == this.length){
					
			}else {
				var current = this.head;
				var index  = 0;
				while(index++ < position){
					current = current.next;
				}
				newNode.next = current;
				newNode.prev = current.prev;
				current.prev.next = newNode;
				current.prev = newNode;
			}
		}
		
		this.length++;
		return true;
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		
		//this.length / 2 > position
		
		var current = this.head;
		var index = 0;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index ++ < position){
			current = current.next;
		}
		current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		var current = this.head;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position === 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			}else if(position === this.length-1){
				current = this.tail;
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			}else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
		}
		this.length--;
		return current.data;
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
	
}

222222222222222222222222222222222222222222222222222222222


function doubleLinkedList (){
	
	function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	
	doubleLinkedList.prototype.append = function(data){
		var current = this.head;
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}else{
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
		
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length){
			return false;
		}
		
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}else{
			if(position === 0){
				this.head.prev = newNode;
				this.head = newNode;
			}else if(position === this.length){
				newNode.prev = this.tail
				
				this.tail.next = newNode;
				this.tail = newNode;
			}else{
				var index = 0;
				var current = this.head;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
		}
		this.length++;
		return true;
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		} else if(position === 0){
			this.head.next.prev = null;
			this.head = this.head.next;
		} else if(position === this.length-1){
			this.tail.prev.next = null;
			this.tail = this.tail.prev;
		} else {
			var index = 0;
			var current = this.head;
			var previous = null;
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			current.next.prev = previous;
		}
		this.length-=1;
		return true;
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.remove(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data
	}
	
}

333333333333333333333333333333333333333333333333333333333333333333

function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.head = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}else{
			newNode.prev = this.tail;
			this.tail.next = newNode;
		    this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var current = this.head;
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}else{
			if(position === 0){
				this.head.prev = newNode;
				newNode.next = this.head
				this.head = newNode;
			} else if(position === this.length){
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
		}
		this.length++;
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		var current = this.head;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position === 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position === this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
                current.next.prev = previous;
			}
		}
		this.length--;
		return true;
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
	
}


444444444444444444444444444444444444444444444444444444444444444444

function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			debugger
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var current = this.head;
		var resultString = "";
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var current = this.tail;
		var resultString = "";
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length){
			return false;
		}
		var newNode = new Node(data);
		if(this.length == 0){
			this.tail = null;
			this.head = null;
		}else{
			if(position == 0){
				this.head.prev = newNode;
				newNode.next = this.head;
				this.head  = newNode;
			} else if(position == this.length){
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				var index = 0;
				var current = this.head;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
		}
		this.length++;
		return true;
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
		}
		this.length--;
		return current.data;
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
	
}


555555555555555555555555555555555555555555555555555555555555555555

function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head =  newNode;
			this.tail =  newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		debugger
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			if(position == 0 ){
				this.head.prev = newNode;
				newNode.next = this.head;
				this.head = newNode;
			} else if(position == this.length){
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				var index = 0;
				var current = this.head;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				newNode.next = current;
				newNode.prev = current.prev;
				current.prev.next = newNode;
				current.prev = newNode;
			}
		}
		this.length++;
		return true
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position>= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 ||  position >= this.length) return false;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		current.data = newData;
		return true;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position > this.length) return false;
		
		var current = this.head;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
		}
		this.length--;
		return current.data;
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length == 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
	
}


66666666666666666666666666666666666666666666


function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	
	this.length = 0;
	this.head = null;
	this.tail = null;	
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		
		var newNode = new Node(data)
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			if(position === 1){
				this.head.next.prev = newNode;
				newNode.next = this.head.next;
				this.head = newNode;
			} else if(position === this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var current = this.head;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
			this.length++
			return true;
		}
		return false;
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position > this.length) return null;
		
		var current = this.head;
		var index = 0;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return null
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position > this.length) return null;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var current = this.head;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		}
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.removeAt(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
	
}


77777777777777777777777777777777777777777777777777777777777777777

function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
		
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return null;
		var newNode = new Node(data);
		var current = this.head;
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			if(position == 0){
				this.head.next.prev = newNode;
				newNode.next = this.head.next;
				this.head = newNode;
			} else if(position == this.length){
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
			this.length++;
			return true;
		}
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position > this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
		
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position>=this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
				
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return current.data;
		}
	}
	
	doubleLinkedList.prototype.remove = function(data){
		return this.remove(this.indexOf(data));
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length == 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
	
}


8888888888888888888888888888888888888888888888888888888

function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
		
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.prev = newNode;
				newNode.next = this.head;
			} else if(position == this.length){
				newNode.prev = this.tail;
				this.tail.next  = newNode;
				this.tail = newNode;
			} else {
				var index = 0;
				var previous = null;
				var current = this.head;
				while(index++ < position){
					previous = current;
					current = current.next;
				}		
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
			this.length++;
			return true;
		}
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position > this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		if(index++ < position){
			current = current.next;
		}
		current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return false;
		var current = this.head;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return current.data;
		}
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.remove(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length == 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
}


9999999999999999999999999999999999999999999999999999999999999999999


function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
		
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		} 
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		var current = this.head;
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			if(position == 0){
				newNode.next = this.head;
				this.head.prev = newNode;
				this.head = newNode;
			} else if(position == this.length){
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
		}
		this.length++;
		return current.data;
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev  = null;
				this.head = this.head.next;
			} else if(position == this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		}
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.remove(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length == 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
}

1000000000000000000000000000000000000000000000000000000000000000000000000000000

function doubleLinkedList (){
	function Node(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	
	this.head = null;
	this.tail = null;
	this.length = 0;
	
	doubleLinkedList.prototype.append = function(data){
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	doubleLinkedList.prototype.toString = function(){
		return this.backwardString();
	}

	doubleLinkedList.prototype.backwardString = function(){
		var resultString  = "";
		var current = this.head;
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.fowardString = function(){
		var resultString = "";
		var current = this.tail;
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	
	doubleLinkedList.prototype.insert = function(position,data){
		if(position < 0 || position > this.length) return false;
		var newNode = new Node(data);
		var current = this.head;
		if(this.length == 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if( position == this.length){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous  = current;
					current = current.next;
				}
				previous.next = newNode;
				newNode.next = current;
				current.prev = newNode;
				newNode.prev = previous;
			}
			this.length++;
			return current.data;
		}
	}
	
	doubleLinkedList.prototype.get = function (position){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data;
	}
	 
	doubleLinkedList.prototype.indexOf = function(data){
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
	
	doubleLinkedList.prototype.updata = function(position, newData){
		if(position < 0 || position >= this.length) return null;
		var index = 0;
		var current = this.head;
		while(index++ < position){
			current = current.next;
		}
		return current.data = newData;
	}
	
	doubleLinkedList.prototype.removeAt = function(position){
		if(position < 0 || position >= this.length) return null;
		var current = this.head;
		if(this.length == 0){
			this.head = null;
			this.tail = null;
		} else {
			if(position == 0){
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if(position == this.length-1){
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				var index = 0;
				var previous = null;
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		}
	}
	
	doubleLinkedList.prototype.remove = function(data){
		var index = this.indexOf(data);
		return this.remove(index);
	}
	
	doubleLinkedList.prototype.isEmpty = function(){
		return this.length === 0;
	}
	
	doubleLinkedList.prototype.size = function(){
		return this.length;
	}
	
	doubleLinkedList.prototype.getHead = function(){
		return this.head.data;
	}
	
	doubleLinkedList.prototype.getTail = function(){
		return this.tail.data;
	}
}







*******************************************/