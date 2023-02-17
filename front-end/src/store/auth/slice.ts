import {createSlice, SerializedError} from "@reduxjs/toolkit";
import {User} from "../../services/openapi";
import * as actions from "./actions";

type AuthState = {
    loading: boolean;
    token?: string;
    user?: User;
    error?: SerializedError;
};
const initialState: AuthState = {
    loading: false,
    token: sessionStorage.getItem('user.token') || undefined,
};

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(actions.SIGNIN_ACTION.pending, (state) => {
                state.loading = true;
            })
            .addCase(actions.SIGNIN_ACTION.fulfilled, (state, action) => {
                delete state.error;
                state.token = action.payload.token;
                state.loading = false;
            })
            .addCase(actions.SIGNIN_ACTION.rejected, (state, action) => {
                state.error = action.error;
                state.loading = false;
            });
        builder
            .addCase(actions.FETCH_PROFILE_ACTION.pending, (state) => {
                state.loading = true;
            })
            .addCase(actions.FETCH_PROFILE_ACTION.fulfilled, (state, action) => {
                delete state.error;
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(actions.FETCH_PROFILE_ACTION.rejected, (state, action) => {
                state.error = action.error;
                state.loading = false;
            });
        builder
            .addCase(actions.UPDATE_PROFILE_ACTION.pending, (state) => {
                state.loading = true;
            })
            .addCase(actions.UPDATE_PROFILE_ACTION.fulfilled, (state, action) => {
                delete state.error;
                state.user!.firstName = action.payload.firstName;
                state.user!.lastName = action.payload.lastName;
                state.loading = false;
            })
            .addCase(actions.UPDATE_PROFILE_ACTION.rejected, (state, action) => {
                state.error = action.error;
                state.loading = false;
            });
        builder
            .addCase(actions.SIGNOUT_ACTION, (state) => {
                delete state.error;
                delete state.user;
                delete state.token;
                state.loading = false;
            });
    },
});

export default slice.reducer;
