
# BankEase Web Application

This is a simple banking application built using TypeScript and bundled with Webpack. Users can perform operations like transferring money, taking loans, and closing accounts, as well as view their account details, transaction history, and manage sessions.


## Features
1.Login
- Users log in using their username and PIN.
- Correct credentials display the user's name and account details.

2.Transactions:
- View balance, transaction history (deposits/withdrawals), and summary of account activity.
- Transactions can be sorted in ascending order.
3.Account Operations:
- Transfer Money: Transfer funds to another account (prevents transfers to the user's own account).
- Loan: Take a loan, which adds the loan amount to the user's balance.
- Close Account: Close the user account by providing the correct username and PIN.
3.Session Management:
- Users are logged out automatically after 5 minutes of inactivity.
- The session timeout countdown is displayed, and the session expires after the countdown reaches 0.

## Techologies Used
- TypeScript for structured and type-safe code.
- Webpack for bundling and managing TypeScript files into a single JavaScript file.
- HTML, CSS, JavaScript for the frontend and UI interactions.
- DOM Manipulation to interact with the page and update the UI based on user actions.
- This project uses Node.js for the development environment to manage dependencies and bundle TypeScript files using Webpack. Node.js is not part of the application's runtime, as the app runs entirely in the browser.


## How It Works
**Login:** Users enter their username and PIN. If valid, the app displays the user’s name and account details.

**Transfer:** Users can transfer money to another account. Transfers to the user's own account are prevented.

**Loan:** Users can take out a loan, which is added to their balance.

**Account Closure:** Users can close their account by entering their username and PIN.
## Deployment

1.Clone the repository:

```bash
git clone https://github.com/Venkata-Kiran-Adapa/BankEase.git
```
2.Install dependencies:
```bash
  npm install
```
3.Build the project:

```bash
  npm run build
```
4.Start the development server:
```bash
  npm start
```
5.Open the app in your browser at http://localhost:8080.



## Webpack Configuration
Webpack is used to bundle the TypeScript files. The webpack.config.js file handles the following:

- **Entry:** Specifies the entry point (app.ts) for the application.
- **Output:** Bundles the TypeScript files into a single JavaScript file (app.js).
- **Loaders:** Uses ts-loader to transpile TypeScript files into JavaScript.
- **DevServer:** Configures Webpack's development server to serve the app.
- **Source Maps:** Enables inline source maps for easier debugging
## Usernames and pins

- **vk:** 1111
- **rsm:** 2222
- **ag:** 3333
- **sskk:** 4444
- **nks:** 5555
- **pp:** 6666
- **nkp:** 7777
- **stk:** 8888
  

## Screenshots

![Screenshot 2024-11-20 154440](https://github.com/user-attachments/assets/d9f0e963-3f05-4e1e-b444-5c841b90c2f1)

![Screenshot 2024-11-20 155547](https://github.com/user-attachments/assets/6c31d045-b2d4-4bd6-9915-1f3cc829722d)








