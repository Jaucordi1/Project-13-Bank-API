import {Header} from "../../components/Header/Header";
import React from "react";
import {useLoaderData} from "react-router-dom";
import { UserTransaction } from "../../components/UserTransaction/UserTransaction";

// TODO Phase 2
function AccountPage() {
    const transactions = useLoaderData() as any[];

    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Transactions ({transactions.length})</h2>
            {transactions.map(transaction => <UserTransaction key={transaction.id} data={transaction} />)}
        </main>
    );
}

export default AccountPage;
