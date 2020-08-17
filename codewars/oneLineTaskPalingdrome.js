palindrome=(n,c)=>{n--;while(!c[n])c+=c[n%c.length];return c}

console.log(palindrome(3,'ab'));
console.log(palindrome(4,'ab'));