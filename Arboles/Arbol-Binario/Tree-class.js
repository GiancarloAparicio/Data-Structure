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
		if (!this.emptyTree(pointerNode)) {
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
		if (!this.emptyTree(pointerNode)) {
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
		if (!this.emptyTree(pointerNode)) {
			this.postOrder(pointerNode.leftPointer);
			this.postOrder(pointerNode.rightPointer);
			console.log(pointerNode.data);
		}
	}

	findNode(value, node = this.root) {
		if (this.emptyTree()) {
			return null;
		} else {
			var pointer = node;

			while (!this.emptyTree(pointer)) {
				if (value < pointer.data) {
					if (this.emptyTree(pointer.leftPointer)) {
						break;
					} else {
						pointer = pointer.leftPointer;
						continue;
					}
				} else if (pointer.data < value) {
					if (this.emptyTree(pointer.rightPointer)) {
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

	findFather(value, node = this.root) {
		if (this.root.data === value) return null;

		if (value < node.data) {
			if (value === node.leftPointer.data) {
				return node;
			} else {
				return this.findFather(value, node.leftPointer);
			}
		}

		if (node.data < value) {
			if (value === node.rightPointer.data) {
				return node;
			} else {
				return this.findFather(value, node.rightPointer);
			}
		}
	}

	/**
	 * Explanation of the method
	 * 	https://devs4j.com/2017/12/04/borrar-elementos-de-un-arbol-binario/
	 */
	deleteNode(value, node = this.root) {
		/**
		 * The father of the node to be eliminated is searched for, if it does not exist,
		 * null is returned
		 */
		var father = this.findFather(value);
		if (father === null) return null;

		/**
		 *	The child node to be removed is chosen
		 */
		var node;
		var property;
		if (value < father.data) {
			node = father.leftPointer;
			property = 'leftPointer';
		} else {
			node = father.rightPointer;
			property = 'rightPointer';
		}

		/**
		 *	If the node does not have a child node, the father reference pointing to it is
		 *  set to null. The removed value is returned
		 */
		if (!node.leftPointer && !node.rightPointer) {
			father[property] = null;
			return value;
		}

		/**
		 *	If the node has only 1 child node, change the father pointer to point to your
		 *  child's node
		 */
		if (!node.leftPointer) {
			father[property] = node.rightPointer;
			return value;
		}
		if (!node.rightPointer) {
			father[property] = node.leftPointer;
			return value;
		}

		/**
		 * If the node has 2 children,
		 */
	}
}

//Implementation

var arbol = new Tree();
arbol.insertAtTree(1);
arbol.insertAtTree(2);
arbol.insertAtTree(3);
arbol.insertAtTree(-1);
arbol.insertAtTree(-2);
