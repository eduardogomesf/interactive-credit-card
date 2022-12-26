import { useCreditCard } from "../../hooks/useCreditCard";
import { Container } from "./styles";

export function CreditCardBack() {
    const { cvc } = useCreditCard()

    return (
        <Container>
            <strong>{cvc ? cvc : '000'}</strong>
        </Container>
    )
}