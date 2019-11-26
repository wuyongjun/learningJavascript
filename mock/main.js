const Mock = require('mockjs');
const axios = require('axios');
const print = (name, value) => console.log(`${name}: ${JSON.stringify(value)}`);

// let mockList = Mock.mock({
// 	'list|1-10': [{
// 		'id|+1': 1
// 	}]
// });
// console.log(JSON.stringify(mockList));

// let mockString1 = Mock.mock({
// 	'name|3': 'wyj'
// })

// let mockString2 = Mock.mock({
// 	'name|1-10': 'wyj'
// })
// console.log(JSON.stringify(mockString2))
// console.log(`----------20191029----------`);

// let mockStrMinMax = Mock.mock({
// 	'city|1-5': 'beijing'
// })
// console.log(`mockStrMinMax: ${JSON.stringify(mockStrMinMax)}`);

// let mockStrCount = Mock.mock({
// 	'province|3': 'hlj'
// })
// console.log(`mockStrCount: ${JSON.stringify(mockStrCount)}`);

// let mockNumberAddOne = Mock.mock({
// 	'students|1-5': [{
// 		'age|+1': 3
// 	}]
// })
// console.log(`mockNumberAddOne: ${JSON.stringify(mockNumberAddOne)}`);

// let mockNumberMinMax = Mock.mock({
// 	'age|1-10': 6
// })
// console.log(`mockNumberMinMax: ${JSON.stringify(mockNumberMinMax)}`);

// let mockNumberFloat = Mock.mock({
// 	'money|1-10.1-10': 1
// })
// console.log(`mockNumberFloat: ${JSON.stringify(mockNumberFloat)}`);

// let mockBooleanOne = Mock.mock({
// 	'isShow|1': true
// })
// console.log(`mockBooleanOne: ${JSON.stringify(mockBooleanOne)}`);

// let mockBooleanMinMax = Mock.mock({
// 	'name|1-10': 3
// })
// print('mockBooleanMinMax', mockBooleanMinMax);

// let mockObjectCount = Mock.mock({
// 	'info|3': {
// 		id: 1,
// 		title: 'welcome to beijing',
// 		name: 'wyj',
// 		addr: 'changping',
// 		age: 28
// 	}
// });
// print('mockObjectCount', mockObjectCount);

// let mockObjectMinMax = Mock.mock({
// 	'info|1-3': {
// 		id: 1,
// 		title: 'welcome to beijing',
// 		name: 'wyj',
// 		addr: 'changping',
// 		age: 28
// 	}
// });
// print('mockObjectMinMax', mockObjectMinMax);

// let mockArrayOne = Mock.mock({
// 	'friut|1': ['apple', 'orange', 'peal', 'banana']
// });
// print('mockArrayOne', mockArrayOne);

// let mockArrayAddOne = Mock.mock({
// 	'friuts|1-10':[{
// 		'friut|+1': ['orange', 'apple', 'peal', 'banana']
// 	}]
// });
// print('mockArrayAddOne', mockArrayAddOne);

// let mockArrayMinMax = Mock.mock({
// 	'friuts|1-3': ['orange', 'apple', 'peal']
// });
// print('mockArrayMinMax', mockArrayMinMax);

// let mockArrayCount = Mock.mock({
// 	'friuts|2': ['orange', 'apple', 'peal']
// });
// print('mockArrayCount', mockArrayCount);

// let mockFunction = Mock.mock({
// 	'title': () => 'welcome'
// });
// print('mockFunction', mockFunction)

// let mockRegexp = Mock.mock({
// 	'regexp1': /[a-z][A-Z][0-9]/,
// 	'regexp2': /\d{5, 10}/,
// 	'regexp3': /\w\W\s\S\d\D/
// });
// print('mockRegexp', mockRegexp);

// let mockDPD = Mock.mock({
// 	name: {
// 		first: '@FIRST',
// 		middle: '@FIRST',
// 		last: '@LAST',
// 		full: '@first @middle @last'
// 	}
// });
// print('mockDPD', mockDPD)

// // Mock.mock('https://jsonplaceholder.typicode.com/todos/1', {
// // 	title: '@FIRST',
// // 	email: '@EMAIL',
// // 	'completed|1': true
// // })

// // axios.get('https://jsonplaceholder.typicode.com/todos/1')
// // 	.then(res => {
// // 		console.log(res.data);
// // 	});

// let mockRandom = Mock.mock({
// 	boolean: '@boolean',
// 	natural: '@natural',
// 	integer: '@integer',
// 	float: '@float',
// 	character: '@character',
// 	string: '@string',
// 	range: '@range',
// 	date: '@date',
// 	time: '@time',
// 	datetime: '@datetime',
// 	now: '@now',
// 	image: '@image',
// 	paragraph: '@paragraph',
// 	sentence: '@sentence',
// 	word: '@word',
// 	title: '@title',
// 	cparagraph: '@cparagraph',
// 	ctitle: '@ctitle',
// 	cfirst: '@cfirst',
// 	curl: '@url',
// 	ip: '@ip',
// 	upper: '@upper',
// 	lower: '@lower',
// 	id: '@id'
// })
// print('mockRandom', mockRandom)

console.log(Mock.Random)

























