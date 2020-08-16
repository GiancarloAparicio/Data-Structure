function createNode(value) {
	return {
		data: value,
		leftPointer: null,
		rightPointer: null,
	};
}
function emptyTree(root) {
	return root === null;
}

function insertNode(tree, value) {
	/**
	 *  If the root of the tree is empty, then the root will be created
	 */
	if (emptyTree(tree.root)) {
		var node = createNode(value);
		tree.root = node;
	} else {
		/**
		 *  While the root of a tree "N" is not empty, the tree will be traversed
		 *  depending on whether the "value" is greater or less than "root.data"
		 */
		var pointer = tree.root;

		while (!emptyTree(pointer)) {
			if (value < pointer.data) {
				/**
				 * If the tree on the left is empty, a new node will be created and if it
				 * is busy, the pointer to that tree will be changed.
				 */

				if (emptyTree(pointer.leftPointer)) {
					pointer.leftPointer = createNode(value);
					break;
				} else {
					pointer = pointer.leftPointer;
				}
			} else {
				/**
				 * If the tree to the right is empty, a new node will be created and if it
				 * is busy, the pointer to that tree will be changed.
				 */

				if (emptyTree(pointer.rightPointer)) {
					pointer.rightPointer = createNode(value);
					break;
				} else {
					pointer = pointer.rightPointer;
				}
			}
		}
	}
}

function valueExists(root, value) {
	if (emptyTree(root)) {
		console.log(false);
	} else if (root.data === value) {
		console.log(true);
	} else if (value < root.data) {
		valueExists(root.leftPointer, value);
	} else if (root.data < value) {
		valueExists(root.rightPointer, value);
	}
}

var tree = {
	root: null,
};

insertNode(tree, 1);
insertNode(tree, 2);
insertNode(tree, 3);
insertNode(tree, -1);
insertNode(tree, -2);

valueExists(tree.root, 1);
valueExists(tree.root, 2);
valueExists(tree.root, 3);
