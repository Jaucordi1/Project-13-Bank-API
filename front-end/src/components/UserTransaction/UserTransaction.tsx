import {Card} from "../Card/Card";
import {useNavigate} from "react-router-dom";

export type UserTransactionProps = {
    data: any;
};

export function UserTransaction(props: UserTransactionProps) {
    const {data} = props;
    const navigate = useNavigate();

    return <Card title={data.title}
                 amount={`${data.amount.currency}${data.amount.value.toLocaleString()}`}
                 amountDescription={data.description}
                 button={{text: 'View details', onClick: () => navigate(`/transaction/${data.id}`)}} />;
}
