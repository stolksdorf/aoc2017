let input = '4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5';
let simple = '0	2	7	0';

input = simple.split('\t').map(Number);


let bankMemory = [];

const getLargestBank = (banks)=>{

}
const redistribute = (banks, index, count)=>{
	if(count == 0) return banks;
	banks[index] = banks[index] + 1;
	const nextIndex = (index+1) % banks.length;
	return redistribute(banks, nextIndex, count-1)
}



const checkMemory = (bank)=>{
	const bankID = bank.join('');
	const hasSeenBefore = !!bankMemory.find((mbank)=>mbank==bankID);
	if(hasSeenBefore) return true;
	bankMemory.push(bankID);
	return false;
}


console.log(redistribute([1,2,3], 2, 4));