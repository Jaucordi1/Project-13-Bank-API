import Classes from "./ProfilePage.module.css";
import {UserAccount} from "../../components/UserAccount/UserAccount";
import {TransactionsList} from "../../services/openapi";
import {MOCK_USER_ACCOUNTS} from "../../services/mock";
import {Header} from "../../components/Header/Header";
import {useLoaderData} from "react-router-dom";
import React from "react";

function ProfilePage() {
    const transactions = useLoaderData() as TransactionsList;

    return (
        <main className="main bg-dark">
            <Header />
            <div className={Classes.content}>
                <h2 className="sr-only">Accounts</h2>
                {MOCK_USER_ACCOUNTS.map(account => (
                    <UserAccount key={account.id} data={account} />
                ))}
            </div>
        </main>
    );
}

export default ProfilePage;
