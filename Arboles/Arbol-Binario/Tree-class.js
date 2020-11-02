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

	insert(value, node = this.root) {
		//If the root of the tree (node) is empty, then the root will be created
		if (this.emptyTree(node)) {
			this.root = this.createNode(value);
			return this.root;
		}
		//If the value is less than node.data the direction is to the left otherwise to the right
		let direction = value < node.data ? 'leftPointer' : 'rightPointer';

		//If the following tree is empty a new node will be created
		if (this.emptyTree(pointer[direction])) {
			pointer[direction] = this.createNode(value);
			return pointer[direction];
		} else {
			return this.insert(value, pointer[direction]);
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

	/**
	 * Finds a node whose value is equal to value
	 * @param {number|string} value
	 * @param {object} node
	 * @return {object}
	 */
	findNode(value, node = this.root) {
		if (this.emptyTree(node)) return null;
		if (value === node.data) return node;

		//If the value is less than node.data the direction is to the left otherwise to the right
		let direction = value < node.data ? 'leftPointer' : 'rightPointer';

		//If the value is equal to the next node.data returns the node (Father parent)
		if (value === node[direction].data) {
			return node[direction];
		} else {
			return this.findNode(value, node[direction]);
		}
	}

	/**
	 * Finds the parent of the node that has the value (value),
	 *  optionally receives the node / tree where it will start searching
	 * @param {number|string} value
	 * @param {object} node
	 * @return {object}
	 */
	findFather(value, node = this.root) {
		if (this.emptyTree(node)) return null;

		//If the value is less than root.data the direction is to the left otherwise to the right
		let direction = value < node.data ? 'leftPointer' : 'rightPointer';

		//If the value is equal to the next node.data returns the node (Father parent)
		if (value === node[direction].data) {
			return node;
		} else {
			return this.findFather(value, node[direction]);
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
		let father = this.findFather(value);
		if (father === null) return null;

		//The child node to be removed is chosen

		//If the value is less than root.data the direction is to the left otherwise to the right
		let direction = value < father.data ? 'leftPointer' : 'rightPointer';
		let node = father[direction];

		/**
		 *	If the node does not have a child node, the father reference pointing to it is
		 *  set to null. The removed value is returned
		 */
		if (!node.leftPointer && !node.rightPointer) {
			father[direction] = null;
			return value;
		}

		/**
		 *	If the node has only 1 child node, change the father pointer to point to your
		 *  child's node
		 */
		if (!node.leftPointer) {
			father[direction] = node.rightPointer;
			return value;
		}
		if (!node.rightPointer) {
			father[direction] = node.leftPointer;
			return value;
		}

		//If the node has 2 or more children
	}
}

//Implementation

let tree = new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(-1);
tree.insert(-2);
