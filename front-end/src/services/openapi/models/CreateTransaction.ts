/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';
import type { BankAccount } from './BankAccount';
import type { TransactionType } from './TransactionType';

/**
 * Represent data sent when creating a new transaction
 */
export type CreateTransaction = {
    /**
     * Transaction label
     */
    description: string;
    type: TransactionType;
    sender: BankAccount;
    receiver: BankAccount;
    amount: Amount;
};
