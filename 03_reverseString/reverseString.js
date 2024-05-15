function reverseString(string) {
	let stringReversed ='';
	for(let i = string.length;i>=0;i--){
		if(string[i] === undefined){
			continue;
		}
		stringReversed  +=string[i];
	}
	return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
