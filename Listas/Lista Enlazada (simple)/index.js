/**
 *   Lista Simple
 * */

function createNodo(Value) {
	var node = {
		value: Value,
		pointer: null,
	};

	return node;
}

function insertAtStart(Lista, Value) {
	var node = createNodo(Value);
	node.pointer = Lista.head;
	Lista.head = node;

	length++;
}

function readList(Lista) {
	var index = Lista.head;
	if (index !== null) {
		while (index.pointer !== null) {
			console.log(index);
			index = index.pointer;
		}
		console.log(index);
	}
}

function insertAtTheEnd(Lista, Value) {
	if (Lista.head === null) {
		insertAtStart(Lista, Value);
	} else {
		var index = Lista.head;
		var node = createNodo(Value);

		while (index.pointer !== null) {
			index = index.pointer;
		}
		index.pointer = node;

		length++;
	}
}

function insertAfterIndex(Lista, Value, Index) {
	if (Lista.head === null) {
		insertAtStart(Lista, Value);
	} else {
		var index = Lista.head;
		var node = createNodo(Value);

		var i = 0;
		while (index.pointer !== null && i < Index) {
			index = index.pointer;
			i++;
		}
		node.pointer = index.pointer;
		index.pointer = node;

		length++;
	}
}

/**
 * The garbage collector will take care of the object that is no longer being referenced
 */
function deleteFirstNodo(Lista) {
	if (Lista.head !== null) {
		Lista.head = Lista.head.pointer;

		length--;
	}
}

/**
 * The garbage collector will take care of the object that is no longer being referenced
 */
function deleteLastNode(Lista) {
	if (Lista.head !== null) {
		if (Lista.head.pointer !== null) {
			var index = Lista.head;
			while (index.pointer.pointer !== null) {
				index = index.pointer;
			}
			index.pointer = null;

			length--;
		} else {
			deleteFirstNodo(Lista);
		}
	}
}

function deleteAfterIndex(Lista, Index) {
	if (Lista.head !== null && Index < getLength()) {
		var index = Lista.head;
		var i = 0;
		while (index.pointer !== null && i < Index) {
			index = index.pointer;
			i++;
		}

		index.pointer = index.pointer.pointer;

		length--;
	}
}

var length = 0;

function getLength() {
	return length;
}

// Implementation

var Lista = {
	head: null,
};

insertAtStart(Lista, 1);

insertAtTheEnd(Lista, 2);

insertAfterIndex(Lista, 3, 1);

readList(Lista);
