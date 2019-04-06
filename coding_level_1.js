const sum = (array) => {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum
}

// I don't know what recursion is

const subFibonacci = (number) => {
	var array = Array();
	if(number === 1){
		return 0
	}else if(number === 2){
		return 1
	}else {
		for (var i = 0; i < number; i++) {
			
			if(i === 0){
				array[i] = 0
			}else if(i === 1){
				array[i] = 1
			}else {
				array[i] = array[i - 1] + array[i - 2]
			}
		}
		return array[i]
	}

	
}