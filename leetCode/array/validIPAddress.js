/**
 * https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3018/
 * Validate IP Address

Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

    1 <= xi.length <= 4
    xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
    Leading zeros are allowed in xi.

For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

 

Example 1:

Input: IP = "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".

Example 2:

Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".

Example 3:

Input: IP = "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.

Example 4:

Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
Output: "Neither"

Example 5:

Input: IP = "1e1.4.5.6"
Output: "Neither"

 

Constraints:

    IP consists only of English letters, digits and the characters '.' and ':'.


 */

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let ipArr = [];
  let res = "Neither";

  if (IP.includes(".")) {
    ipArr = IP.split(".");
    res = validIPV4(ipArr);
  } else if (IP.includes(":")) {
    ipArr = IP.split(":");
    res = validIPV6(ipArr);
  }
  return res;
};
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
function validIPV4(arr) {
  //check for leading 0
  //0-255
  if (arr.length > 4) return "Neither";

  for (let num of arr) {
    if (num.length > 3) {
      return "Neither";
    } else if (num[0] == 0 && num[1]) {
      return "Neither";
    } else if (num < 0 || num >= 255) {
      return "Neither";
    } else if (typeof parseInt(num) !== "number") return "Neither";
    else if (!isNumeric(num)) return "Neither";
  }
  return "IPv4";
}
function validIPV6(arr) {
  //a to f to lowercase
  //0-9 ok
  if (arr.length > 8) return "Neither";
  for (let hexa of arr) {
    if (hexa.length > 4) {
      return "Neither";
    } else if (hexa === "" || hexa === null) return "Neither";
    for (let i = 0; i < hexa.length; i++) {
      if (hexa[i] < 0 && hexa[i] > 9) {
        return "Neither";
      } else if (
        hexa.charCodeAt(hexa[i].toLowerCase()) < 97 &&
        hexa.charCodeAt(hexa[i].toLowerCase()) > 102
      ) {
        return "Neither";
      }
    }
  }
  return "IPv6";
}

// console.log(validIPAddress("172.16.254.1"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
// console.log(validIPAddress("256.256.256.256"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:"));
// console.log(validIPAddress("1e1.4.5.6"));
console.log(validIPAddress("01.01.01.01"));
console.log(validIPAddress("12.12.12.12.12"));

// var validIPAddress = function (IP) {
//   let ipv4_regex = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])\.){1}((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){2}((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9]))$/;
//   let ipv6_regex = /^(([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}){1}$/;
//   if (IP.match(ipv4_regex)) {
//     return "IPv4";
//   } else if (IP.match(ipv6_regex)) {
//     return "IPv6";
//   }

//   return "Neither";
// };

/*
Runtime: 68 ms, faster than 98.92% of JavaScript online submissions for Validate IP Address.
Memory Usage: 38.5 MB, less than 82.16% of JavaScript online submissions for Validate IP Address.
*/
var validIPAddress = function (IP) {
  const ipv4 = IP.split(".");
  const ipv6 = IP.split(":");

  function validateIPv4() {
    for (let n of ipv4) {
      if (n.length == 0 || n.length > 3) return false;
      if (n[0] == "0" && n.length != 1) return false;
      if (!/^\d+$/.test(n)) return false;
      if (+n > 255) return false;
    }
    return true;
  }
  function validateIPv6() {
    let hex = "0123456789abcdefABCDEF";
    for (let n of ipv6) {
      if (n.length == 0 || n.length > 4) return false;
      for (j = 0; j < n.length; j++) {
        if (hex.indexOf(n[j]) == -1) return false;
      }
    }
    return true;
  }
  if (ipv4.length == 4 && validateIPv4()) {
    return "IPv4";
  } else if (ipv6.length == 8 && validateIPv6()) {
    return "IPv6";
  } else {
    return "Neither";
  }
};

var validIPAddress = function (IP) {
  const ipv4 = IP.split(".");
  const ipv6 = IP.split(":");

  if (ipv4.length === 4) {
    function isValid(x) {
      if (!/^\d+$/.test(x)) return false;
      if (x.length >= 2 && x[0] === "0") return false;
      if (+x > 255) return false;
      return true;
    }

    if (ipv4.every(isValid)) return "IPv4";
    else return "Neither";
  } else if (ipv6.length === 8) {
    function isValid(x) {
      if (!/^\w+$/.test(x)) return false;
      if (x.length > 4) return false;
      if (/[g-zG-Z]/.test(x)) return false;
      return true;
    }

    if (ipv6.every(isValid)) return "IPv6";
    else return "Neither";
  } else return "Neither";
};

var validIPAddress = function (IP) {
  const isValid4 = (ip) => {
    const regex = /^\d+$/;
    const s = IP.split(".");
    if (s.length !== 4) return false;

    for (let i = 0; i < s.length; i++) {
      if (!regex.test(s[i])) return false;
      if (s[i].length > 1 && s[i].startsWith("0")) return false;

      const n = parseInt(s[i]);
      if (Number.isNaN(n)) return false;

      if (n < 0 || n > 255) return false;
    }
    return "IPv4";
  };
  const isValid6 = (ip) => {
    const regex = /^[a-f0-9]+$/i;
    const s = IP.split(":");
    if (s.length !== 8) return false;

    for (let i = 0; i < s.length; i++) {
      if (!regex.test(s[i])) return false;
      if (s[i].length > 4) return false;

      const n = parseInt(s[i], 16);
      if (Number.isNaN(n)) return false;

      if (n < 0 || n > 65535) return false;
    }
    return "IPv6";
  };
  return isValid4(IP) || isValid6(IP) || "Neither";
};



I've seen really complicated and complex code to solve this problem, but my solution below is easy to read/understand and is faster than 98.5%

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if (IP.includes(".") && validateIPv4(IP)) {
        return "IPv4";
    } else if (IP.includes(":") && validateIPv6(IP)) {
        return "IPv6";
    } else {
        return "Neither";
    }
};

function validateIPv4(IP) {
    numbers = IP.split(".");
    
    return numbers.length === 4 && numbers.every((item) => {
        return (
            item >= 0 &&
            item <= 255 &&
            (parseInt(item) + "").length === item.length
        );
    });
}

function validateIPv6(IP) {
    strings = IP.split(":");
    
    return strings.length === 8 && strings.every((item) => {
        return (
            item.length >= 1 &&
            item.length <= 4 &&
            (item.match(/[0-9a-fA-F]/g) || []).length === item.length
        );
    });
}
