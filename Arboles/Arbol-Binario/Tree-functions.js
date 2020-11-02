function createNode(value) {
	return {
		data: value,
		leftPointer: null,
		rightPointer: null,
	};
}

function emptyNode(root) {
	return root === null;
}

function insertNode(tree, value) {
	/**
	 *  If the root of the tree is empty, then the root will be created
	 */
	if (emptyNode(tree.root)) {
		tree.root = createNode(value);
	} else {
		/**
		 *  While the root of a tree "N" is not empty, the tree will be traversed
		 *  depending on whether the "value" is greater or less than "root.data"
		 */
		let pointer = tree.root;

		while (!emptyNode(pointer)) {
			if (value < pointer.data) {
				/**
				 * If the tree on the left is empty, a new node will be created and if it
				 * is busy, the pointer to that tree will be changed.
				 */

				if (emptyNode(pointer.leftPointer)) {
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

				if (emptyNode(pointer.rightPointer)) {
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
	if (emptyNode(root)) {
		console.log(false);
	} else if (root.data === value) {
		console.log(true);
	} else if (value < root.data) {
		valueExists(root.leftPointer, value);
	} else if (root.data < value) {
		valueExists(root.rightPointer, value);
	}
}

function findNode(value, tree) {
	if (emptyNode(tree.root)) {
		return null;
	} else {
		let pointer = tree.root;

		while (!emptyNode(pointer)) {
			if (value < pointer.data) {
				if (emptyNode(pointer.leftPointer)) {
					return null;
				} else {
					pointer = pointer.leftPointer;
				}
			} else if (pointer.data < value) {
				if (emptyNode(pointer.rightPointer)) {
					return null;
				} else {
					pointer = pointer.rightPointer;
				}
			} else if (pointer.data === value) {
				return pointer;
			}
		}
	}
}

/**
 * First the left tree is processed, then the root and then the right tree
 *  left -> root -> right
 */
function inOrder(root) {
	if (!emptyNode(root)) {
		inOrder(root.leftPointer);
		console.log(root.data);
		inOrder(root.rightPointer);
	}
}

/**
 * First the root is processed, then the tree on the left and then the tree on the right
 *   root -> left -> right
 */
function preOrder(root) {
	if (!emptyNode(root)) {
		console.log(root.data);
		preOrder(root.leftPointer);
		preOrder(root.rightPointer);
	}
}
/**
 * First the left tree is processed, then the right tree and then the root
 *   left -> right -> root
 */
function postOrder(root) {
	if (!emptyNode(root)) {
		postOrder(root.leftPointer);
		postOrder(root.rightPointer);
		console.log(root.data);
	}
}

//Implementation

let tree = {
	root: null,
};

insertNode(tree, 1);
insertNode(tree, 2);
insertNode(tree, 3);
insertNode(tree, -1);
insertNode(tree, -2);

valueExists(tree.root, 2);
valueExists(tree.root, 8);

preOrder(tree.root);
postOrder(tree.root);
inOrder(tree.root);
