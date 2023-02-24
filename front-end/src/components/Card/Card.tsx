import Classes from './Card.module.css';
import classNames from "classnames";

export type CardProps = {
    title: string;
    amount: string;
    amountDescription: string;
    button?: {
        text: string;
        onClick: () => void;
    };
};

export function Card(props: CardProps) {
    const {title, amount, amountDescription, button} = props;

    return (
        <section className={Classes.wrapper}>
            <div className={Classes.content}>
                <h3 className={Classes.title}>{title}</h3>
                <p className={Classes.amount}>
                    {/*$2,082.79*/}
                    {amount}
                </p>
                <p className={Classes.amountDescription}>{amountDescription}</p>
            </div>
            {button && <div className={classNames(Classes.content, Classes.cta)}>
                <button className={Classes.button} onClick={button.onClick}>{button.text}</button>
            </div>}
        </section>
    );
}
