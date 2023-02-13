import Classes from "./Header.module.css"
import {User, UserProfile} from "../../services/openapi";
import {Input} from "../forms/Input/Input";
import React from "react";

interface HeaderProps {
    user: User;
    onProfileUpdate: (updatedProfile: UserProfile) => Promise<any>;
    loading: boolean;
    open: boolean;
    onToggle: (open: boolean) => void;
}

function Header(props: HeaderProps) {
    const {user, onProfileUpdate, open, onToggle, loading} = props;

    // State
    const [edit, setEdit] = React.useState<UserProfile>(user);
    const isDifferent = edit.firstName !== user.firstName || edit.lastName !== user.lastName;

    // State handlers
    const handleChangeFirstName = (firstName: string) => setEdit(old => ({...old, firstName}));
    const handleChangeLastName = (lastName: string) => setEdit(old => ({...old, lastName}));

    // Form handlers
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onProfileUpdate(edit).then(() => onToggle(false));
    }
    const handleReset = () => {
        onToggle(false);
        setEdit(user);
    };

    return (
        <div className={Classes.header}>
            <h1>
                Welcome back
                <br />
                {!open && [user.firstName, user.lastName].join(' ')!}
            </h1>
            {open && (
                <form action="#" onSubmit={handleSubmit} onReset={handleReset} className={Classes.editForm}>
                    <Input id="firstname" label="First Name" type="text" value={edit.firstName}
                           onChange={handleChangeFirstName} />
                    <Input id="lastname" label="Last Name" type="text" value={edit.lastName}
                           onChange={handleChangeLastName} />
                    <div className={Classes.editFormButtons}>
                        <button type="submit" disabled={loading || !isDifferent} className={Classes.editButton}>
                            Valider les changements {loading && (<i className="fas fa-circle-notch fa-spin"></i>)}
                        </button>
                        <button type="reset" disabled={loading} className={Classes.resetButton}>
                            Annuler
                        </button>
                    </div>
                </form>
            )}
            {!open && <button className={Classes.editButton} onClick={() => onToggle(true)}>
                Edit Name
            </button>}
        </div>
    );
}

export {Header}
