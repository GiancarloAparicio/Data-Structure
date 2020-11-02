/**
 *  A stack is a structure, where it can be stacked using the beginning or the end
 *  (Only one of these options not from the two)
 *
 *   1:(Top) 4 -> 3 -> 2 -> 1 -> null  //From the Top to the head
 *   2:(Top) <- 4 <- 3 <- 2 <- 1       //From head to Top
 *
 *  Used example number 1
 */

function createNode(value) {
	return {
		data: value,
		pointer: null,
	};
}

function emptyStack(stack) {
	return stack.length === 0;
}

function insertAtEnd(stack, value) {
	let node = createNode(value);
	node.pointer = stack.lastNode;
	stack.lastNode = node;
	stack.length++;
}

function getLastNode(stack) {
	if (!emptyStack(stack)) {
		return stack.lastNode.data;
	}
}

function deleteAtEnd(stack) {
	if (!emptyStack(stack)) {
		stack.lastNode = stack.lastNode.pointer;
		stack.length--;
	}
}

function getStack(stack) {
	if (!emptyStack(stack)) {
		let stackList = '';
		let node = stack.lastNode;
		for (let i = 0; i < stack.length; i++) {
			stackList += node.data + ' -> ';
			node = node.pointer;
		}

		console.log('(Top) ' + stackList + 'null');
	}
}

//Implementation

let stack = {
	lastNode: null,
	length: 0,
};

insertAtEnd(stack, 1);
insertAtEnd(stack, 2);
insertAtEnd(stack, 3);
insertAtEnd(stack, 4);
getStack(stack);
getLastNode(stack);
