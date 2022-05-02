import _ from 'lodash-es';
let data = [
	{
		id: 'ani',
		name: "Ani",
		number: 10
	},
	{
		id: 'beniko',
		name: "Beniko",
		number: 20
	},
		{
		id: 'clara',
		name: "Clara",
		number: 5
	},
	{
		id: 'dobby',
		name: "Dobby",
		number: 30
	},
	{
		id: 'eli',
		name: "Eli",
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