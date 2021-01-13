var convertToRoman = function(num) {
  const track = {1000:"M", 900:"CM",  500:"D", 400:"CD", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I"};
  

  var converted = "";
  var decimal=[];
  for(var key in track){
  if (track.hasOwnProperty(key)){
   decimal.push(+key);
  }
}
  console.log(decimal);
    for (let i = decimal.length-1; i >=0; i--) {
    while (decimal[i] <= num) {
       
      converted += track[decimal[i]];
      num -= decimal[i];
    }
  }

  return converted;
};

console.log(convertToRoman(4));


//convertToRoman(2) should return "II".

//convertToRoman(3) should return "III".

//convertToRoman(4) should return "IV".

//convertToRoman(5) should return "V".

//convertToRoman(9) should return "IX".

//convertToRoman(12) should return "XII".

//convertToRoman(16) should return "XVI".

//convertToRoman(29) should return "XXIX".

//convertToRoman(44) should return "XLIV".

//convertToRoman(45) should return "XLV"

//convertToRoman(68) should return "LXVIII"

//convertToRoman(83) should return "LXXXIII"

//convertToRoman(97) should return "XCVII"

//convertToRoman(99) should return "XCIX"

//convertToRoman(400) should return "CD"

//convertToRoman(500) should return "D"

//convertToRoman(501) should return "DI"

//convertToRoman(649) should return "DCXLIX"

//convertToRoman(798) should return "DCCXCVIII"

//convertToRoman(891) should return "DCCCXCI"

//convertToRoman(1000) should return "M"

//convertToRoman(1004) should return "MIV"

//convertToRoman(1006) should return "MVI"

//convertToRoman(1023) should return "MXXIII"

//convertToRoman(2014) should return "MMXIV"

//convertToRoman(3999) should return "MMMCMXCIX"
