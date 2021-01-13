function telephoneCheck(str) {
str=str.trim();
var mob=str.match(/[(]/g);

var ob=[];
if (mob!=null){
ob=ob.concat(mob);

}
var cob=str.match(/[)]/g);
var cb=[];
if (cob!=null){
cb=cb.concat(cob);
}

console.log(ob,cb)
if (str.length<10){
  return false;
}

else if(str.length>20 && str[0]!=1){
  return false;
}
else if(ob.length!=cb.length){
    return false
}

else{

  var regex= /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  return regex.test(str)
}
}

console.log(telephoneCheck("1 555-(555-555(5"));


//telephoneCheck("555-555-5555") should return a boolean.

//telephoneCheck("1 555-555-5555") should return true.

//telephoneCheck("1 (555) 555-5555") should return true.

//telephoneCheck("5555555555") should return true.

//telephoneCheck("555-555-5555") should return true.

//telephoneCheck("(555)555-5555") should return true.

//telephoneCheck("1(555)555-5555") should return true.

//telephoneCheck("555-5555") should return false.

//telephoneCheck("5555555") should return false.

//telephoneCheck("1 555)555-5555") should return false.

//telephoneCheck("1 555 555 5555") should return true.

//telephoneCheck("1 456 789 4444") should return true.

//telephoneCheck("123**&!!asdf#") should return false.

//telephoneCheck("55555555") should return false.

//telephoneCheck("(6054756961)") should return false

//telephoneCheck("2 (757) 622-7382") should return false.

//telephoneCheck("0 (757) 622-7382") should return false.

//telephoneCheck("-1 (757) 622-7382") should return false

//telephoneCheck("2 757 622-7382") should return false.

//telephoneCheck("10 (757) 622-7382") should return false.

//telephoneCheck("27576227382") should return false.

//telephoneCheck("(275)76227382") should return false.

//telephoneCheck("2(757)6227382") should return false.

//telephoneCheck("2(757)622-7382") should return false.

//telephoneCheck("555)-555-5555") should return false.

//telephoneCheck("(555-555-5555") should return false.

//telephoneCheck("(555)5(55?)-5555") should return false.
