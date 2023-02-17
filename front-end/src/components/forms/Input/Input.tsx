import Classes from "./Input.module.css";
import type React from "react";

export type InputProps = Omit<JSX.IntrinsicElements['input'], 'onChange'> & {
    id: string;
    label: string;
    value: any;
    onChange: (newValue: any) => void;
};

export function Input({id, label, onChange, ...props}: InputProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.validity.valid) return false;
        return onChange(event.target.value);
    }

    return (
        <div className={Classes.inputWrapper}>
            <label htmlFor={id}>{label}</label>
            <input {...props} id={id} onChange={handleChange} />
        </div>
    );
}
