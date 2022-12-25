import { Container } from "./styles";

type CreditCardBackProps = {
    cvc: string
}

export function CreditCardBack({ cvc }: CreditCardBackProps) {
    return (
        <Container>
            <strong>{cvc}</strong>
        </Container>
    )
}