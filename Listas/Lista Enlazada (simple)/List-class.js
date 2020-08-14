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
			value: Value,
			pointer: null,
		};
	}

	insertAtStart(Value) {
		var node = this.createNodo(Value);
		node.pointer = this.head;
		this.head = node;

		this.length++;
	}

	readList() {
		if (!this.emptyList()) {
			var index = this.head;

			while (index.pointer !== null) {
				console.log(index);
				index = index.pointer;
			}
			console.log(index);
		}
	}

	insertAtTheEnd(Value) {
		if (this.emptyList()) {
			this.insertAtStart(Value);
		} else {
			var index = this.head;
			var node = this.createNodo(Value);

			while (index.pointer !== null) {
				index = index.pointer;
			}
			index.pointer = node;

			this.length++;
		}
	}

	insertAfterIndex(Value, Index) {
		if (this.emptyList()) {
			this.insertAtStart(Value);
		} else {
			var index = this.head;
			var node = this.createNodo(Value);

			var i = 0;
			while (index.pointer !== null && i < Index) {
				index = index.pointer;
				i++;
			}
			node.pointer = index.pointer;
			index.pointer = node;

			this.length++;
		}
	}

	/**
	 * The garbage collector will take care of the object that is no longer being referenced
	 */
	deleteFirstNodo() {
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
				var index = this.head;
				while (index.pointer.pointer !== null) {
					index = index.pointer;
				}
				index.pointer = null;

				this.length--;
			} else {
				this.deleteFirstNodo(Lista);
			}
		}
	}

	deleteAfterIndex(Index) {
		if (!this.emptyList() && Index < getLength()) {
			var index = this.head;
			var i = 0;
			while (index.pointer !== null && i < Index) {
				index = index.pointer;
				i++;
			}

			if (i != Index) {
				index.pointer = index.pointer.pointer;

				this.length--;
			}
		}
	}
}

//Implementation

var list = new List();

list.insertAtStart(1);

list.insertAtTheEnd(2);

list.insertAfterIndex(3, 1);

list.readList();
