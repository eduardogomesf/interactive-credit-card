import { InputHTMLAttributes, useState } from "react";
import { Label } from "../Label";
import { Container, Error } from "./styles";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    value: any
    setValue: (value: string) => void
    placeholder: string
    label?: string
    errorMessage: string
    error: boolean
    clearError: () => void
}

export function TextInput({ label, value, setValue, placeholder, error, errorMessage, clearError }: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false)

    function handleBlur() {
        if (error) {
            clearError()
        }
        setIsFocused(false)
    }

    return (
        <Container hasError={!!error}>
            {label && <Label title={label} />}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
            />
            {(!isFocused && error) && <Error>{errorMessage}</Error>}
        </Container>
    )
}