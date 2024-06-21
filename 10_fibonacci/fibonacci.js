function fibonacci(num){
	if(num == 0){
		return 0;
	}else if(num<0){
		return "OOPS";
	}
	let num1 = 0;
	let num2 = 1;
	let total = 0;
	let arr = [null]
	arr.push(num2);
	for(let i = 1;i<50;i++){
		total = num1+num2;
		arr.push(total);
		num1 = num2;
		num2 = total;
	}
	return arr[num]
}

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
