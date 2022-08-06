// 1. sum zero Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
// for example:
// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addtoZero (arr) {   
    for(i = 0; i<arr.length; i++) {
        for (j=i+1; j<arr.length; j++) {
            if ((arr[i] + arr[j]) === 0){
            return true;
            }
            }
        } return false;
}
console.log(addtoZero([1,2,3,4,5,-3]))
//extra credit space complexity: run:O(n^2) space:O(1)



// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
// for example:
// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function uniChars (str) {
    for (i = 0; i <str.length-1; i++) {
        for (j=i+1; j<str.length; j++){
            if (str[i] == str[j]) return false;
            }
        }
        return true;
    }

console.log(uniChars('elo'))
//extra credit space complexity: run:O(n) space:O(1)




// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False


function isPangram (string) {
    let loString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i=0; i<alphabet.length; i++){
        if (loString.indexOf(alphabet[i]) <0){
            return false;
        }
    }
    return true;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
//extra credit space complexity: run:O(n) space:O(1)




// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function findLongestWord (wordArray) {
    let longestWord = 0
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i].length >longestWord) {
            longestWord = wordArray[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord(['hi', 'hello', 'goodmorning', 'ciao']))
//extra credit space complexity: run:O(n) space:O(1)
