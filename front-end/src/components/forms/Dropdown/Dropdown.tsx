import Classes from "./Dropdown.module.css";
import classNames from "classnames";
import React from "react";

export type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Dropdown(props: DropdownProps) {
    const {className, ...others} = props;

    return (
        <label className={Classes.container}>
            <select {...others} className={classNames(Classes.select, className)} />
        </label>
    );
}
