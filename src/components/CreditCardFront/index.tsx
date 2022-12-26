import { getCreditCardNumberDividedByGroupsOfFourDigits, getExpirationDate } from "../../helpers/creditCard";
import { useCreditCard } from "../../hooks/useCreditCard";
import { CardFooter, CardNumberContainer, CardNumberFourDigits, Circle, CirclesContainer, Container, SmallCircle } from "./styles";

export function CreditCardFront() {
    const { cardNumber, expirationMonth, expirationYear, cardholder } = useCreditCard()

    return (
        <Container>
            <CirclesContainer>
                <Circle />
                <SmallCircle />
            </CirclesContainer>

            <CardNumberContainer>
                {getCreditCardNumberDividedByGroupsOfFourDigits(cardNumber).map((fourDigitPart, index) => {
                    return (
                        <CardNumberFourDigits key={index}>{fourDigitPart}</CardNumberFourDigits>

                    )
                })}
            </CardNumberContainer>

            <CardFooter>
                <strong>{cardholder ? cardholder : 'Your name'}</strong>
                <strong>{getExpirationDate(expirationMonth, expirationYear)}</strong>
            </CardFooter>
        </Container>
    )
}