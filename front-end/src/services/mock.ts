import {BankAccount, Transaction, TransactionCategory, TransactionType} from "./openapi";

const MOCK_USER_CHECKINGS: BankAccount = {
    id: 'account-1',
    type: BankAccount.type.CHECKING,
    ref: 'x8349',
    name: 'Argent Bank Checking',
    description: 'Available Balance',
    amount: {
        currency: 'USD',
        value: 2_082.79,
    },
};
const MOCK_USER_SAVINGS: BankAccount = {
    id: 'account-2',
    type: BankAccount.type.SAVING,
    ref: 'x6712',
    name: 'Argent Bank Savings',
    description: 'Available Balance',
    amount: {
        currency: 'USD',
        value: 10_928.42,
    },
};
const MOCK_USER_CARD: BankAccount = {
    id: 'account-3',
    type: BankAccount.type.CARD,
    ref: 'x8349',
    name: 'Argent Bank Credit Card',
    description: 'Current Balance',
    amount: {
        currency: 'USD',
        value: 184.30,
    },
};
const MOCK_EXTERNAL_ACCOUNT: BankAccount = {
    id: 'account-4',
    type: BankAccount.type.CHECKING,
    ref: 'x1234',
    name: 'Argent Bank Checking',
    description: 'Available Balance',
    amount: {
        currency: 'USD',
        value: 2_082.79,
    },
};

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: 'transaction-6',
        type: TransactionType.ELECTRONIC,
        sender: MOCK_USER_CHECKINGS,
        receiver: MOCK_EXTERNAL_ACCOUNT,
        description: 'Golden Sun Bakery',
        amount: {
            currency: 'USD',
            value: 5,
        },
        balance: {
            currency: 'USD',
            value: 2_082.79,
        },
        category: TransactionCategory.FOOD,
        date: new Date(2020, 5, 20, 22, 30, 0).toLocaleDateString('en-US', {dateStyle: 'long'}),
    },
    {
        id: 'transaction-5',
        type: TransactionType.ELECTRONIC,
        sender: MOCK_USER_CHECKINGS,
        receiver: MOCK_EXTERNAL_ACCOUNT,
        description: 'Golden Sun Bakery',
        amount: {
            currency: 'USD',
            value: 10,
        },
        balance: {
            currency: 'USD',
            value: 2_087.79,
        },
        category: TransactionCategory.FOOD,
        date: new Date(2020, 5, 20, 19, 0, 0).toLocaleDateString('en-US', {dateStyle: 'long'}),
    },
    {
        id: 'transaction-4',
        type: TransactionType.ELECTRONIC,
        sender: MOCK_USER_CHECKINGS,
        receiver: MOCK_EXTERNAL_ACCOUNT,
        description: 'Golden Sun Bakery',
        amount: {
            currency: 'USD',
            value: 20,
        },
        balance: {
            currency: 'USD',
            value: 2_097.79,
        },
        category: TransactionCategory.FOOD,
        date: new Date(2020, 5, 20, 16, 0, 0).toLocaleDateString('en-US', {dateStyle: 'long'}),
    },
    {
        id: 'transaction-3',
        type: TransactionType.ELECTRONIC,
        sender: MOCK_USER_CHECKINGS,
        receiver: MOCK_EXTERNAL_ACCOUNT,
        description: 'Golden Sun Bakery',
        amount: {
            currency: 'USD',
            value: 30,
        },
        balance: {
            currency: 'USD',
            value: 2_117.79,
        },
        category: TransactionCategory.FOOD,
        date: new Date(2020, 5, 20, 12, 30, 0).toLocaleDateString('en-US', {dateStyle: 'long'}),
    },
    {
        id: 'transaction-2',
        type: TransactionType.ELECTRONIC,
        sender: MOCK_USER_CHECKINGS,
        receiver: MOCK_EXTERNAL_ACCOUNT,
        description: 'Golden Sun Bakery',
        amount: {
            currency: 'USD',
            value: 40,
        },
        balance: {
            currency: 'USD',
            value: 2_147.79,
        },
        category: TransactionCategory.FOOD,
        date: new Date(2020, 5, 20, 9, 0, 0).toLocaleDateString('en-US', {dateStyle: 'long'}),
    },
    {
        id: 'transaction-1',
        type: TransactionType.ELECTRONIC,
        sender: MOCK_USER_CHECKINGS,
        receiver: MOCK_EXTERNAL_ACCOUNT,
        description: 'Golden Sun Bakery',
        amount: {
            currency: 'USD',
            value: 50,
        },
        balance: {
            currency: 'USD',
            value: 2_187.79,
        },
        category: TransactionCategory.FOOD,
        date: new Date(2020, 5, 20, 6, 0, 0).toLocaleDateString('en-US', {dateStyle: 'long'}),
    },
];

export const MOCK_USER_ACCOUNTS: BankAccount[] = [
    MOCK_USER_CHECKINGS,
    MOCK_USER_SAVINGS,
    MOCK_USER_CARD,
];