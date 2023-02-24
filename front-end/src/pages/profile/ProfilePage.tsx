import {UserAccount} from "../../components/UserAccount/UserAccount"
import {useAppDispatch, useAppSelector} from "../../hooks/store"
import {UPDATE_PROFILE_ACTION} from "../../store/auth/actions"
import {Header} from "../../components/Header/Header"
import {UserProfile} from "../../services/openapi"
import {useLoaderData} from "react-router-dom"
import React from "react"

function ProfilePage() {
    const userTransactions = useLoaderData() as any[];

    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Accounts</h2>
            {userTransactions.map(userTransaction => (
                <UserAccount key={userTransaction.id} data={userTransaction} />
            ))}
        </main>
    );
}

export default ProfilePage;
