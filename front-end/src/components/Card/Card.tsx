import Classes from './Card.module.css';
import {Button} from "../Button/Button";
import classNames from "classnames";

export type CardProps = {
    title: string;
    amount: string;
    amountDescription: string;
    banner?: boolean;
    button?: {
        text: string;
        onClick: () => void;
    };
};

export function Card(props: CardProps) {
    const {title, amount, amountDescription, button, banner = false} = props;

    return (
        <section className={classNames(Classes.container, {[Classes.header]: banner})}>
            <div className={Classes.content}>
                <h3 className={Classes.title}>{title}</h3>
                <p className={Classes.amount}>{amount}</p>
                <p className={Classes.amountDescription}>
                    {amountDescription}
                </p>
            </div>
            {button && (
                <div className={classNames(Classes.content, Classes.cta)}>
                    <Button className={Classes.button} onClick={button.onClick}>
                        {button.text}
                    </Button>
                </div>
            )}
        </section>
    );
}
