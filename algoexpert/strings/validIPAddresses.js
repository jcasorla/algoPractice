//https://www.algoexpert.io/questions/Valid%20IP%20Addresses

function validIPAddresses(string) {
  const options = generate(string);
  console.log(options);
}

function generate(str) {
  const uno = [],
    cuatro = [];
  let dos = [],
    tres = [];
  let num = "";

  for (let i = 0; i < 3; i++) {
    num += str[i];
    if (parseInt(num) < 255) uno.push(num);
  }
  num = "";
  for (let i = str.length - 1; i > 3; i--) {
    num = str[i] + num;
    if (parseInt(num) < 255) cuatro.push(num);
  }

  for (let i = 0; i < uno.length; i++) {
    const num = uno[i];
    const nextIdx = num.length;
    let num2 = "";

    for (let j = nextIdx; j < nextIdx + 3; j++) {
      num2 += str[j];
      if (num2 < 255) dos.push(num2);

      const nextIdxb = num2.length + nextIdx;
      let num3 = "";

      for (let j = nextIdxb; j < nextIdxb + 3; j++) {
        num3 += str[j];
        const nextIdxc = num3.length + nextIdxb;
        //   console.log(num3);
        let num4 = "";
        console.log(parseInt(num3));
        //   if (parseInt(num3) < 255) tres.push(parseInt(num3).toString());
        for (let x = nextIdxc; x < nextIdxc + 3; x++) {
          if (!str[x]) continue;
          num4 += str[x];
          //num4 === cuatro[0] || num4 === cuatro[1])
          if (cuatro.includes(num4)) {
            console.log(num3);
            console.log(num4);
            if (parseInt(num3) < 255) tres.push(num3);
          }
        }
      }
    }
  }
  const uniqueDos = new Set(dos);
  const uniqueTres = new Set(tres);
  dos = [...uniqueDos];
  tres = [...uniqueTres];
  return [uno, dos, tres, cuatro];
}

console.log(validIPAddresses("1921680"));
