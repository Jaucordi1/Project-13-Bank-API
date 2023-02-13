import Classes from "./UserTransaction.module.css"
import classNames from "classnames"

type UserTransactionProps = {
    data: any;
};

function UserTransaction({data}: UserTransactionProps) {
    return (
        <section className={Classes.account}>
            <div className={Classes.accountContentWrapper}>
                <h3 className={Classes.accountTitle}>
                    Argent Bank Checking (x8349)
                </h3>
                <p className={Classes.accountAmount}>
                    $2,082.79
                </p>
                <p className={Classes.accountAmountDescription}>
                    Available Balance
                </p>
            </div>
            <div className={classNames(Classes.accountContentWrapper, Classes.cta)}>
                <button className={Classes.transactionButton}>
                    View transactions
                </button>
            </div>
        </section>
    );
}

export type {UserTransactionProps}
export {UserTransaction}