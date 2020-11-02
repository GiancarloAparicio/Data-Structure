/**
 *   Lista Simple functions
 * */

function createNodo(Value) {
	return {
		value: Value,
		pointer: null,
	};
}

function insertAtStart(Lista, Value) {
	let node = createNodo(Value);
	node.pointer = Lista.head;
	Lista.head = node;

	Lista.length++;
}

function readList(Lista) {
	let index = Lista.head;
	let list = '';
	if (index !== null) {
		while (index !== null) {
			list += index.value + ' -> ';
			index = index.pointer;
		}
		console.log(list + 'Null');
	}
}

function insertAtTheEnd(Lista, Value) {
	if (Lista.head === null) {
		insertAtStart(Lista, Value);
	} else {
		let index = Lista.head;
		let node = createNodo(Value);

		while (index.pointer !== null) {
			index = index.pointer;
		}
		index.pointer = node;

		Lista.length++;
	}
}

function insertIndex(Lista, Value, Index) {
	if (Index === 0) {
		insertAtStart(Lista, Value);
	} else {
		let index = Lista.head;
		let node = createNodo(Value);

		for (let i = 0; i < Index - 1; i++) {
			index = index.pointer;
		}

		node.pointer = index.pointer;
		index.pointer = node;

		Lista.length++;
	}
}

/**
 * The garbage collector will take care of the object that is no longer being referenced
 */
function deleteFirstNodo(Lista) {
	if (Lista.head !== null) {
		Lista.head = Lista.head.pointer;

		Lista.length--;
	}
}

/**
 * The garbage collector will take care of the object that is no longer being referenced
 */
function deleteLastNode(Lista) {
	if (Lista.head !== null) {
		if (Lista.head.pointer !== null) {
			let index = Lista.head;
			while (index.pointer.pointer !== null) {
				index = index.pointer;
			}
			index.pointer = null;

			Lista.length--;
		} else {
			deleteFirstNodo(Lista);
		}
	}
}

function deleteIndex(Lista, Index) {
	if (Index === 0) {
		deleteFirstNodo();
	} else if (Index === Lista.length) {
		deleteLastNode();
	} else if (Index < Lista.length) {
		let index = Lista.head;

		for (let i = 0; i < Index - 1; i++) {
			index = index.pointer;
		}

		index.pointer = index.pointer.pointer;

		Lista.length--;
	}
}

// Implementation

let Lista = {
	head: null,
	length: 0,
};

insertAtStart(Lista, 1);

insertAtTheEnd(Lista, 2);

insertIndex(Lista, 3, 1);

readList(Lista);
