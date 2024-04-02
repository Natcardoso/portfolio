import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 10rem;
    align-items: center;
    height: 100vh;
    gap: 3rem;

    .title {
        margin-top: 2rem;
        z-index: 1;
        background: transparent;
        color: #fff;
        font-size: 3rem;
        font-weight: 600;
    }
`;

export const TitlePage = styled.div`
    position: absolute;
    top: 0;
    color: rgba(106, 60, 144, 0.46);
    font-weight: 600;
    font-size: 15rem;
`;

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
        color: #fff;
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
            color: #6a3c90;
            border: 3px solid #6a3c90;
            border-radius: 50rem;
            padding: 0.2rem 1.2rem;
        }
    }
`;
