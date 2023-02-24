import Classes from "./Header.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/store";
import {UPDATE_PROFILE_ACTION} from "../../store/auth/actions";
import {UserProfile} from "../../services/openapi";
import {Input} from "../forms/Input/Input";
import React, {useCallback} from "react";

function Header() {
    const dispatch = useAppDispatch();
    const {loading, user} = useAppSelector(state => state.auth);
    const [editing, setEditing] = React.useState(false);

    // State
    const [edit, setEdit] = React.useState<UserProfile>(user!);
    const isDifferent = edit.firstName !== user!.firstName || edit.lastName !== user!.lastName;

    // State handlers
    const handleChangeFirstName = (firstName: string) => setEdit(old => ({...old, firstName}));
    const handleChangeLastName = (lastName: string) => setEdit(old => ({...old, lastName}));

    // Form handlers
    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        dispatch(UPDATE_PROFILE_ACTION(edit)).then(() => setEditing(false));
    }, [edit]);
    const handleReset = useCallback(() => {
        setEditing(false);
        setEdit(user!);
    }, [user]);

    return (
        <div className={Classes.header}>
            <h1>
                Welcome back
                <br />
                {!editing && [user!.firstName, user!.lastName].join(' ')}
            </h1>
            {editing && (
                <form action="#" onSubmit={handleSubmit} onReset={handleReset} className={Classes.editForm}>
                    <div className={Classes.editFormFields}>
                        <Input id="firstname" label="First Name" type="text" value={edit.firstName}
                               onChange={handleChangeFirstName} />
                        <Input id="lastname" label="Last Name" type="text" value={edit.lastName}
                               onChange={handleChangeLastName} />
                    </div>
                    <div className={Classes.editFormButtons}>
                        <button type="reset" disabled={loading} className={Classes.resetButton}>
                            Cancel
                        </button>
                        <button type="submit" disabled={loading || !isDifferent} className={Classes.editButton}>
                            Save changes {loading && (<i className="fas fa-circle-notch fa-spin"></i>)}
                        </button>
                    </div>
                </form>
            )}
            {!editing && <button className={Classes.editButton} onClick={() => setEditing(true)}>
                Edit Name
            </button>}
        </div>
    );
}

export {Header}
