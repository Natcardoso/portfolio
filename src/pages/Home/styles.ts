import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 4;

    .title {
        font-size: 10rem;
        font-weight: 600;
        color: var(--title);
        pointer-events: none;
    }

    .subTitle {
        font-size: 2.5rem;
        color: var(--white);
        position: absolute;
        bottom: 24rem;
        background: transparent;
        font-weight: 600;
        text-align: center;

        span {
            background: transparent;
        }
    }
`;

export const ContainerHeader = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    color: var(--white);
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    padding: 1rem 3rem;
    z-index: 2;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 10%,
        transparent
    );
    width: 100%;

    span {
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;

        :hover {
            color: var(--purple);
        }
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    bottom: 18rem;
    background: border-box;
    margin-top: 4rem;

    a {
        color: #fff;
        font-size: 4rem;
        transition: all 0.5 ease;
    }

    a,
    svg {
        background: transparent;
        transition: all 0.3s ease;

        :hover {
            color: var(--purple);
        }
    }
`;
