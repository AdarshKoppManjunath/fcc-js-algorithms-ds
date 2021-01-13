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