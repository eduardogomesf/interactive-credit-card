export function getExpirationDate(date: Date) {
    const formattedYear = date.getFullYear().toString().slice(2, 4)
    const normalizedMonth = String(date.getMonth() + 1)
    const formattedMonth = normalizedMonth.length > 1 ? normalizedMonth : `0${normalizedMonth}`
    return `${formattedMonth}/${formattedYear}`
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

    const dividedCreditCardNumbers = creditCardNumber.match(/.{4}/g)!.map(fourDigits => fourDigits)

    return dividedCreditCardNumbers
}