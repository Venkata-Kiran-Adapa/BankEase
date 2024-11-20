import * as buttons from './app';
import * as updateinterfaces from './updateInterface'

 let currentAccount:{
  username:string;
  AccountHolderName:string;
  transactions:number[];
  interestRate:number;
  pin:number;
 }| undefined;

export function loginFunc():void{
  currentAccount= buttons.accounts.find(acc => acc.username === (buttons.inputLoginUsername.value).toLowerCase());
  if(currentAccount?.pin===Number(buttons.inputLoginPin.value)){
      buttons.labelWelcome.textContent=`Welcome back, ${currentAccount.AccountHolderName}`;
      buttons.labelWelcome.style.color='whitesmoke'
      buttons.containerApp.style.opacity='100';
      buttons.inputLoginUsername.value = buttons.inputLoginPin.value = '';
      buttons.inputLoginPin.blur();
       updateinterfaces.updateInterface(currentAccount);
    }
    else{
      buttons.labelWelcome.textContent="User Not Found..! :( ";
      buttons.labelWelcome.style.color='red';
      setTimeout(function(){
         buttons.labelWelcome.textContent="Log in to get started";
         buttons.labelWelcome.style.color='Whitesmoke';
      },5000);
      buttons.inputLoginUsername.value = buttons.inputLoginPin.value = '';
    }
  

  }
 

  export {currentAccount}