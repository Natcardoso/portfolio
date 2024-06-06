import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding-top: 4rem;
    gap: 2rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
`;

const animationButton = keyframes`
    from {
        opacity: 0;
    }
`;

export const ContainerCard = styled.div`
    border-radius: 10px;
    overflow: hidden;
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.4);
        z-index: 2;
    }

    .divImg {
        width: 350px;
        height: 200px;

        img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .background {
        background: rgba(0, 0, 0, 0.75);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            background: transparent;
            font-size: 1.3rem;
            font-weight: 600;
            text-align: center;
            width: 50%;
        }

        a {
            background: transparent;
            transition: all 0.3s ease;

            &:hover {
                filter: brightness(50%);
            }
        }

        button {
            cursor: pointer;
            margin-top: 0.5rem;
            border-radius: 50px;
            background: var(--purple);
            padding: 4px 16px;
            border: transparent;
            color: var(--white);
            animation: ${animationButton} 0.5s ease;
            font-weight: 500;
        }
    }
`;

//details
export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
        background-color: transparent;
        width: 40%;
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: var(--white);
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
            }
        }

        button {
            font-size: 1.2rem;
            cursor: pointer;
            background: transparent;
            color: var(--purple);
            border: 3px solid var(--purple);
            border-radius: 50rem;
            padding: 0.2rem 1.2rem;

            :hover {
                color: red;
            }
        }
    }
`;

export const ContainerFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    padding: 8px;
    background-color: var(--background);
    font-size: 12px;

    div,
    span,
    svg,
    strong,
    a {
        background-color: transparent;
    }

    div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact {
        position: absolute;
        right: 8px;

        a {
            font-size: 2rem;
            color: var(--white);
            transition: all 0.2s ease;
            margin-left: 1rem;

            :hover {
                color: var(--purple);
            }
        }
    }
`;
