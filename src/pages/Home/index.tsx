import { CreditCardFront } from "../../components/CreditCardFront";
import { Aside, HomeContainer, MainContent } from "./styles";

const mockCreditCard = {
    ownerName: 'Eduardo Gomes',
    number: '5162929645842495',
    expirationDate: new Date('01-06-2022')
}

export function Home() {
    return (
        <HomeContainer>
            <Aside>
                <div>
                    <CreditCardFront
                        creditCard={mockCreditCard}
                    />
                </div>
            </Aside>
            <MainContent>
            </MainContent>
        </HomeContainer>
    )
}