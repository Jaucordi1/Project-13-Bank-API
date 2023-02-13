import Classes from './Checkbox.module.css'
import type {InputProps} from '../Input/Input'

export interface CheckboxProps extends Omit<InputProps, 'id' | 'type'> {
    id?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({id = 'remember-me', label = 'Remember me', value, checked, onChange}: CheckboxProps) {
    return (
        <div className={Classes.inputRemember}>
            <input type="checkbox" id={id} value={value} checked={checked} onChange={event => onChange(event.target.checked)} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
