const login=document.getElementById("submit");
let Total=0;
let transaction_Area=document.getElementById('transaction-Area');
transaction_Area.style.display="none";
//
// // let DW=document.getElementById("DepositAndWithdraw");
// DW.style.display="none";
login.addEventListener("click",function (){

const loginArea= document.getElementById('loginArea');
   loginArea.style.display="none";
transaction_Area.style.display='block';

// DW.style.display='inline';

})


document.getElementById('addMoney').addEventListener('click', function (){
   let deposit=parseFloat(document.getElementById('depositMoney').value);
   Total=Total+deposit;
   document.getElementById('deposit').innerHTML="<h4>$"+deposit+"</h4>";
   document.getElementById('balance').innerHTML="<h4>$"+Total+"</h4>";

   document.getElementById('depositMoney').value="";
})
document.getElementById('wdrawMoney').addEventListener('click', function (){
   let withdraw=parseFloat(document.getElementById('withdrawMoney').value);
   Total=Total-withdraw;
   document.getElementById('withdraw').innerHTML="<h4>$"+withdraw+"</h4>";
   document.getElementById('balance').innerHTML="<h4>$"+Total+"</h4>";

   document.getElementById('withdraw').value="";
})









