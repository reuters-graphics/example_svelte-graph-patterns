import _ from 'lodash-es';

const initialData = [
	{ id: "1", value: 25, category: 'cat'},
	{ id: "2", value: 30, category: 'panda'},
	{ id: "3", value: 40, category: 'cat'},
	{ id: "4", value: 20, category: 'cat'},
	{ id: "5", value: 45, category: 'panda'},
	{ id: "6", value: 25, category: 'dog'}
  ]

const changedData = [
	{ id: "1", value: 10, category: 'dog'}, // changed value and animal
	{ id: "2", value: 50, category: 'panda'}, // changed value
	//{ id: 3, value: 40, category: 'cat'}, //exited
	{ id: "4", value: 20, category: 'cat'}, // stayed the same
	{ id: "5", value: 25, category: 'panda'}, // changed value
	//{ id: 6, value: 25, category: 'dog'}, //exited 
	//{ id: "7", value: 45, category: 'dog'} // entered -- uncomment to see what happens
]

export { initialData, changedData }