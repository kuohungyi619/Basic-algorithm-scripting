// You are given two arrays and an index
// copy each element of the first array into the second array

function frankenSplice(arr1, arr2, n) {
    let fullArr = arr2.slice();
    for(let i= 0; i<arr1.length; i++){
    fullArr.splice(n,0,arr1[i])
    n++
    }
    return fullArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));