import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;

    margin-bottom: 40px;
`

export const InlineInputsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
    div {
        width: 170px;

        div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`