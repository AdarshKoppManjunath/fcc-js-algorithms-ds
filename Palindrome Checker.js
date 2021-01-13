function palindrome(str) {
    str=str.trim().toLowerCase()
    str=str.replace(/[\W_]/g,"");
    
    var str1=str.slice(0,Math.floor(str.length/2));
    console.log(str1)
    if((str.length%2)==1){
          var str2=str.slice(Math.floor(str.length/2)+1,str.length);
    }
    else{
      var str2=str.slice(Math.floor(str.length/2),str.length);
    }
   
    console.log(str1,str2)
    for (let i=0; i<str1.length;i++){
      //console.log(str1[i],str2[str1.length-1-i]);
        if (str1[i]!=str2[str1.length-1-i]){
          return false;
        }
    }
  return true;
}



console.log(palindrome("A man, a plan, a canal. Panama"));
//palindrome("eye") should return a boolean.

//palindrome("eye") should return true.

//palindrome("_eye") should return true.

//palindrome("race car") should return true.

//palindrome("not a palindrome") should return false.

//palindrome("A man, a plan, a canal. Panama") should return true.

//palindrome("never odd or even") should return true.

//palindrome("nope") should return false.

//palindrome("almostomla") should return false.

//palindrome("My age is 0, 0 si ega ym.") should return true.

//palindrome("1 eye for of 1 eye.") should return false.

//palindrome("0_0 (: /-\ :) 0-0") should return true.

//palindrome("five|\_/|four") should return false.
