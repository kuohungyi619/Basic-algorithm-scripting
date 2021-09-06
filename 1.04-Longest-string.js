// Return the length of teh longest word in the provided sentence.

function findLongestWordLength(str) {
    let num = 0;
    let words = str.split(" ")
    for(var i = 0; i< words.length; i++){
      if (words[i].length > num){
        num = words[i].length
      }
    }
    return num;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// str.split(" ") => 透過空格來分隔每一個字
