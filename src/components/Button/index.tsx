import { ReactNode } from "react";
import { Container } from "./styles";

type ButtonProps = {
    onClick: () => void
    children: ReactNode
    isLoading: boolean
}

export function Button({ onClick, isLoading, children, ...rest }: ButtonProps) {
    return (
        <Container
            onClick={onClick}
            disabled={isLoading}
            {...rest}
        >
            {children}
        </Container>
    )
}