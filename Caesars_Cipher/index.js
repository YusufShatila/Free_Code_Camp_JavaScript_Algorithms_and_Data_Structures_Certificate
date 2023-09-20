function rot13(str) {
    const alphabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newString = '';
    for(let i =0;i<str.length;i++){
      let index = alphabetic.indexOf(str[i]);
      console.log(index)
      if(index === -1){
        newString += str[i]
      }else{
        let newIndex = (index +13)%26
        console.log(alphabetic[newIndex])
        newString += alphabetic[newIndex]
        console.log(newString)
      }
    }
    return newString;
  }
  
  rot13("SERR PBQR PNZC");