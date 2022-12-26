import { CreditCardProvider } from "./contexts/CreditCardContext";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <CreditCardProvider>
      <Home />
      <GlobalStyles />
    </CreditCardProvider>
  )
}

