let counter = 0;
const generateTransactionId = () => {
  //generating unique string for transaction ID
  const uniqueId = `TRANSACTION_ID_${++counter}`;
  return Symbol(uniqueId);
}

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);