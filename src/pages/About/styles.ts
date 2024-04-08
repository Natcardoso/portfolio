import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 12rem;
    align-items: center;
    height: 100vh;
    gap: 4rem;
`;

export const TitlePage = styled.div`
    position: absolute;
    top: 1rem;
    color: var(--title);
    font-weight: 600;
    font-size: 14rem;
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    z-index: 1;
    background: border-box;
    width: 80%;

    .photo {
        background: border-box;

        img {
            object-fit: cover;
            width: 320px;
            height: 320px;
            border-radius: 100%;
            border: 4px solid var(--purple);
        }
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    width: 50%;
    background: border-box;

    .title {
        text-align: center;
        font-size: 2.2rem;
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

    .title {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        color: var(--purple);
        font-weight: 600;
        border-bottom: 3px solid var(--purple);
        width: 100%;
        padding-bottom: 1rem;
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
            text-align: center;
            color: #fff;
        }
    }
`;
