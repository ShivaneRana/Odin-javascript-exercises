const removeFromArray = function(array,elementTOBeRemoved1,elementTOBeRemoved2,elementTOBeRemoved3,elementTOBeRemoved4,) {
	//this one was tricky when removing multiple value consicutevly since slice would change array length leading to skipping of an iteration was able to fixed it but going through array in reverse
    for(let i = array.length;i>=0;i--){
		if(array[i] === elementTOBeRemoved1 || array[i] === elementTOBeRemoved2 || array[i] === elementTOBeRemoved3 || array[i] === elementTOBeRemoved4){
			array.splice(i,1);
		}
	}
	return array;
};


// Do not edit below this line
module.exports = removeFromArray;