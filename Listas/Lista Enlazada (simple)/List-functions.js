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
	var node = createNodo(Value);
	node.pointer = Lista.head;
	Lista.head = node;

	Lista.length++;
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

		Lista.length++;
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
			var index = Lista.head;
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

function deleteAfterIndex(Lista, Index) {
	if (Lista.head !== null && Index < Lista.length) {
		var index = Lista.head;
		var i = 0;
		while (index.pointer !== null && i < Index) {
			index = index.pointer;
			i++;
		}

		index.pointer = index.pointer.pointer;

		Lista.length--;
	}
}

// Implementation

var Lista = {
	head: null,
	length: 0,
};

insertAtStart(Lista, 1);

insertAtTheEnd(Lista, 2);

insertAfterIndex(Lista, 3, 1);

readList(Lista);

console.log(Lista.length);