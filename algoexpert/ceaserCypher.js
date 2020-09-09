// https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor
function caesarCipherEncryptor(string, key) {
	const alpha = ' abcdefghijklmnopqrstuvwxyz'.split('');
	let res = [];
	const newKey = key % 26;
	for(let i=0; i<string.length; i++){
		let sum = alpha.indexOf(string[i]) + newKey;
		if(sum>26){
			let dif = sum % 26;
			res.push(alpha[dif]);
		}else{
			res.push(alpha[sum]);
		}
	}
	return res.join('');  
}