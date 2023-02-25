/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionCategory } from './TransactionCategory';

/**
 * Represent a transaction's user details
 */
export type TransactionDetails = {
    category?: TransactionCategory;
    /**
     * Transaction's user notes
     */
    notes?: string;
};
