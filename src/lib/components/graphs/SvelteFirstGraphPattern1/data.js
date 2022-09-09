import _ from 'lodash-es';
let data = [
	{
		id: 'alice',
		name: "Alice",
		number: 10
	},
	{
		id: 'bob',
		name: "Bob",
		number: 20
	},
		{
		id: 'calor',
		name: "Carol",
		number: 5
	},
	{
		id: 'dave',
		name: "Dave",
		number: 30
	},
	{
		id: 'eve',
		name: "Eve",
		number: 22
	},
	{
		id: 'francisco',
		name: "Francisco",
		number: 50
	}
]
data = _.sortBy(data, d => d.number).reverse()
export default data