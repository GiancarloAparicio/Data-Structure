class Tree {
	root = null;

	createNode(value) {
		return {
			data: value,
			leftPointer: null,
			rightPointer: null,
		};
	}

	emptyTree(node = this.root) {
		return node === null;
	}

	insertAtTree(value) {
		/**
		 * If the root of the tree is empty, then the root will be created
		 */
		if (this.emptyTree()) {
			var node = this.createNode(value);
			this.root = node;
		} else {
			/**
			 *  While the root of a tree "N" is not empty, the tree will be traversed
			 *  depending on whether the "value" is greater or less than "root.data"
			 */

			var pointer = this.root;

			while (pointer !== null) {
				if (value < pointer.data) {
					/**
					 * If the tree on the left is empty, a new node will be created and if
					 * it is busy, the pointer to that tree will be changed.
					 */

					if (this.emptyTree(pointer.leftPointer)) {
						pointer.leftPointer = this.createNode(value);
						break;
					} else {
						pointer = pointer.leftPointer;
					}
				} else {
					/**
					 * If the tree to the right is empty, a new node will be created and if
					 * it is busy, the pointer to that tree will be changed.
					 */

					if (this.emptyTree(pointer.rightPointer)) {
						pointer.rightPointer = this.createNode(value);
						break;
					} else {
						pointer = pointer.rightPointer;
					}
				}
			}
		}
	}

	/**
	 * First the root is processed, then the tree on the left and then the tree on the right
	 *   root -> left -> right
	 */
	preOrder(pointerNode = this.root) {
		if (!this.emptyTree()) {
			console.log(pointerNode.data);
			this.preOrder(pointerNode.leftPointer);
			this.preOrder(pointerNode.rightPointer);
		}
	}

	/**
	 * First the left tree is processed, then the root and then the right tree
	 *  left -> root -> right
	 */
	inOrder(pointerNode = this.root) {
		if (!this.emptyTree()) {
			this.inOrder(pointerNode.leftPointer);
			console.log(pointerNode.data);
			this.inOrder(pointerNode.rightPointer);
		}
	}

	/**
	 * First the left tree is processed, then the right tree and then the root
	 *   left -> right -> root
	 */
	postOrder(pointerNode = this.root) {
		if (!this.emptyTree) {
			this.postOrder(pointerNode.leftPointer);
			this.postOrder(pointerNode.rightPointer);
			console.log(pointerNode.data);
		}
	}

	findNode(value, node = this.root) {
		if (this.emptyNode()) {
			return null;
		} else {
			var pointer = node;

			while (!this.emptyNode(pointer)) {
				if (value < pointer.data) {
					if (this.emptyNode(pointer.leftPointer)) {
						break;
					} else {
						pointer = pointer.leftPointer;
						continue;
					}
				} else if (pointer.data < value) {
					if (this.emptyNode(pointer.rightPointer)) {
						break;
					} else {
						pointer = pointer.rightPointer;
						continue;
					}
				} else if (pointer.data === value) {
					return pointer;
				}
			}
		}
	}
}

//Implementation

var arbol = new Tree();
arbol.insertAtTree(1);
arbol.insertAtTree(2);
arbol.insertAtTree(3);
arbol.insertAtTree(-1);
arbol.insertAtTree(-2);
