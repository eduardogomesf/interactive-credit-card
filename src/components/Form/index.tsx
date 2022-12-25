import { FormEvent, useState } from "react";
import { Button } from "../Button";
import { Label } from "./Label";
import { Container, InlineInputsContainer, InputsContainer } from "./styles";
import { TextInput } from "./TextInput";

export function Form() {
    const [cardholder, setCardholder] = useState('')
    const [cardholderHasError, setCardholderHasError] = useState(false)

    const [cardNumber, setCardNumber] = useState('')
    const [cardNumberHasError, setCardNumberHasError] = useState(false)

    const [expirationMonth, setExpirationMonth] = useState('')
    const [expirationMonthHasError, setExpirationMonthHasError] = useState(false)

    const [expirationYear, setExpirationYear] = useState('')
    const [expirationYearHasError, setExpirationYearHasError] = useState(false)

    const [cvc, setCvc] = useState('')
    const [cvcHasError, setCVCHasError] = useState(false)

    function handleClick(event: FormEvent) {
        event.preventDefault()

        console.log({
            cardholder,
            cardNumber,
            expirationMonth,
            expirationYear,
            cvc
        })
    }

    return (
        <Container onSubmit={handleClick}
        >
            <InputsContainer>
                <TextInput
                    value={cardholder}
                    setValue={setCardholder}
                    label='Cardholder name'
                    placeholder='e.g. Jane Appleseed'
                    errorMessage='Invalid name'
                    error={cardholderHasError}
                    clearError={() => setCardholderHasError(false)}
                />
                <TextInput
                    value={cardNumber}
                    setValue={setCardNumber}
                    label='Card Number'
                    placeholder='e.g. 1234 5678 9123 0000'
                    errorMessage='Wrong format, numbers only'
                    error={cardNumberHasError}
                    clearError={() => setCardNumberHasError(false)}
                />

                <InlineInputsContainer>
                    <div>
                        <Label title="EXP. Date (MM/YY)" />
                        <div>
                            <TextInput
                                value={expirationMonth}
                                setValue={setExpirationMonth}
                                placeholder='MM'
                                errorMessage=''
                                error={expirationMonthHasError}
                                clearError={() => setExpirationMonthHasError(false)}
                            />
                            <TextInput
                                value={expirationYear}
                                setValue={setExpirationYear}
                                placeholder='YY'
                                errorMessage=''
                                error={expirationYearHasError}
                                clearError={() => setExpirationYearHasError(false)}
                            />
                        </div>
                    </div>

                    <TextInput
                        value={cvc}
                        setValue={setCvc}
                        label='CVC'
                        placeholder='e.g. 123'
                        errorMessage='Invalid CVC'
                        error={cvcHasError}
                        clearError={() => setCVCHasError(false)}
                    />
                </InlineInputsContainer>
            </InputsContainer>

            <Button
                type='submit'
                isLoading={false}
            >
                Confirm
            </Button>
        </Container>
    )
}