const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};


function createTransaction(type, value) {
  if(type === 'credit' || type === 'debit') {
    user.transactions.push(
      {
        type: type,
        value: value
      }
    )
    
    if(type === 'credit') {
      user.balance += value;
    }
    else if(type === 'debit') {
      user.balance -= value;
    }
  
  }
  else {
    console.log('Type of transaction invalid! Try credit or debit!');
  }
}


function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;
  
  for(let transaction of user.transactions) {
    if(transaction.type === type && transaction.value > higherValue) {
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }

  return higherTransaction;

}


function getAverageTransactionValue() {
  let sumTransactionsValue = 0;
  
  for(let transaction of user.transactions) {
    sumTransactionsValue += transaction.value;
  }

  let averageTransactionValue = sumTransactionsValue / user.transactions.length;

  return averageTransactionValue;
}


function getTransactionsCount() {
  let transactionsCount = {
    credit: 0,
    debit: 0
  }

  for(let transaction of user.transactions) {
    if(transaction.type === 'credit') {
      transactionsCount.credit += 1;
    } 
    else {
      transactionsCount.debit += 1;
    }
  }

  return transactionsCount;
}


createTransaction('credit', 50);
createTransaction('credit', 120);
createTransaction('debit', 80);
createTransaction('debit', 30);


console.log(`The ${user.name} balance is ${user.balance}.`);
console.log("\nThe higher transactions were:");
console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));
console.log("\nThe average of transactions was:")
console.log(getAverageTransactionValue());
console.log("\nThe amount of transactions was:")
console.log(getTransactionsCount());