import Classes from "./UserTransaction.module.css";
import {Transaction, TransactionCategory} from "../../services/openapi";
import {useInPlaceEdit} from "../../hooks/useInPlaceEdit";
import {Dropdown} from "../forms/Dropdown/Dropdown";
import {Textarea} from "../forms/Textarea/Textarea";
import {useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";
import React from "react";

export type UserTransactionProps = {
    data: Transaction;
};

export function UserTransaction(props: UserTransactionProps) {
    const {data} = props;
    const navigate = useNavigate();

    const userAccount = data.amount.value > 0 ? data.receiver : data.sender;

    const [editingCategory, category, setCategory, editCategory, closeCategory] = useInPlaceEdit(data.category);
    const [editingNotes, notes, setNotes, editNotes, closeNotes] = useInPlaceEdit(data.notes);

    const handleChangeCategory = React.useCallback((newCategory: TransactionCategory) => {
        console.debug(`Switching from '${category}' transaction's category to '${newCategory}'`);
        // TODO UPDATE_TRANSACTION_ACTION from store
        closeCategory();
    }, [category, closeCategory]);
    const handleChangeNotes = React.useCallback((event: React.FormEvent) => {
        event.preventDefault();
        // TODO UPDATE_TRANSACTION_ACTION from store
        closeNotes();
    }, [notes, closeNotes]);

    const amountCurrency = React.useMemo(() => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: data.amount.currency,
    }), [data.amount.currency]);
    const balanceCurrency = React.useMemo(() => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: data.balance.currency,
    }), [data.balance.currency]);

    return (
        <details className={Classes.container}>
            <summary className={Classes.summary}>
                <div className={Classes.header}>
                    <p className={Classes.date}>{data.date}</p>
                    <div className={Classes.descriptionAmount}>
                        <p className={Classes.description}>
                            {data.description}
                            {data.notes && <>
                                <br />
                                <span className={Classes.notesPreview}>{data.notes}</span>
                            </>}
                        </p>
                        <p className={Classes.amount}>{amountCurrency.format(data.amount.value)}</p>
                    </div>
                    <p className={Classes.balance}>{balanceCurrency.format(data.balance.value)}</p>
                </div>
            </summary>
            <div className={Classes.content}>
                <hr />
                <br />
                <p>
                    <strong>Transaction Type: </strong>
                    {data.type}
                </p>
                <p>
                    <strong>Category: </strong>
                    {!editingCategory && (
                        <button className={Classes.editButton} onClick={editCategory} title="Edit category">
                            {category}&nbsp;
                            <i className="fa fa-pencil"></i>
                        </button>
                    )}
                    {editingCategory && (
                        <Dropdown name="category" id={`transaction-${data.id}-category`} value={category}
                                  onChange={event => handleChangeCategory(event.target.value as TransactionCategory)}>
                            {["Food", "Home", "Health"].map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </Dropdown>
                    )}
                </p>
                <div>
                    <strong>Notes: </strong>
                    {!editingNotes && (
                        <button className={Classes.editButton} onClick={editNotes} title="Edit notes">
                            {notes}&nbsp;<i className="fa fa-pencil"></i>
                        </button>
                    )}
                    {editingNotes && (
                        <form onSubmit={handleChangeNotes} className={Classes.notesForm}>
                            <Textarea name="notes" id={`transaction-${data.id}-notes`}
                                      onChange={event => setNotes(event.target.value)} />
                            <div className={Classes.notesFormActions}>
                                <Button type="submit">Save</Button>
                                <Button type="reset" className={Classes.cancelButton} onClick={closeNotes}>Cancel</Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </details>
    );
}
