class List {
	/**
	 *  the value  of startHead,endHead is Node
	 */
	startList;
	endList;
	longitud = 0;

	constructor() {
		this.startList = null;
		this.endList = null;
		this.longitud = 0;
	}

	createDoubleNode(value, start = null, end = null) {
		return {
			data: value,
			pointerBefore: start,
			pointerAfter: end,
		};
	}
}
