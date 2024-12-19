import * as buttons from './app';
import * as updateinterfaces from './updateInterface';


let currentAccount:buttons.userInfo | undefined


//  Transfer Amount functionality
export function trasnferAmount(currentAccount:buttons.userInfo){
  const usrname=buttons.accounts.find( acc=> acc.username === buttons.inputTransferTo.value.toLowerCase())
  let evaluate:boolean=true;
  if(usrname){
  evaluate=usrname!.username===currentAccount.username;
  }
  if( usrname && !evaluate){
    usrname.transactions.push(Number(buttons.inputTransferAmount.value))
    currentAccount.transactions.push(Number(buttons.inputTransferAmount.value)*-1);
    updateinterfaces.updateInterface(currentAccount);
    buttons.inputTransferTo.value=buttons.inputTransferAmount.value='';
  }
  else{
    if(evaluate && usrname)   simple('You cannot Transfer to your Own Account',currentAccount);
    else  simple("User Not Found....! :(",currentAccount);
    }  
}


function simple(content:string,currentAccount:buttons.userInfo){
    buttons.labelWelcome.textContent=`${content}`;
    buttons.labelWelcome.style.color='red';
      buttons.inputTransferTo.value=buttons.inputTransferAmount.value='';
      setTimeout(function(){
        buttons.labelWelcome.textContent=`Welcome back, ${currentAccount.AccountHolderName}`;
        buttons.labelWelcome.style.color='white';
      },5000)  
  }


// Loan Amount
export function loanAmount(currentAccount:buttons.userInfo){
 if(Number(buttons.inputLoanAmount.value)>0){
  currentAccount.transactions.push(Number(buttons.inputLoanAmount.value));
  updateinterfaces.updateInterface(currentAccount);
  buttons.inputLoanAmount.value='';
 }
}

//Close Account
export function closeAccount(currentAccount:buttons.userInfo){
  if(buttons.inputCloseUsername.value.toLowerCase()===currentAccount.username && Number(buttons.inputClosePin.value)===currentAccount.pin){
      console.log("hiiii")
    let i=buttons.accounts.findIndex(acc=>acc.username===currentAccount.username)
    buttons.accounts.splice(i,1);
    buttons.containerApp.style.opacity='0';
    buttons.labelWelcome.textContent='Log in to get started'
  } 
  else{
    buttons.labelWelcome.textContent="The Credentials Entered were Incorrect";
    buttons.labelWelcome.style.color='red'
    setTimeout(function(){
      buttons.labelWelcome.textContent=`Welcome back, ${currentAccount.AccountHolderName}`;
       buttons.labelWelcome.style.color='white';
    },5000)
  }
  buttons.inputCloseUsername.value =buttons.inputClosePin.value = '';
}