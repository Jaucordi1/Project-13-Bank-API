/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { CreateTransaction } from '../models/CreateTransaction';
import type { Transaction } from '../models/Transaction';
import type { TransactionDetails } from '../models/TransactionDetails';
import type { TransactionsList } from '../models/TransactionsList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionModuleService {

    /**
     * Transactions API
     * API for fetching current month transactions list
     * @param authorization Attach Bearer JWT token
     * @returns any Transaction list retrieved successfully
     * @throws ApiError
     */
    public static getTransactions(
authorization: string,
): CancelablePromise<(ApiResponse & {
body?: {
transactions?: TransactionsList;
};
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions',
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
     * Transaction API
     * API for creating a transaction
     * @param authorization Attach Bearer JWT token
     * @param body Transaction data
     * @returns any User transaction upserted successfully
     * @throws ApiError
     */
    public static postTransactions(
authorization: string,
body: CreateTransaction,
): CancelablePromise<(ApiResponse & {
body?: Transaction;
})> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transactions',
            headers: {
                'Authorization': authorization,
            },
            body: body,
            errors: {
                400: `Invalid Fields`,
                404: `Transaction not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Transaction API
     * API for fetching transaction's details
     * @param authorization Attach Bearer JWT token
     * @param transactionId Transaction unique identifier
     * @returns any Transaction details retrieved successfully
     * @throws ApiError
     */
    public static getTransactions1(
authorization: string,
transactionId: string,
): CancelablePromise<(ApiResponse & {
body?: Transaction;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
            },
            headers: {
                'Authorization': authorization,
            },
            errors: {
                400: `Invalid Fields`,
                404: `Transaction not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Transaction API
     * API for partially updating a transaction
     * @param authorization Attach Bearer JWT token
     * @param transactionId Transaction unique identifier
     * @param body Transaction data
     * @returns any User transaction updated successfully
     * @throws ApiError
     */
    public static patchTransactions(
authorization: string,
transactionId: string,
body: TransactionDetails,
): CancelablePromise<(ApiResponse & {
body?: Transaction;
})> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
            },
            headers: {
                'Authorization': authorization,
            },
            body: body,
            errors: {
                400: `Invalid Fields`,
                404: `Transaction not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Transaction API
     * API for deleting a transaction
     * @param authorization Attach Bearer JWT token
     * @param transactionId Transaction unique identifier
     * @returns any User transaction deleted successfully
     * @throws ApiError
     */
    public static deleteTransactions(
authorization: string,
transactionId: string,
): CancelablePromise<(ApiResponse & {
body?: Transaction;
})> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
            },
            headers: {
                'Authorization': authorization,
            },
            errors: {
                400: `Invalid Fields`,
                404: `Transaction not found`,
                500: `Internal Server Error`,
            },
        });
    }

}
