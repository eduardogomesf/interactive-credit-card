import { Container } from "./styles";

type LabelProps = {
    title: string
}

export function Label({ title }: LabelProps) {
    return (
        <Container>
            {title}
        </Container>
    )
}