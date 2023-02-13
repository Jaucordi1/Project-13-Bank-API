import {createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {useAppDispatch, useAppSelector} from "./hooks/store";
import {FETCH_PROFILE_ACTION} from "./store/auth/actions";

const HomePage = lazy(() => import('./pages/home/HomePage'));
const SignInPage = lazy(() => import('./pages/sign-in/SignInPage'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));

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
            dispatch(FETCH_PROFILE_ACTION(token));
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
                    return [];
                },
            },
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router;
