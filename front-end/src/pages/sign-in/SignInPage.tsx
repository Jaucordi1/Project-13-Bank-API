import Classes from "./SignInPage.module.css"
import {Checkbox} from "../../components/forms/Checkbox/Checkbox"
import {useAppDispatch, useAppSelector} from "../../hooks/store"
import {Alert} from "../../components/feedbacks/Alert/Alert"
import {Input} from "../../components/forms/Input/Input"
import {SIGNIN_ACTION} from "../../store/auth/actions"
import {Login} from "../../services/openapi"
import classNames from "classnames"
import React from "react"

function SignInPage() {
    const dispatch = useAppDispatch();
    const authError = useAppSelector(state => state.auth.error);
    const [credential, setCredential] = React.useState<Login & { remember: boolean }>({
        email: "",
        password: "",
        remember: false
    });
    const changeEmail = (email: string) => setCredential(old => ({...old, email}));
    const changePassword = (password: string) => setCredential(old => ({...old, password}));
    const changeRemember = (remember: boolean) => setCredential(old => ({...old, remember}));
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(SIGNIN_ACTION(credential));
    };

    return (
        <main className="main bg-dark">
            <section className={Classes.signInContent}>
                <i className={classNames("fa fa-user-circle", Classes.signInIcon)} />
                <h1>Sign In</h1>
                <form action="#" onSubmit={handleLogin}>
                    <Input id="username"
                           label="Username"
                           autoComplete="username"
                           autoFocus
                           type="text"
                           value={credential.email}
                           onChange={changeEmail} />
                    <Input id="password"
                           label="Password"
                           type="password"
                           autoComplete="current-password"
                           value={credential.password}
                           onChange={changePassword} />
                    <Checkbox label="Remember me"
                              value="remember-me"
                              checked={credential.remember}
                              onChange={changeRemember} />
                    {!!authError && <Alert type="error"
                                           message={authError.message || authError.code || authError.name || authError.stack || "Unknown error"} />}
                    <button type="submit" className={Classes.signInButton}>
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}

export default SignInPage
