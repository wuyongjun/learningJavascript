class Person {
	constructor () {
		console.log('I am a person');
	}
}

function show <T> (arg: T) : T {
	return arg;
}

console.log(show<number>(123));

export default {}