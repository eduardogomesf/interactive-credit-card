import { useContext } from "react";
import { CreditCardContext } from "../contexts/CreditCardContext";

export function useCreditCard() {
    return useContext(CreditCardContext)
}