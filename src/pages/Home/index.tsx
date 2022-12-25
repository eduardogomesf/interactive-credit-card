import { CreditCardBack } from "../../components/CreditCardBack";
import { CreditCardFront } from "../../components/CreditCardFront";
import { Aside, HomeContainer, MainContent } from "./styles";

const mockCreditCard = {
    ownerName: 'Eduardo Gomes',
    number: '5162929645842495',
    expirationDate: new Date('01-06-2022'),
    cvc: '145'
}

export function Home() {
    return (
        <HomeContainer>
            <Aside>
                <div>
                    <CreditCardFront
                        creditCard={mockCreditCard}
                    />
                    <CreditCardBack cvc={mockCreditCard.cvc} />
                </div>
            </Aside>
            <MainContent>
            </MainContent>
        </HomeContainer>
    )
}