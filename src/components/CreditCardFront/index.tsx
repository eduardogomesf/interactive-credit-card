import { getCreditCardNumberDividedByGroupsOfFourDigits, getExpirationDate } from "../../helpers/creditCard";
import { CardFooter, CardNumberContainer, CardNumberFourDigits, Circle, CirclesContainer, Container, SmallCircle } from "./styles";

type CreditCardFrontProps = {
    creditCard: {
        ownerName: string
        number: string
        expirationDate: Date
    }
}

export function CreditCardFront({ creditCard = {} as any }: CreditCardFrontProps) {

    return (
        <Container>
            <CirclesContainer>
                <Circle />
                <SmallCircle />
            </CirclesContainer>

            <CardNumberContainer>
                {getCreditCardNumberDividedByGroupsOfFourDigits(creditCard?.number).map((fourDigitPart, index) => {
                    return (
                        <CardNumberFourDigits key={index}>{fourDigitPart}</CardNumberFourDigits>

                    )
                })}
            </CardNumberContainer>

            <CardFooter>
                <strong>{creditCard.ownerName ?? 'Your name'}</strong>
                <strong>{creditCard.expirationDate ? getExpirationDate(creditCard.expirationDate) : '00/00'}</strong>
            </CardFooter>
        </Container>
    )
}