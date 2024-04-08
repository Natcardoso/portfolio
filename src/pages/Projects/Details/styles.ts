import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;

    .title {
        margin-top: 2rem;
        z-index: 1;
        background: transparent;
        color: var(--white);
        font-size: 3rem;
        font-weight: 600;
    }
`;

export const TitlePage = styled.div`
    color: var(--purple);
    font-weight: 600;
    font-size: 6rem;
`;

export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .back {
        position: absolute;
        top: 2rem;
        left: 2rem;
        color: var(--white);
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }

    img {
        background-color: transparent;
        width: 50%;
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: var(--gray);
        width: 30%;
        font-size: 1.5rem;

        .skills {
            display: flex;
            gap: 8px;
        }

        .host {
            display: flex;
            gap: 8px;

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                width: 100%;
                background: var(--purple);
                color: var(--white);
                transition: all 0.2s ease;

                svg {
                    font-size: 1.5rem;
                    background: transparent;
                }

                &:hover {
                    filter: brightness(50%);
                }
            }
        }

        button {
            font-size: 1.2rem;
            cursor: pointer;
            background: transparent;
            color: var(--purple);
            border: 2px solid var(--purple);
            border-radius: 50rem;
            padding: 0.2rem 1.2rem;
        }
    }
`;
