import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
`

export const Aside = styled.aside`
    width: 483px;
    height: 100vh;

    display: flex;
    align-items: center;

    background-color: #21092F;

    > div {
        width: 541px;
        margin-left: 10.25rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 36px;
    }
`

export const MainContent = styled.div`
    display: inline;
    width: 100%;
    height: 100vh;
`