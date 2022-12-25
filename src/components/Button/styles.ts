import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 53px;

    border-radius: 5px;

    background-color: #21092F;
    color: #FFF;

    font-weight: 500px;
    font-size: 18px;
    line-height: 23px;

    cursor: pointer;

    &:hover {
        filter: brightness(1.15);
        transition: filter 0.5ms;
    }
`