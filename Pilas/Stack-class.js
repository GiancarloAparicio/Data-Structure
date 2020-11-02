/**
 *  A stack is a structure, where it can be stacked using the beginning or the end
 *  (Only one of these options not from the two)
 *
 *   1:(Top) 4 -> 3 -> 2 -> 1 -> null  //From the Top to the head
 *   2:(Top) <- 4 <- 3 <- 2 <- 1       //From head to Top
 *
 *  In the example, the form number 1 was used
 */

class Stack {
	lastNode;
	length;

	constructor() {
		this.length = 0;
		this.lastNode = null;
	}

	createNode(value) {
		return {
			data: value,
			pointer: null,
		};
	}

	emptyStack() {
		return this.length === 0;
	}

	insertAtEnd(value) {
		let node = this.createNode(value);
		node.pointer = this.lastNode;
		this.lastNode = node;
		this.length++;
	}
	getLastNode() {
		if (!this.emptyStack()) {
			return this.lastNode.data;
		}
	}

	deleteAtEnd() {
		if (!this.emptyStack()) {
			this.lastNode = this.lastNode.pointer;
			this.length--;
		}
	}

	getStack() {
		if (!this.emptyStack()) {
			let stack = '';
			let node = this.lastNode;
			for (let i = 0; i < this.length; i++) {
				stack += node.data + ' -> ';
				node = node.pointer;
			}

			console.log('(Cima) ' + stack + 'null');
		}
	}
}

//Implementation

let pila = new Stack();

pila.insertAtEnd(1);
pila.insertAtEnd(2);
pila.insertAtEnd(3);
pila.insertAtEnd(4);

pila.getStack();

pila.getLastNode();
