import * as buttons from './app';
import * as functionalities from './functionalities';
  
let currentAccounts:buttons.userInfo;

// update interface
export function updateInterface(currentAccount:buttons.userInfo){

    // Displaying Balance
    displayBalance(currentAccount.transactions);
   
    // Displaying Transactions
    displayTransactions(currentAccount.transactions);
    
    //Displaying Summary
    displaySummary(currentAccount);
   
    //DisplayingDate
    displayDate();
   
    //Timer of 10mins
    timer();

   // Sort Button
let sorted :boolean = false;
buttons.btnSort.addEventListener('click',(e:Event)=> {
     e.preventDefault();
     displayTransactions(currentAccount.transactions, !sorted);
     sorted = !sorted;
});

// Transfer Amount Button
buttons.btnTransfer.addEventListener('click',(e:Event)=>{
    e.preventDefault();
    functionalities.trasnferAmount(currentAccount);

});

// Loan Button
buttons.btnLoan.addEventListener('click',(e:Event)=>{
    e.preventDefault();
    functionalities.loanAmount(currentAccount);
});

// Close Account
buttons.btnClose.addEventListener('click',(e:Event)=>{
  e.preventDefault();
  functionalities.closeAccount(currentAccount);
});

}
   // Displaying Date
function displayDate():void{
    const now = new Date();
    const day :string= String(now.getDate()).padStart(2, '0');
    const month:string = String(now.getMonth() + 1).padStart(2, '0');
    const year:number = now.getFullYear();
    buttons.labelDate.textContent= `${day}/${month}/${year}`;
  }
  
  
  // Displaying Balance
  function displayBalance(transactions:number[]):void{
    const balance=transactions.reduce((acc,transaction)=>acc+transaction,0);
    buttons.labelBalance.textContent=`${balance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}₹`;
  
  }

// Displaying Transactions
function displayTransactions(transactions:number[],sort=false):void{
    buttons.containertransactions.innerHTML = '';
    const movs = sort ? transactions.slice().sort((a, b) => a - b) : transactions;
    movs.forEach(function (transaction, i) {
            const type = transaction > 0 ? 'deposit' : 'withdrawal';
            const html = `
            <div class="transactions__row">
                <div class="transactions__type transactions__type--${type}">${i+1} ${ type}</div>
                <div class="transactions__value">${(Math.abs(transaction)).toLocaleString('en-IN', { maximumFractionDigits: 2 })}₹</div>
            </div>`;
    buttons.containertransactions.insertAdjacentHTML('afterbegin', html);
  });
}

   // Displaying Summary
function displaySummary(currentAccount:buttons.userInfo):void{
    const incoming:number=currentAccount.transactions.filter(transaction=> transaction > 0 ).reduce((acc,eachtransaction)=>acc+eachtransaction,0);
    buttons.labelSumIn.textContent=`${incoming}₹`;
     
    const outgoing=currentAccount.transactions.filter(transaction=>transaction < 0).reduce((acc,eachtransaction)=>acc+eachtransaction,0)
    buttons.labelSumOut.textContent=`${outgoing}₹`;
  
    const interest = currentAccount.transactions.filter(transaction => transaction > 0).map(deposit => (deposit * currentAccount.interestRate) / 100).filter((int, i, arr) => {return int >= 1; }).reduce((acc, int) => acc + int, 0);
    buttons.labelSumInterest.textContent = `${interest}₹`;
  }


    //Timer function
const time=document.querySelector('.timer')! as HTMLElement;
let count:number=4;
function timer():void{
   const intervalid = setInterval(() => {
      if(count>0) {
        time.textContent=`${count} minutes`;
        count--;
       }
       else clearInterval(intervalid)
      },60000);
    setTimeout(function(){
        buttons.containerApp.style.opacity="0";
        buttons.labelWelcome.textContent='Session Timed Out....!'
        setTimeout(function(){   buttons.labelWelcome.textContent='Log in to get started'},5000)
    },60000*5)
}