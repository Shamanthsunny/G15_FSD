import React from 'react';
import Transaction from './Transaction';

export default function Customer({ id, firstName, lastName, transactions }) {
return (
    <div className="customer">
        <h2>Customer Details</h2>
        <p>ID: {id}</p>
        <p>Name: {firstName} {lastName}</p>
        <div className="transaction-list">
        <h3>Transactions</h3>
        {transactions.map(transaction => (
        <Transaction
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            amt={transaction.amt}
        />
        ))}
        </div>
    </div>
);
}






