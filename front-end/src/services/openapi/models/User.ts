/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import {UserProfile} from "./UserProfile";

export type User = {
    /**
     * user email
     */
    email?: string;
    /**
     * user password
     */
    password?: string;
} & UserProfile;
