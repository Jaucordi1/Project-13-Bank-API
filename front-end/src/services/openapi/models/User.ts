/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserProfile } from './UserProfile';

/**
 * Represent a user
 */
export type User = ({
/**
 * user unique identifier
 */
id?: string;
/**
 * user email address
 */
email?: string;
/**
 * user creation date
 */
createdAt?: string;
/**
 * user last update date
 */
updatedAt?: string;
} & UserProfile & {
/**
 * user unique identifier
 */
id: string;
/**
 * user email address
 */
email: string;
/**
 * user creation date
 */
createdAt: string;
/**
 * user last update date
 */
updatedAt: string;
});
