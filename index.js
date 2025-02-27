// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {

  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit () {
    this.account.balance += this.value;
  }
}


class Withdrawal extends Transaction {

  get value() {

    return -this.amount;
  }

}

class Deposit extends Transaction {

     get value() {
      return this.amount;
    }
};




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);



// const myAccount = new Account("snow-patrol");

// t0 = new Deposit(500, myAccount)
// t0.commit();
// console.log(`Opening Balance Deposit`, t0)


// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(120.00, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);




// console.log('Balance:', myAccount.balance);
