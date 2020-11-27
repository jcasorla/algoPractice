function sumStr(res1, res2) {
  let carry = 0,
    top,
    bot;
  if (res1.length > res2.length) {
    top = res1;
    bot = res2;
  } else {
    top = res2;
    bot = res1;
  }

  let j = bot.length - 1;
  let res = [];
  for (let i = top.length - 1; i >= 0; i--) {
    let num1 = top[i] === undefined ? 0 : top[i];
    let num2 = bot[j] === undefined ? 0 : bot[j];
    let sum = parseInt(num1) + parseInt(num2) + carry;
    carry = 0;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }
    res.push(sum);
    sum = 0;
    j++;
  }

  return res.reverse().join("");
}

console.log(sumStr("143", "7"));
console.log(sumStr("7", "143"));
