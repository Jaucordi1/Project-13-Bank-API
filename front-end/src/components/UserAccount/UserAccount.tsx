import type {BankAccount} from "../../services/openapi";
import {useNavigate} from "react-router-dom";
import {Card} from "../Card/Card";


type UserAccountProps = {
    data: BankAccount;
    header?: boolean;
};

function UserAccount({data, header = false}: UserAccountProps) {
    const navigate = useNavigate();

    return <Card title={`${data.name} (${data.ref})`}
                 amount={`${data.amount.value.toLocaleString('en-US', {style: 'currency', currency: data.amount.currency, minimumFractionDigits: 2})}`}
                 amountDescription={data.description}
                 banner={header}
                 button={!header ? {text: 'View transactions', onClick: () => navigate(`/account/${data.id}`)} : undefined} />;
}

export type {UserAccountProps}
export {UserAccount}