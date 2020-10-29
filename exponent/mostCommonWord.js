
// We want to find the most frequently used words in a long string of text. Write a function most_common_words(text) that returns an array containing words with their frequencies, sorted from most common to least common, with ties broken by alphabetic order.

// For greater accuracy, your solution should ignore punctuation and capitalization.

// def most_common_words(text):
//   # Your code here

// Examples

// For example, given the string

// text = 'It was the best of times, it was the worst of times.'

// then most_common_words(text) should return

// [
//   ('it', 2),
//   ('of', 2),
//   ('the', 2),
//   ('times', 2),
//   ('was', 2),
//   ('best', 1),
//   ('worst', 1)
// ]
function most_common_words(text){

    let regex = /^[a-zA-Z]+$/i
    let arr = text.split(' ');
    let map = {};
  
    for(let i =0; i < arr.length; i++){
        if(!regex.test(arr[i])){
            arr[i] = arr[i].slice(0,arr[i].length-1);
        }
        if(map.hasOwnProperty(arr[i])){
            map[arr[i]] += 1;
        }else{
            map[arr[i]] = 1;
        }
    }

    console.log(map);
    return  Object.entries(map).sort((a,b)=>b[1]-a[1]).map(el=>el[0])

}
console.log(most_common_words('It was the best of times, it was the worst of times.'))

//https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c


// # Solution 1: Use regular expressions and built-in split() method
// import re

// def most_common_words(text):
//   # Sanitize the text by removing caps and punctuation
//   punctuation_re = r'[.,;!\"\'\(\)]'
//   sanitized_text = re.sub(punctuation_re, ' ', text).lower()
//   word_array = sanitized_text.split()
//   word_freq = {}

//   # Increment the count each time a word occurs
//   for word in word_array:
//     word_freq[word] = word_freq.get(word, 0) + 1

//   # Sort the words alphabetically and then by their frequency
//   words = sorted(word_freq.items())
//   words = sorted(words, reverse=True, key=lambda x: x[1])
//   return words


// # Solution 2 - Sanitize and split words in one pass
// def most_common_words_2(text):
//   word_freq = {}
//   start_idx = 0

//   for i in range(len(text)):
//     # Iterate until we hit a word barrier
//     if text[i] in ' .,;!\"\'-()':
//       if i > start_idx:
//         word = text[start_idx:i].lower()
//         word_freq[word] = word_freq.get(word, 0) + 1
//       start_idx = i + 1

//   # Sort alphabetically and then by frequency
//   words = sorted(word_freq.items())
//   words = sorted(words, reverse=True, key=lambda x: x[1])
//   return words


// def test_most_common_words():
//   text = 'It was the best of times, it was the worst of times.'
//   expected = [
//     ('it', 2),
//     ('of', 2),
//     ('the', 2),
//     ('times', 2),
//     ('was', 2),
//     ('best', 1),
//     ('worst', 1),
//   ]

//   assert most_common_words(text) == expected
//   assert most_common_words_2(text) == expected

// test_most_common_words()