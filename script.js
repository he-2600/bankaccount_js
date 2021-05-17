
const account = {
    accountName: "Heba",
    balance: 100,
    getAccountName: function () {
        alert("Account name: " + this.accountName);
        atm();
    },

    getBalance: function () {
        alert("Your balance is: " + this.balance);
        atm();
    },
    deposit: function () {
        let sum = parseFloat(prompt("How much would you like to deposit?"));
        if (isNaN(sum) || sum <= 0) {
            alert("Error: Please enter a vaild number");
            this.deposit();

        } else {
            this.balance += sum;
            this.getBalance();
        }
    },

    withdrawal: function () {
        let sum = parseFloat(prompt("How much would you like to withdraw?"));
        if (isNaN(sum) || sum <= 0) {
            alert("Error: Please enter a valid number");
            this.withdrawal();
        } else {
            this.balance -= sum;
            this.getBalance();
        }
    },

    accountError: function () {
        alert("Error: Please enter your Balance");
        atm();
    },

};

function atm() {
    let choice = parseInt
        (prompt("Fetch Account name: 1. Get balance: 2. Deposit: 3. Withdrawal: 4. Error: 5."));

    if (choice === 1) {
        account.getAccountName();

    } else if (choice === 2) {
        account.getBalance();

    } else if (choice === 3) {
        account.deposit();

    } else if (choice === 4) {
        account.withdrawal();

    } else if (choice === 5) {
        account.accountError();
    }
}

atm();




