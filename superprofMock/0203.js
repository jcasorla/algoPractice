// Recibes dos strings. 
// Regresa la posición de la primera ocurrencia de del segundo string en el primero.
// Si no aparece en el segundo string, regresa -1;
// no se distingue entre mayúsculas y minúsculas

//Ejemplo: 
//"Hola Mundo", "do" → 8
//         **
//"Hola Mundo", "am" → -1
function subExistInStr(str,sub){
	str = str.toLowerCase();
  sub = sub.toLowerCase();
  
  let start = 0;
  let end = sub.length-1;
  
  while(end < str.length){
  	const sub1 = str.slice(start,end+1);
      console.log(sub1)
    if(sub1 === sub) return start;
    start++;
    end++;
  }
  return -1;
}

console.log(subExistInStr("Hola Mundo", "do"));
console.log(subExistInStr("Hola Mundo", "am"));



// Recibes un string y un diccionario de frecuencia de strings. 
// Si el string se puede construir a partir de ese diccionario, regresar la lista de strings que lo conforman. Si no, regresar no.

// Ejemplo: 
// {"abc": 3, "ab": 2, "abca": 1}, abcabcabcabca
// Respuesta: ["abc", "abc", "abc", "abca"]
// {"abc": 3, "ab": 2}, abcaba
// Respuesta: no

// {"abc": 3, "ab": 1, "abca": 1}
//abc
//abc
//abc
//abca
//. .


/*
function findCombos(str,dict){
	const arr = Objects.keys(dict);//[abc,ab,abca]
  let start =0;
  for(let val of arr){  	
    let end = s+val.length-1;
    while(end < str.length){
      const sub = str.slice(start,end+1);
      if(sub in dict){
      	dict[sub]-=1;
      }
      if(dict[sub]===0){
        start =end+1;
        break;
      }
    	
      start =end+1;
      end = end +1;
    }
    //loop abcabcabcabca
  }
}
*/
