import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 2rem;
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const animationImg = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--background);
    width: 350px;
    gap: 16px;
    padding: 1.5rem;
    border-radius: 10px;

    .img {
        text-align: center;
        padding: 1rem;
        border-radius: 10px;

        img {
            animation: ${animationImg} 2s ease-in-out infinite;
            height: 280px;
            width: 260px;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        background: var(--background);

        span {
            background: var(--background);
        }

        span:first-child {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--white);
        }

        span:last-child {
            font-size: 1rem;
            color: var(--gray);
        }
    }
`;
