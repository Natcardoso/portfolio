import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    gap: 3rem;

    .title {
        margin-top: 2rem;
        z-index: 1;
        background: transparent;
        color: #fff;
        font-size: 3rem;
        font-weight: 600;
    }

    .socialMedia {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 2rem;
        bottom: 18rem;
        background: border-box;

        a {
            color: #fff;
            font-size: 6rem;
            transition: all 0.5 ease;
        }

        a,
        svg {
            background: transparent;
        }
    }
`;

export const TitlePage = styled.div`
    color: rgba(106, 60, 144, 0.46);
    font-weight: 600;
    font-size: 15rem;
`;
