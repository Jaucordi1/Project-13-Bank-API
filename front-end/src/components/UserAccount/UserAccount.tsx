import {useNavigate} from "react-router-dom";
import {Card} from "../Card/Card";

interface IAccount {
    id: string;
    type: string;
    ref: string;
    title: string;
    description: string;
    amount: {
        currency: string,
        value: number,
    },
}

interface ICard {
    id: string;
    type: string;
    ref: string;
    title: string;
    description: string;
    amount: {
        currency: string,
        value: number,
    },
}

type IUserAccount = IAccount | ICard;


type UserAccountProps = {
    data: IUserAccount;
};

function UserAccount({data}: UserAccountProps) {
    const navigate = useNavigate();

    return <Card title={`${data.title} (${data.ref})`}
                 amount={`${data.amount.currency}${data.amount.value.toLocaleString()}`}
                 amountDescription={data.description}
                 button={{text: 'View transactions', onClick: () => navigate(`/account/${data.id}`)}} />;
}

export type {UserAccountProps}
export {UserAccount}