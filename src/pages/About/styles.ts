import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    z-index: 1;

    .photo {
        img {
            object-fit: cover;
            width: 310px;
            height: 310px;
            border-radius: 100%;
            border: 4px solid var(--purple);
        }
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 48%;
    background: border-box;
    text-align: center;

    .title {
        font-size: 2rem;
        color: var(--white);
        font-weight: 600;
        background: transparent;
    }

    span {
        color: var(--gray);
        font-size: 1.2rem;
    }
`;

export const ContainerSkills = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin-top: 1rem;

    .title {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        color: var(--purple);
        font-weight: 600;
        border-bottom: 3px solid var(--purple);
        width: 100%;
        padding-bottom: 0.5rem;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    gap: 1rem;

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: -webkit-fill-available;
        height: -webkit-fill-available;

        img {
            width: 80px;
            height: 80px;
            border-radius: 10px;
            overflow: hidden;
        }

        span {
            font-size: 0.8rem;
            text-align: center;
            color: #fff;
        }
    }
`;
