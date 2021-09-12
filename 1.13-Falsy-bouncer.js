// Remove all falsy values from an array
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i< arr.length; i ++){
      if (Boolean(arr[i]) === true){
        newArr.push(arr[i])}
    }
    return newArr;
  }
  
  bouncer([7, "ate", "", false, 9]);