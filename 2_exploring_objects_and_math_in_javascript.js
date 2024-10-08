// Task 1 Create constructor function for accounts

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
};

let checking1 = new Account(1, 5000, "Ben Greenberg");
console.log(checking1);
// Constructor function and instantiation using new keyword for account

// Task 2 Implement methods within account to deposit and withdraw

Account.prototype.deposit = function(depositAmount) {
    if (depositAmount > 0) { this.balance += depositAmount;}
    else {console.log("Must deposit a positive number for transaction to be valid");}
    console.log(`Balance: ${this.balance}`);
    return Account;
};

Account.prototype.withdraw = function(withdrawAmount) {
    if (withdrawAmount > this.balance) {console.log("Witdrawal Amount must not exceed current balance, transaction voided");}
    else {this.balance -= withdrawAmount;}
    console.log(`Balance: ${this.balance}`)
    return Account;
};

checking1.deposit(1000);
checking1.withdraw(500);
console.log(checking1);
// prototype methods for withdrawals and deposits as well as calling those methods and relevant console logs for debugging

// Task 3 Method to calculate compound interest rate based on balance specified rate

Account.prototype.compoundingInterest = function(interestRate, applicationsPerPeriod, periodsElapsed) {
    this.interestAccrued = (this.balance*(Math.pow((1+(interestRate/applicationsPerPeriod)),(applicationsPerPeriod*periodsElapsed)))-this.balance).toFixed(2);
    this.balance = (this.balance*(Math.pow((1+(interestRate/applicationsPerPeriod)),(applicationsPerPeriod*periodsElapsed)))).toFixed(2);
    console.log(`New Balance ${this.balance}`);
    console.log(`Interest Accrued: ${this.interestAccrued}`);
    return Account;
};

checking1.compoundingInterest(.05, 4, 5);
console.log(checking1)

// Method to calculate interest rate using accepted formula researched online and javascripts Math module
