function createNode(value) {
	return {
		data: value,
		pointer: null,
	};
}

function insertNode(tail, value) {
	var node = createNode(value);

	if (tail.firstNode === null) {
		tail.firstNode = node;
		tail.lastNode = node;
	} else {
		tail.lastNode.pointer = node;
		tail.lastNode = node;
	}

	tail.length++;
}

function getFirstNode() {
	if (tail.firstNode !== null) {
		console.log(tail.firstNode.data);
	}
}

function deleteFirstNode(tail) {
	if (tail.firstNode !== null) {
		tail.firstNode = tail.firstNode.pointer;

		if (tail.firstNode === null) {
			tail.lastNode = null;
		}
		tail.length--;
	}
}

//Implementation

var tail = {
	firstNode: null,
	lastNode: null,
	length: 0,
};

insertNode(tail, 1);
insertNode(tail, 2);
insertNode(tail, 3);

getFirstNode(tail);
deleteFirstNode(tail);

getFirstNode(tail);
deleteFirstNode(tail);

getFirstNode(tail);
deleteFirstNode(tail);
