import styled from "styled-components";

export const Container = styled.div`
    width: 447px;
    height: 245px;
    padding: 32px 28px;

    border-radius: 10px;

    background-image: url(credit-card-front.png);
`

export const CirclesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Circle = styled.div`
    width: 47px;
    height: 47px;

    border-radius: 50%;

    background-color: #fff;
`

export const SmallCircle = styled.div`
    width: 21px;
    height: 21px;

    border-radius: 50%;
    border: 1px solid #fff;

    background-color: transparent;
`

export const CardNumberContainer = styled.strong`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 64px;
    width: 100%;
`

export const CardNumberFourDigits = styled.span`
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 3.5px;

    color: #fff;
`

export const CardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 26px;

    strong {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;

        color: #fff;
    }
`

