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