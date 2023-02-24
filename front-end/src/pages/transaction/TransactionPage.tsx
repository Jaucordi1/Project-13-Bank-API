import {useLoaderData} from "react-router-dom";
import {Card} from "../../components/Card/Card";
import {useState} from "react";
import {Header} from "../../components/Header/Header";

// TODO Phase 2
function TransactionPage() {
    const transaction = useLoaderData() as any;
    const [editing, setEditing] = useState(false);
    const cancelEdit = () => setEditing(false);
    const startEdit = () => setEditing(true);
    const startEditOrSaveChanges = () => !editing ? startEdit() : cancelEdit();

    return (
        <div className="main bg-dark">
            <Header />
            <Card title={transaction.title}
                  amount={`${transaction.amount.currency}${transaction.amount.value.toLocaleString()}`}
                  amountDescription={editing ? 'Editing…' : 'Saved.'}
                  button={{text: editing ? 'Annuler' : 'Modifier', onClick: startEditOrSaveChanges}} />
        </div>
    );
}

export default TransactionPage;
