import Classes from './Navigation.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/store"
import {SIGNOUT_ACTION} from "../../store/auth/actions"
import {NavLink} from "react-router-dom"

export function Navigation() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const handleSignOut = () => dispatch(SIGNOUT_ACTION());

    return (
        <nav className={Classes.mainNav}>
            <NavLink className={Classes.mainNavLogo} to="/">
                <img
                    className={Classes.mainNavLogoImage}
                    src="/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {user && <NavLink className={Classes.mainNavItem} to="/profile">
                    <i className="fa fa-user-circle"></i>
                    {user.firstName}
                </NavLink>}
                {user && <NavLink className={Classes.mainNavItem} to="/" onClick={user ? handleSignOut : undefined}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>}
                {!user && <NavLink className={Classes.mainNavItem} to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>}
            </div>
        </nav>
    );
}
