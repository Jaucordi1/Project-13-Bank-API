import Classes from "./AccountPage.module.css";
import {UserTransaction} from "../../components/UserTransaction/UserTransaction";
import {UserAccount} from "../../components/UserAccount/UserAccount";
import {BankAccount, TransactionsList} from "../../services/openapi";
import {useLoaderData} from "react-router-dom";
import React from "react";

// TODO Phase 2
function AccountPage() {
    const {account, transactions} = useLoaderData() as { account: BankAccount, transactions: TransactionsList };

    return (
        <main className="main bg-dark">
            <UserAccount data={account} header />
            <h2 className="sr-only">Transactions ({transactions.length})</h2>
            {transactions.length > 0 && (
                <div className={Classes.content}>
                    <div className={Classes.transactionsHeading}>
                        <p className={Classes.date}>Date</p>
                        <div className={Classes.descriptionAmount}>
                            <p className={Classes.description}>Description</p>
                            <p className={Classes.amount}>Amount</p>
                        </div>
                        <p className={Classes.balance}>Balance</p>
                    </div>
                    {transactions.map(transaction => (
                        <UserTransaction key={transaction.id} data={transaction} />
                    ))}
                </div>
            )}
            {transactions.length === 0 && <p aria-hidden className={Classes.empty}>No transactions.</p>}
        </main>
    );
}

export default AccountPage;
