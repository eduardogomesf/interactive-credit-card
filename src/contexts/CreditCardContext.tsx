import { createContext, ReactNode, useState } from "react"

type CreditCardContextData = {
    cardholder: string
    cardNumber: string
    expirationMonth: string
    expirationYear: string
    cvc: string
    setCardholder: (value: string) => void
    setCardNumber: (value: string) => void
    setCvc: (value: string) => void
    setExpirationMonth: (value: string) => void
    setExpirationYear: (value: string) => void
}

export const CreditCardContext = createContext({} as CreditCardContextData)

type CreditCardProviderProps = {
    children: ReactNode
}

export function CreditCardProvider({ children }: CreditCardProviderProps) {
    const [cardholder, setCardholder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expirationMonth, setExpirationMonth] = useState('')
    const [expirationYear, setExpirationYear] = useState('')
    const [cvc, setCvc] = useState('')

    return (
        <CreditCardContext.Provider value={{
            cardholder: cardholder,
            cardNumber: cardNumber,
            cvc: cvc,
            expirationMonth: expirationMonth,
            expirationYear: expirationYear,
            setCardholder: setCardholder,
            setCvc: setCvc,
            setExpirationMonth: setExpirationMonth,
            setExpirationYear: setExpirationYear,
            setCardNumber: setCardNumber,
        }}>
            {children}
        </CreditCardContext.Provider>
    )
}