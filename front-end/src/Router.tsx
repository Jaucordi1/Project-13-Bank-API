import {createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation} from "react-router-dom";
import {FETCH_PROFILE_ACTION, SIGNOUT_ACTION} from "./store/auth/actions";
import {Navigation} from "./components/Navigation/Navigation";
import {useAppDispatch, useAppSelector} from "./hooks/store";
import {Footer} from "./components/Footer/Footer";
import {MOCK_TRANSACTIONS, MOCK_USER_ACCOUNTS} from "./services/mock";
import React, {lazy, Suspense} from "react";

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
                    // TODO Replace with FETCH_TRANSACTIONS_ACTION store action
                    //  This action makes use of TransactionModule to fetch a transaction list
                    return MOCK_TRANSACTIONS;
                },
            },
            // TODO Phase 2
            {
                path: '/account/:id',
                element: <AuthGate requirements="auth-only"><AccountPage /></AuthGate>,
                loader: async (params) => {
                    const account = MOCK_USER_ACCOUNTS.find(account => account.id === params.params.id);
                    if (!account) {
                        throw new Response('Account not found', {status: 404, statusText: 'Not found'});
                    }
                    return {
                        account,
                        transactions: MOCK_TRANSACTIONS.filter(transaction => {
                            return transaction.sender.id === account.id
                                || transaction.receiver.id === account.id
                        }),
                    };
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
