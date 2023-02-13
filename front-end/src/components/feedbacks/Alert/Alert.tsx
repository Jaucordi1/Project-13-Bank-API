import Classes from "./Alert.module.css";
import classNames from "classnames";

interface SingleTextAlert {
    title?: never;
    message: string;
}
interface MultiTextAlert {
    title: string;
    message: string;
}

export type AlertProps = {
    type: 'success' | 'error';
    className?: string;
} & (SingleTextAlert | MultiTextAlert)

export function Alert(props: AlertProps) {
    const {type, title, message, className} = props;

    return (
        <div className={classNames(Classes.wrapper, {
            [Classes.success]: type === 'success',
            [Classes.error]: type === 'error',
        }, className)}>
            {title && <span className={Classes.title}>{title}</span>}
            {message && <p className={Classes.message}>{message}</p>}
        </div>
    );
}
