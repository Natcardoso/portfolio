import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .title {
        font-size: 13rem;
        font-weight: 600;
        color: rgba(106, 60, 144, 0.46);
    }

    .subTitle {
        font-size: 4rem;
        color: #fff;
        position: absolute;
        bottom: 24rem;
        background: transparent;
    }
`;
