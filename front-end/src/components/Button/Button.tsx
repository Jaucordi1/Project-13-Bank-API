import Classes from "./Button.module.css";
import classNames from "classnames";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({className, ...props}: ButtonProps) {
    return (
        <button {...props} className={classNames(Classes.button, className)} />
    );
}
