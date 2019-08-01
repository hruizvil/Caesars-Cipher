function rot13(str) { // LBH QVQ VG! - You did it!
  // 65 - 90 === A - Z
  let result = '';
  let holder = 0;

  for (let i = 0; i < str.length; i++) {
    holder = str.charCodeAt(i);
    if (holder < 65 || holder > 90) {
      result += String.fromCharCode(holder);
    } else if (holder > 77) {
      result += String.fromCharCode(holder - 13);
    } else if (holder < 78 && holder >= 65)
    result += String.fromCharCode(holder + 13);
  }
  
  return result;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
