import {Login, UserModuleService, UserProfile} from "../../services/openapi";
import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../index";

export const SIGNIN_ACTION = createAsyncThunk("auth/sign-in", async (credential: Login & { remember: boolean }) => {
    const {remember, ...loginCredential} = credential;
    const response = await UserModuleService.postUserLogin(loginCredential);

    if (!response.body?.token) {
        throw new Error(response.message);
    }
    if (credential.remember) {
        sessionStorage.setItem('user.token', response.body.token);
    }

    return response.body;
});

export const FETCH_PROFILE_ACTION = createAsyncThunk("auth/fetch-profile", async (token: string) => {
    const response = await UserModuleService.postUserProfile(`Bearer ${token}`);

    if (!response.body?.id || !response.body.email) {
        throw new Error(response.message);
    }

    return response.body;
});

export const UPDATE_PROFILE_ACTION = createAsyncThunk("auth/update-profile", async (
    updatedProfile: UserProfile,
    thunkAPI
) => {
    return await new Promise<UserProfile>((resolve, reject) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.auth.token;
        setTimeout(() => {
            UserModuleService
                .putUserProfile(`Bearer ${token}`, updatedProfile)
                .then(response => {
                    if (!response.body?.id || !response.body.email) {
                        reject(new Error(response.message));
                    } else {
                        resolve(updatedProfile);
                    }
                });
        }, 1500);
    });
});

export const SIGNOUT_ACTION = createAction("auth/sign-out", () => {
    sessionStorage.removeItem('user.token');
    return {payload: undefined};
});
