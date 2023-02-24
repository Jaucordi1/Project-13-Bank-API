import {createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {useAppDispatch, useAppSelector} from "./hooks/store";
import {FETCH_PROFILE_ACTION, SIGNOUT_ACTION} from "./store/auth/actions";

const HomePage = lazy(() => import('./pages/home/HomePage'));
const SignInPage = lazy(() => import('./pages/sign-in/SignInPage'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));
// TODO Phase 2
const AccountPage = lazy(() => import('./pages/account/AccountPage'));
const TransactionPage = lazy(() => import('./pages/transaction/TransactionPage'));

function SplashScreen() {
    return (
        <div>Chargement…</div>
    );
}

function AuthGate({children, requirements = 'none'}: React.PropsWithChildren<{requirements?: 'auth-only' | 'non-auth-only' | 'none'}>) {
    const location = useLocation();
    const {token} = useAppSelector(state => state.auth);
    switch (requirements) {
        case 'auth-only':
            return !!token
                ? <>{children}</>
                : <Navigate to="/sign-in" />;
        case 'non-auth-only':
            return !token
                ? <>{children}</>
                : <Navigate to={location.state?.from?.pathname || "/"} replace />;
        case 'none':
            return <>{children}</>;
    }
}

function AuthProfile({children}: React.PropsWithChildren) {
    const dispatch = useAppDispatch();
    const {loading, token, user} = useAppSelector(state => state.auth);
    React.useEffect(() => {
        if (!!token && !user && !loading) {
            dispatch(FETCH_PROFILE_ACTION(token)).catch((error) => {
                console.debug('Error while reconnecting from saved token :', error);
                return dispatch(SIGNOUT_ACTION());
            });
        }
    }, [token, user, loading]);
    return <>{children}</>;
}

function Root() {
    return (
        <AuthProfile>
            <Navigation />
            <Suspense fallback={<SplashScreen />}>
                <Outlet />
            </Suspense>
            <Footer />
        </AuthProfile>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/sign-in',
                element: <AuthGate requirements="non-auth-only"><SignInPage /></AuthGate>,
            },
            {
                path: '/profile',
                element: <AuthGate requirements="auth-only"><ProfilePage /></AuthGate>,
                loader: async () => {
                    // TODO Replace with 'accounts' fetching
                    return [
                        {
                            id: 'account1',
                            type: 'account',
                            ref: 'x8349',
                            title: 'Argent Bank Checking',
                            description: 'Available Balance',
                            amount: {
                                currency: '$',
                                value: 2_082.79,
                            },
                        },
                        {
                            id: 'account2',
                            type: 'account',
                            ref: 'x6712',
                            title: 'Argent Bank Savings',
                            description: 'Available Balance',
                            amount: {
                                currency: '$',
                                value: 10_928.42,
                            },
                        },
                        {
                            id: 'account3',
                            type: 'card',
                            ref: 'x8349',
                            title: 'Argent Bank Credit Card',
                            description: 'Current Balance',
                            amount: {
                                currency: '$',
                                value: 184.30,
                            },
                        },
                    ];
                },
            },
            // TODO Phase 2
            {
                path: '/account/:id',
                element: <AuthGate requirements="auth-only"><AccountPage /></AuthGate>,
                loader: async () => {
                    // TODO Replace with 'transactions' fetching
                    return [
                        {id: 'transaction1', title: 'Pile Poil', amount: {currency: '$', value: 1000}},
                        {id: 'transaction2', title: 'Nouveau PC', amount: {currency: '$', value: 3100}},
                    ];
                },
            },
            {
                path: '/transaction/:id',
                element: <AuthGate requirements="auth-only"><TransactionPage /></AuthGate>,
                loader: async () => {
                    // TODO Replace with 'transaction' fetching
                    return {
                        id: 'transaction2',
                        title: 'Nouveau PC',
                        amount: {
                            currency: '$',
                            value: 3100,
                        },
                    };
                },
            },
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router;
