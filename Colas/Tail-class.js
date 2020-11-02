class Tail {
	firstNode;
	lastNode;
	length;

	constructor() {
		this.firstNode = null;
		this.lastNode = null;
		length = 0;
	}

	createNode(value) {
		return {
			data: value,
			pointer: null,
		};
	}

	emptyTail() {
		return this.firstNode === null;
	}

	insertNode(value) {
		let node = this.createNode(value);

		if (this.emptyTail()) {
			this.firstNode = node;
			this.lastNode = node;
		} else {
			this.lastNode.pointer = node;
			this.lastNode = node;
		}

		this.length++;
	}

	getFirstNode() {
		if (!this.emptyTail()) {
			console.log(this.firstNode.data);
		}
	}

	deleteFirstNode() {
		if (!this.emptyTail()) {
			this.firstNode = this.firstNode.pointer;

			if (this.emptyTail()) {
				this.lastNode = null;
			}
			this.length--;
		}
	}
}

//Implementation
let cola = new Tail();

cola.insertNode(1);
cola.insertNode(2);
cola.insertNode(3);

cola.getFirstNode();
cola.deleteFirstNode();
