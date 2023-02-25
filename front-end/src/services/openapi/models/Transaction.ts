/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';
import type { CreateTransaction } from './CreateTransaction';
import type { TransactionDetails } from './TransactionDetails';

/**
 * Represent a persisted transaction in database
 */
export type Transaction = ({
/**
 * Unique transaction identifier
 */
id: string;
} & CreateTransaction & TransactionDetails & {
balance: Amount;
/**
 * Transaction's date
 */
date: string;
});
