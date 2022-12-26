import { useState } from "react";
import { CreditCardBack } from "../../components/CreditCardBack";
import { CreditCardFront } from "../../components/CreditCardFront";
import { Form } from "../../components/Form";
import { Aside, HomeContainer, MainContent } from "./styles";

export type CreditCard = {
    cardholder: string
    number: string
    expirationDate: Date
    cvc: string
}

export function Home() {
    return (
        <HomeContainer>
            <Aside>
                <div>
                    <CreditCardFront />
                    <CreditCardBack />
                </div>
            </Aside>
            <MainContent>
                <div>
                    <Form />
                </div>
            </MainContent>
        </HomeContainer>
    )
}