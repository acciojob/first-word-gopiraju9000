function firstWord(s) {
  // your code here

	let res_str = "";

	for(let t of s){
		if(res_str.length > 0 &&  t == ' '){
			return res_str;
		}
		if(t != ' ') res_str = res_str + t;
	}

	return s;

	
}

// Do not change the code below

const s = prompt("Enter String:");

alert(firstWord(s));
