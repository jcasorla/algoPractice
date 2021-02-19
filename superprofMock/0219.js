/* atoi() */
/* Convierte un string a un numero */
/* cada caracter del string lo va a ir convirtiendo a un numero, y se regresa el número orginial */
/* el valor posicional de cada número */
/* '234' -> 234 -> 200 + 30+ 4 = 234
base 10^x | x >= 0
234

function strToNum(str,i=str.length-1,x=0){
  if(i < 0) return 0;
    //console.log(i)
  	//console.log(parseInt(str[i]) * Math.pow(10, x) + strToNum(str,--i,++x))
	return parseInt(str[i]) * Math.pow(10, x) + strToNum(str,--i,++x);
}

console.log(strToNum('234'))

/* Regresar todas los posibles substrings de tamaño x que pueden salir de una string */
/* "hola", 2 -> "ho", "ol", "la" */
//   **
//[ho,ol,la]

function allSubs(str,x){
	const res = [];
  let p1 =0;
  let p2 =x;
  
  while(p2 < str.length+1){
  	const sub = str.slice(p1,p2);
    res.push(sub);
    p1 += 1;
    p2+=1;
  }
  
  return res;  
}

console.log(allSubs('hola',2))