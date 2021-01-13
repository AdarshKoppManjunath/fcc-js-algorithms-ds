function walkThroughCash(amount,index,cidV,cidU,cid,sum,finalChange,gA){
  var value=amount[index];
  if(finalChange>value && cidV[index]>value){
                    var flag=true
                    var counter=0
                    let bal=0 
                    var tc=0
                    while(flag){
                      tc+=value; //keep track of change being collected
                      tc=parseFloat(tc.toFixed(2))
                      counter++; // keep track of bill count
                      cidV[index]=(cidV[index]-value).toFixed(2);
                      bal=(finalChange-tc).toFixed(2);
                      console.log(bal,cidV[index])
                      sum=sum-tc; //keep track total money in register
                      //change is collected and no money left in register
                       if(tc==finalChange && sum<=0){
                        gA.push([cidU[index],value*counter])
                        return {status: "CLOSED", change:cid}
                       }
                       //change is collected and money is left in register
                      else if (tc==finalChange){
                         gA.push([cidU[index],value*counter])
                        return {status: "OPEN", change: gA}
                        }
                        // no sufficient money
                    else if((bal<value || cidV[index]<value) && index==cidV.length-1 ){
                         return { status: "INSUFFICIENT_FUNDS", change: [] };
                      }
                      //some money collected and check with next available bills
                     else if(cidV[index]<value || bal<value){
                        gA.push([cidU[index],value*counter])
                        finalChange=parseFloat(parseFloat(bal).toFixed(2));
                        sum=sum-tc;
                        flag=false;
                      }
                      }
                      return [cidV,sum,finalChange,gA]
              }
             return ""
}

const checkCashRegister = (price, cash, cid) => {
  //final change to be given back to the customer
  var finalChange= (cash - price);
  finalChange=parseFloat(finalChange.toFixed(2));
  //total money in cash register
  let sum = 0;
  for (let i of cid) {
    sum += i[1];
  }
  sum=parseFloat(sum.toFixed(2)) 
  //condition 1 when finalChange is less than the total money in cash register.
  if (finalChange > sum) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } 
  //if change is equal to total money in cash register
  else if (finalChange.toFixed(2) === sum) {
    return { status: "CLOSED", change: cid };
  } 
  else {
    var cidU = cid.map(function(a) {return a[0]}).reverse();;
    var cidV = cid.map(function(b) {return b[1];}).reverse();;
    var amount=[100,20,10,5,1,.25,.1,.05,.01]; // to comapre the values 
    var gA=[];  // to push change
    for (let i=0; i<cidV.length; i++){
      var result=walkThroughCash(amount,i,cidV,cidU,cid,sum,finalChange,gA)
      // after collection one bill go to the next one with the updated result
      if (Array.isArray(result)){   
        [cidV,sum,finalChange,gA]=result; 
        continue
      }
      // no bill was collected, go to the next one
      else if (typeof(result)=="string"){
        continue;
      }
      //change collected
      else if (typeof(result)=="object"){
          return result;
      }  
    }    
          }
          //insufficient money
        return { status: "INSUFFICIENT_FUNDS", change: [] };
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );


//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
