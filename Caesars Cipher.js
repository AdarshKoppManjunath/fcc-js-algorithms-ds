function rot13(str) {

  var newS="";
  const alpha=("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  for(let i=0; i<str.length; i++){
    if (alpha.indexOf(str[i])>=0){
      var ind=alpha.indexOf(str[i])+13
      if (ind>25){
        var inde=ind-25-1
      
        newS+=alpha[inde];
      }
      else{
      newS+=alpha[ind];
    
      }
    }
    else{
      newS+=str[i];
    }
  }


console.log(newS);
  return newS;
}

rot13("SERR CVMMN!");