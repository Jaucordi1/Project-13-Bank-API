/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';

/**
 * Represent a user account
 */
export type BankAccount = {
    /**
     * User account's unique identifier
     */
    id: string;
    /**
     * Account type
     */
    type: BankAccount.type;
    /**
     * User account's reference code
     */
    ref: string;
    /**
     * User account's name
     */
    name: string;
    amount: Amount;
    /**
     * User account amount's description
     */
    description: string;
};

export namespace BankAccount {

    /**
     * Account type
     */
    export enum type {
        CHECKING = 'checking',
        SAVING = 'saving',
        CARD = 'card',
    }


}
