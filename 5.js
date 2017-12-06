const input = require('./5.input.js');

const simple = `0
3
0
1
-3`;

const jump = (registers, index=0, count=0)=>{
	if(index >= registers.length) return count;
	const next = registers[index] + index;
	registers[index] += 1;
	return jump(registers, next, count+1);
};
const countJumps = (input)=>jump(input.split('\n').map(Number))

console.log('Part 1', countJumps(input));



/* Part 2 */


//console.log('Part 2', checksum(input, findMaxDivider));
