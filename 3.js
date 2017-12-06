const input = 325489;

const getLayer = (input)=>Math.floor(Math.ceil(Math.sqrt(input))/2);

const getSpokes = (layer)=>{
	const corner = Math.pow(2*layer + 1, 2);
	return [
		corner - layer - 2*layer * 0,
		corner - layer - 2*layer * 1,
		corner - layer - 2*layer * 2,
		corner - layer - 2*layer * 3,
	];
};

const numSteps = (input)=>{
	const layer = getLayer(input)
	const minDelta = getSpokes(layer).reduce((min, spoke)=>{
		const result = Math.abs(input - spoke)
		if(result < min) min = result;
		return min;
	}, Infinity);

	return layer + minDelta;
}

/* Part 2 */
const sillySteps = (input)=>{
	let cache = {};
	const get = (x,y)=>cache[`${x}|${y}`] || 0;
	const set = (x,y, val)=>cache[`${x}|${y}`] = val;

	const getSurroundingSum = (x,y)=>{
		if(x== 0 && y == 0) return 1;
		return  get(x+1, y+0) +
				get(x+0, y+1) +
				get(x+1, y+1) +
				get(x-1, y+0) +
				get(x+0, y-1) +
				get(x-1, y-1) +
				get(x+1, y-1) +
				get(x-1, y+1);
	}
	const nextStep = (x,y,dx,dy)=>{
		const sum = getSurroundingSum(x,y);
		if(sum > input) return sum;
		set(x,y, sum);
		if(x == y || (x < 0 && x == -y) || (x > 0 && x == 1-y)){
			[dx, dy] = [-dy, dx];
		}
		return nextStep(x+dx, y+dy, dx, dy);
	}
	return nextStep(0,0,0,-1);
}


console.log('Part 1', numSteps(input));
console.log('Part 2', sillySteps(input));


