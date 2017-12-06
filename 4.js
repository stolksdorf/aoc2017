const input = require('./4.input.js');
const simple = `aa bb cc dd aag`;


const unique = (list)=>{
	return Object.keys(list.reduce((acc, item)=>{
		acc[item] = true;
		return acc;
	}, {}));
};

const isPassphrase = (phrase)=>{
	const list = phrase.split(' ');
	return list.length == unique(list).length;
}
const count = (list, fn)=>list.reduce((acc, item)=>(acc + (fn(item) ? 1 : 0)), 0);

const countPassphrases = (input)=>count(input.split('\n'), isPassphrase)

console.log('Part 1', countPassphrases(input));

/* Part 2 */

// Calls fn on all unique pairs of elements within the array
const mapPairs = (list, fn)=>{
	let result = [];
	list.map((item1, index)=>{
		const rest = list.slice(index + 1);
		rest.map((item2)=>result.push(fn(item1, item2)));
	});
	return result;
};

const isAnagram = (word1, word2)=>{
	if(word1.length != word2.length) return false;
	const alphabetical = (word)=>word.split('').sort().join('');
	return alphabetical(word1) == alphabetical(word2);
};
const isAllFalse = (list)=>!list.reduce((acc, item)=>acc || item, false);
const isBetterPassphrase = (phrase)=>{
	return isAllFalse(mapPairs(phrase.split(' '), isAnagram))
};
const countBetterPassphrases = (input)=>count(input.split('\n'), isBetterPassphrase)

console.log('Part 2', countBetterPassphrases(input));
