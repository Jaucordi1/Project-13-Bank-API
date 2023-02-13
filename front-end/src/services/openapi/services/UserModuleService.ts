/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { Login } from '../models/Login';
import type { LoginResponse } from '../models/LoginResponse';
import type { User } from '../models/User';
import type { UserProfile } from '../models/UserProfile';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserModuleService {

    /**
     * Login
     * API for Login
     * @param body Login Payload
     * @returns LoginResponse Login Successfully
     * @throws ApiError
     */
    public static postUserLogin(
body: Login,
): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: body,
            errors: {
                400: `Invalid Fields`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Signup
     * API for Signup
     * @param body Signup Payload
     * @returns ApiResponse Signup Successfully
     * @throws ApiError
     */
    public static postUserSignup(
body: User,
): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/signup',
            body: body,
            errors: {
                400: `Invalid Fields`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * User Profile API
     * API for fetching a user profile
     * @param authorization Attach Bearer JWT token
     * @returns ApiResponse User profile retrieved successully
     * @throws ApiError
     */
    public static postUserProfile(
authorization: any,
): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/profile',
            headers: {
                'Authorization': authorization,
            },
            errors: {
                400: `Invalid Fields`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * User Profile API
     * API for updating a user profile
     * @param authorization Attach Bearer JWT token
     * @param body Update user profile attributes
     * @returns ApiResponse User profile retrieved successully
     * @throws ApiError
     */
    public static putUserProfile(
authorization: any,
body: UserProfile,
): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/profile',
            headers: {
                'Authorization': authorization,
            },
            body: body,
            errors: {
                400: `Invalid Fields`,
                500: `Internal Server Error`,
            },
        });
    }

}
