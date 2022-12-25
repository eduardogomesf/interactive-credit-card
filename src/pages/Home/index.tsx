import { useState } from "react";
import { CreditCardBack } from "../../components/CreditCardBack";
import { CreditCardFront } from "../../components/CreditCardFront";
import { Form } from "../../components/Form";
import { Aside, HomeContainer, MainContent } from "./styles";

type CreditCard = {
    ownerName: string
    number: string
    expirationDate: Date
    cvc: string
}

export function Home() {
    const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard)

    return (
        <HomeContainer>
            <Aside>
                <div>
                    <CreditCardFront
                        creditCard={creditCard}
                    />
                    <CreditCardBack cvc={creditCard.cvc} />
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