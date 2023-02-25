import Classes from "./Textarea.module.css";
import classNames from "classnames";
import React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: TextareaProps) {
    const {className, rows = 5, cols = 35, ...others} = props;

    return (
        <label className={Classes.container}>
            <textarea {...others} rows={rows} cols={cols} className={classNames(Classes.textarea, className)} />
        </label>
    );
}
