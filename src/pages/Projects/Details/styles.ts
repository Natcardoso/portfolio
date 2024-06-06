import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
    from {
        opacity: 0;
        transform: scale(0.8);
    }
`;

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: #00000085;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 80%;
    height: 85%;
    border-radius: 16px;
    overflow: hidden;
    background: var(--background);
    animation: ${animationModal} 0.5s ease-in;
`;

export const Title = styled.span`
    color: var(--purple);
    font-weight: 600;
    font-size: 4rem;
    line-height: 1;
    text-align: center;

    span {
        background: transparent !important;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    background: var(--background);

    .back {
        position: absolute;
        top: 3rem;
        left: 3rem;
        color: var(--white);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }

    .divImg {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem;

        img {
            width: 100%;
            background-color: transparent;
        }
    }

    .description {
        background: var(--background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        color: var(--gray);
        font-size: 1.2rem;
        padding: 3rem;
        width: 90%;
        text-align: center;

        span {
            background: var(--background);
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            background: var(--background);

            button {
                font-size: 1rem;
                background: transparent;
                color: var(--purple);
                border: 2px solid var(--purple);
                border-radius: 50rem;
                padding: 0.2rem 1.2rem;
                font-weight: 600;
            }
        }

        .host {
            display: flex;
            gap: 8px;
            font-size: 1rem;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                width: 100%;
                background: var(--purple);
                color: var(--white);
                transition: all 0.2s ease;
                border-radius: 50rem;
                padding: 6px;
                text-decoration: none;
                font-weight: 600;

                svg {
                    font-size: 1.5rem;
                    background: transparent;
                }

                &:hover {
                    filter: brightness(50%);
                }
            }
        }
    }
`;
