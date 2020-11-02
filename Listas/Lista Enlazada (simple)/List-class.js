/**
 *   Lista Simple Class
 * */
class List {
	head;
	length;

	constructor() {
		this.head = null;
		this.length = 0;
	}
	emptyList() {
		return this.head === null;
	}

	getLength() {
		return this.length;
	}

	createNodo(Value) {
		return {
			data: Value,
			pointer: null,
		};
	}

	insertAtStart(Value) {
		let node = this.createNodo(Value);
		node.pointer = this.head;
		this.head = node;

		this.length++;
	}

	insertAtTheEnd(Value) {
		if (this.emptyList()) {
			this.insertAtStart(Value);
		} else {
			let index = this.head;
			let node = this.createNodo(Value);

			while (index.pointer !== null) {
				index = index.pointer;
			}
			index.pointer = node;

			this.length++;
		}
	}

	readList() {
		if (!this.emptyList()) {
			let index = this.head;
			let list = '';

			while (index !== null) {
				list += index.data + '->';
				index = index.pointer;
			}
			console.log(list + 'Null');
		}
	}

	insertIndex(Value, Index) {
		if (Index === 0) {
			this.insertAtStart(Value);
		} else if (Index === this.length) {
			this.insertAtTheEnd(Value);
		} else if (Index < this.length) {
			let index = this.head;
			let node = this.createNodo(Value);

			for (let i = 0; i < Index - 1; i++) {
				index = index.pointer;
			}

			node.pointer = index.pointer;
			index.pointer = node;

			this.length++;
		}
	}

	/**
	 * The garbage collector will take care of the object that is no longer being referenced
	 */
	deleteFirstNode() {
		if (!this.emptyList()) {
			this.head = this.head.pointer;
			this.length--;
		}
	}

	/**
	 * The garbage collector will take care of the object that is no longer being referenced
	 */
	deleteLastNode() {
		if (!this.emptyList()) {
			if (this.head.pointer !== null) {
				let index = this.head;
				while (index.pointer.pointer !== null) {
					index = index.pointer;
				}
				index.pointer = null;

				this.length--;
			} else {
				this.deleteFirstNode(Lista);
			}
		}
	}

	deleteIndex(Index) {
		if (Index === 0) {
			this.deleteFirstNode();
		} else if (Index === this.length - 1) {
			this.deleteLastNode();
		} else if (!this.emptyList() && Index < this.length) {
			let index = this.head;

			for (let i = 0; i < Index - 1; i++) {
				index = index.pointer;
			}

			index.pointer = index.pointer.pointer;

			this.length--;
		}
	}
}

//Implementation

let list = new List();

list.insertAtStart(1);
list.insertAtTheEnd(2);
list.insertIndex(3, 1);

list.readList();

list.deleteIndex(1);
list.deleteIndex(0);

list.readList();

list.insertIndex(1, 0);
list.insertIndex(2, 0);
list.insertIndex(3, 0);

list.readList();
