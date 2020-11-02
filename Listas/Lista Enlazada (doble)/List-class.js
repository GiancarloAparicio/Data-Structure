/**
 * List Double
 */

class List {
	/**
	 *  the value  of startHead,endHead is Node
	 */
	startList;
	endList;
	length;

	constructor() {
		this.startList = null;
		this.endList = null;
		this.length = 0;
	}

	createDoubleNode(value) {
		return {
			data: value,
			pointerBefore: null,
			pointerAfter: null,
		};
	}

	emptyList() {
		return this.startList === null;
	}

	insertAtStart(value) {
		let node = this.createDoubleNode(value);

		if (this.emptyList()) {
			this.startList = node;
			this.endList = node;
		} else {
			node.pointerAfter = this.startList;
			this.startList.pointerBefore = node;
			this.startList = node;
		}
		this.length++;
	}

	insertAtTheEnd(value) {
		if (this.emptyList()) {
			this.insertAtStart(value);
		} else {
			let node = this.createDoubleNode(value);
			node.pointerBefore = this.endList;
			this.endList.pointerAfter = node;
			this.endList = node;

			this.length++;
		}
	}

	insertIndex(value, index) {
		if (index === 0) {
			this.insertAtStart(value);
		} else if (index === this.length) {
			this.insertAtTheEnd(value);
		} else if (index < this.length) {
			let current = this.startList;

			for (let i = 0; i < index - 1; i++) {
				current = current.pointerAfter;
			}

			let nodeAfter = current.pointerAfter;

			let node = this.createDoubleNode(value); //Nodo que sera agregado

			//Izquierda
			node.pointerBefore = current;
			current.pointerAfter = node;

			//Derecha
			node.pointerAfter = nodeAfter;
			nodeAfter.pointerBefore = node;

			this.length++;
		}
	}

	deleteFirstNodo() {
		if (!this.emptyList()) {
			this.startList = this.startList.pointerAfter;
			this.length--;
		}
	}

	deleteLastNode() {
		if (!this.emptyList()) {
			if (this.startList.pointerAfter === null) {
				this.deleteFirstNodo(Lista);
			} else {
				let index = this.endList;

				index = index.pointerBefore;
				index.pointerAfter = null;
				this.endList = index;

				this.length--;
			}
		}
	}

	readList() {
		if (!this.emptyList()) {
			let index = this.startList;
			let list = '';

			while (index.pointerAfter !== null) {
				list += index.data + ' <-> ';
				index = index.pointerAfter;
			}
			console.log('Null <-> ' + list + 'Null');
		}
	}
}

//Implementation
let lista = new List();

lista.insertAtStart(1);
lista.insertAtStart(2);
lista.insertAtStart(3);
lista.insertAtStart(4);

lista.insertAtTheEnd(0);

lista.readList();
