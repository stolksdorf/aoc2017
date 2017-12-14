'use strict';

let input = require('./5.input.js');

const simple = `0
3
0
1
-3`;

input = input.split('\n').map(Number);


// const jump_broke = (registers, index=0, count=0)=>{
// 	if(index >= registers.length) return count;
// 	const next = registers[index] + index;
// 	registers[index] += 1;
// 	return jump_broke(registers, next, count+1);
// };

const countJumps = (inputRegisters, regMod)=>{
	let index=0, count=0, registers=inputRegisters.slice(0);
	while(index < registers.length){
		const next = registers[index] + index;
		registers[index] += regMod(registers[index]);
		index = next;
		count++;
	}
	return count;
};


console.log('Part 1', countJumps(input, ()=>1));
console.log('Part 2', countJumps(input, (offset)=>offset>=3 ? -1 : 1));
