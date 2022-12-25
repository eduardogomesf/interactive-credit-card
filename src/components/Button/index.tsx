import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    isLoading: boolean
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
    return (
        <Container
            {...rest}
        >
            {children}
        </Container>
    )
}