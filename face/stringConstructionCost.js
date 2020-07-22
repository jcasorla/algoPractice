// https://www.hackerrank.com/challenges/string-construction/problem?h_r=next-challenge&h_v=zen

// Amanda has a string of lowercase letters that she wants to copy to a new string. She can perform the following operations with the given costs. She can perform them any number of times to construct a new string

// :

//     Append a character to the end of string 

// at a cost of
// dollar.
// Choose any substring of
// and append it to the end of

//     at no charge.

// Given
// strings , find and print the minimum cost of copying each to

// on a new line.

// For example, given a string
// , it can be copied for dollars. Start by copying , and individually at a cost of dollar per character. String at this time. Copy to the end of

// at no cost to complete the copy.

// Function Description

// Complete the stringConstruction function in the editor below. It should return the minimum cost of copying a string.

// stringConstruction has the following parameter(s):

//     s: a string

// Input Format

// The first line contains a single integer
// , the number of strings.
// Each of the next lines contains a single string,

// .

// Constraints

// Subtasks

// for

//     of the maximum score.

// Output Format

// For each string
// print the minimum cost of constructing a new string

// on a new line.

// Sample Input

// 2
// abcd
// abab

// Sample Output

// 4
// 2


function stringConstruction(s) {
    let hash = {};

    for(let i=0; i<s.length; i++){
        if(hash[s[i]]){
            hash[s[i]] +=1;
        }else{
            hash[s[i]] =1;
        }
    }

    let count =0;

    for(let key in hash){
        count+=1;
    }

    return count;
}