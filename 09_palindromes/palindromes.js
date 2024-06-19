const palindromes = function (str) {
	str = str.toLowerCase();
	let arr = str.split("");
	arr = arr.filter((item,index) => {
		return (item>= "a" && item <= "z") || (item >= 0 && item <= 9)
	})
  let reversed = arr.slice().reverse().join("");
	arr = arr.join("");
	console.log(`Orignal array :${arr}`)
	console.log(`Reversed array :${reversed}`)
	return (arr === reversed);
};

console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
