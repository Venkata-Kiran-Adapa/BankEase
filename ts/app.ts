
import * as log from './login';


export const inputLoginPin = document.querySelector('.login__input--pin')! as HTMLInputElement;
export const inputLoginUsername = document.querySelector('.login__input--user')! as HTMLInputElement;
export const btnLogin = document.querySelector('.login__btn')! as HTMLInputElement;
export const labelWelcome = document.querySelector('.welcome')! as HTMLElement;
export const containerApp = document.querySelector('.app')! as HTMLElement;
export const labelDate = document.querySelector('.date')! as HTMLElement ;
export const labelBalance = document.querySelector('.balance__value')! as HTMLElement ;
export const containertransactions = document.querySelector('.transactions')! as HTMLElement;
export const labelSumIn = document.querySelector('.summary__value--in')! as HTMLElement;
export const labelSumOut = document.querySelector('.summary__value--out')! as HTMLElement;
export const labelSumInterest = document.querySelector('.summary__value--interest')! as  HTMLElement;
export const btnSort = document.querySelector('.btn--sort')! as HTMLButtonElement;
export const inputTransferTo = document.querySelector('.form__input--to')! as HTMLInputElement;
export const inputTransferAmount = document.querySelector('.form__input--amount')! as HTMLInputElement;
export const btnTransfer = document.querySelector('.form__btn--transfer')! as HTMLButtonElement ;
export const inputLoanAmount = document.querySelector('.form__input--loan-amount')! as HTMLInputElement;
export const btnLoan = document.querySelector('.form__btn--loan')! as HTMLButtonElement;
export const inputCloseUsername = document.querySelector('.form__input--user')! as HTMLInputElement ;
export const inputClosePin = document.querySelector('.form__input--pin')! as HTMLInputElement;
export const btnClose = document.querySelector('.form__btn--close')! as HTMLButtonElement;

export interface userInfo{
    username:string;
    AccountHolderName:string;
    transactions:number[];
    interestRate:number;
    pin:number;
}

export let currentAccount:userInfo | undefined;

// User-Defined Account info

const account1:userInfo={
    username:'vk',
    AccountHolderName: 'Venkata Kiran Adapa',
    transactions: [200, 450, -400, 3000, 60050, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2:userInfo={
    username:'rsm',
    AccountHolderName: 'Sai Revanth Musunuri',
    transactions: [200, 450, -400, 3000, -650, -130, 70000, 1300],
    interestRate: 1.2,
    pin: 2222,
};

const account3:userInfo={
    username:'ag',
    AccountHolderName: 'Akash Gumpina',
    transactions: [5000, 3404540, -15000, -790, -3210, -1000, 85000, -30],
    interestRate: 1.5,
    pin: 3333,
};

const account4:userInfo={
    username:'sskk',
    AccountHolderName: 'Shanmukh sai Kishore Kesari',
    transactions: [200, -200, 345200, -300, -200, 5000, 4000, -460],
    interestRate: 0.7,
    pin: 4444,
};

const account5:userInfo={
    username:'nks',
    AccountHolderName: 'Nithin Kumar Sunkara',
    transactions: [4437, -1000, 7700, 22950, 790,80080,10000,9999,],
    interestRate: 1.2,
    pin: 5555,
};

const account6:userInfo={
    username:'pp',
    AccountHolderName: 'Prasanth Peddada',
    transactions: [430, 1000, -700, 5000, -1900,100000,-5000],
    interestRate: 1,
    pin: 6666,
};

const account7:userInfo={
    username:'nkp',
  AccountHolderName: 'Nagendra Kumar Parasa',
  transactions: [430, 100540, 7500,9999,50000, 20, 900,20,20,-20000],
  interestRate: 1,
  pin: 7777,
};

const account8:userInfo={
    username:'stk',
    AccountHolderName: 'Sai Tarun Kantam',
    transactions: [430, 1000, 700, 50, 90,200000,-50000],
    interestRate: 1.4,
    pin: 8888,
};


btnLogin.addEventListener('click',(e:Event)=>{
    e.preventDefault();
     log.loginFunc();
});



export const accounts= [account1, account2, account3, account4,account5,account6,account7,account8];