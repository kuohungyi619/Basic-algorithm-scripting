function repeatStringNumTimes(str, num) {
    let ans = ""
    while (num>0){
      ans+= str;
      num--
    }return ans
  }
  
  repeatStringNumTimes("abc", 3);