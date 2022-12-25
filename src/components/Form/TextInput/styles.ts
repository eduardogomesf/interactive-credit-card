import styled from "styled-components";

type ContainerProps = {
    hasError: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    
    input {
        width: 100%;
        padding: 12px 16px;
        
        border-radius: 8px;
        border: 1px solid ${({ hasError }) => hasError ? '#FF5050' : '#DFDEE0'};

        background-color: #FFF;
        color: #21092F;

        font-weight: 500;
        font-size: 18px;
        line-height: 23px;

        outline: none;

        &::placeholder {
            opacity: 0.25;
            mix-blend-mode: normal;
        }

        &:focus {
            border-color: #21092F;
        }
    }
`

export const Error = styled.span`
    margin-top: 9px;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #FF5050;
`