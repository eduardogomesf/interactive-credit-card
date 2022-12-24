import { CardFooter, CardNumberContainer, CardNumberFourDigits, Circle, CirclesContainer, Container, SmallCircle } from "./styles";

type CreditCardFrontProps = {
    creditCard: {
        ownerName: string
        number: string
        expirationDate: Date
    }
}

export function CreditCardFront({ creditCard = {} as any }: CreditCardFrontProps) {

    function formatDate(date: Date) {
        const formattedYear = date.getFullYear().toString().slice(2, 4)
        const normalizedMonth = String(date.getMonth() + 1)
        const formattedMonth = normalizedMonth.length > 1 ? normalizedMonth : `0${normalizedMonth}`
        return `${formattedMonth}/${formattedYear}`
    }

    function formatCreditCardNumber(creditCardNumber: string): string[] {
        if (!creditCardNumber) {
            return ['0000', '0000', '0000', '0000']
        }

        const numberOfZerosToAdd = 16 - creditCardNumber.length

        let normalizedCreditCardNumber = creditCardNumber

        if (numberOfZerosToAdd > 1) {
            normalizedCreditCardNumber = creditCardNumber + '0'.repeat(numberOfZerosToAdd)
        }

        const dividedCreditCardNumbers = creditCardNumber.match(/.{4}/g)!.map(fourDigits => fourDigits)

        return dividedCreditCardNumbers
    }

    return (
        <Container>
            <CirclesContainer>
                <Circle />
                <SmallCircle />
            </CirclesContainer>

            <CardNumberContainer>
                {formatCreditCardNumber(creditCard?.number).map((fourDigitPart, index) => {
                    return (
                        <CardNumberFourDigits key={index}>{fourDigitPart}</CardNumberFourDigits>

                    )
                })}
            </CardNumberContainer>

            <CardFooter>
                <strong>{creditCard.ownerName ? creditCard.ownerName : 'Your name'}</strong>
                <strong>{creditCard.expirationDate ? formatDate(creditCard.expirationDate) : '00/00'}</strong>
            </CardFooter>
        </Container>
    )
}