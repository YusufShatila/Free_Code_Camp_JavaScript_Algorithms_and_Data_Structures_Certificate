function palindrome(str) {
    console.log(str);
    let noSpaceString = str.replace(/\s+/g, '');
    console.log(noSpaceString);
    let noAlphanumericString = str.replace(/[^a-z0-9]/gi, '');
    console.log(noAlphanumericString);
    let upperCaseString = noAlphanumericString.toUpperCase();
    console.log(upperCaseString)
    let reversedString = upperCaseString.split('').reverse().join('');
    console.log(reversedString);
    
    if (reversedString === upperCaseString) {
      return true;
    } else {
      return false;
    }
  }
  
  const result = palindrome("five|\_/|four");
  console.log(result);
  