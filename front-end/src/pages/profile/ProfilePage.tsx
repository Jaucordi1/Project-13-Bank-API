import {UserTransaction} from "../../components/UserTransaction/UserTransaction"
import {useAppDispatch, useAppSelector} from "../../hooks/store"
import {UPDATE_PROFILE_ACTION} from "../../store/auth/actions"
import {Header} from "../../components/Header/Header"
import {UserProfile} from "../../services/openapi"
import {useLoaderData} from "react-router-dom"
import React from "react"

function ProfilePage() {
    const dispatch = useAppDispatch();
    const {loading, user} = useAppSelector(state => state.auth);
    const [editing, setEditing] = React.useState(false);
    const handleProfileUpdate = (updatedProfile: UserProfile) => {
        return dispatch(UPDATE_PROFILE_ACTION(updatedProfile));
    }

    const userTransactions = useLoaderData() as any[];

    return (
        <main className="main bg-dark">
            <Header user={user!} onProfileUpdate={handleProfileUpdate} loading={loading}
                    open={editing} onToggle={setEditing} />
            <h2 className="sr-only">Accounts</h2>
            {userTransactions.map(userTransaction => (
                <UserTransaction key={userTransaction.id} data={userTransaction} />
            ))}
        </main>
    );
}

export default ProfilePage;
