export function getExpirationDate(month: string, year: string): string {
    const normalizedMonth = month ? month : '00'
    const normalizedYear = year ? year : '00'
    return `${normalizedMonth}/${normalizedYear}`
}

export function getCreditCardNumberDividedByGroupsOfFourDigits(creditCardNumber: string): string[] {
    if (!creditCardNumber) {
        return ['0000', '0000', '0000', '0000']
    }

    const numberOfZerosToAdd = 16 - creditCardNumber.length

    let normalizedCreditCardNumber = creditCardNumber

    if (numberOfZerosToAdd > 1) {
        normalizedCreditCardNumber = creditCardNumber + '0'.repeat(numberOfZerosToAdd)
    }

    const dividedCreditCardNumbers = normalizedCreditCardNumber.match(/.{4}/g)!.map(fourDigits => fourDigits)

    return dividedCreditCardNumbers
}