class Tree {
	root = null;

	createNode(value) {
		return {
			data: value,
			leftPointer: null,
			rightPointer: null,
		};
	}

	emptyTree() {
		return this.root === null;
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

					if (pointer.leftPointer === null) {
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

					if (pointer.rightPointer === null) {
						pointer.rightPointer = this.createNode(value);
						break;
					} else {
						pointer = pointer.rightPointer;
					}
				}
			}
		}
	}
}

//Implementation

var arbol = new Tree();
arbol.insertAtTree(45);
arbol.insertAtTree(15);
arbol.insertAtTree(55);
arbol.insertAtTree(5);
arbol.insertAtTree(85);
