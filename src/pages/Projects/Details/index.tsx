import React from "react";
import { Container, ContainerContent, TitlePage } from "./styles";
// import netflix from "../../../assets/netflix.mp4";
import netflix from "../../../assets/netflix-front.png";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Details = () => {
    return (
        <Container className="page">
            <TitlePage data-aos="fade-up">Nome do projeto</TitlePage>

            <ContainerContent>
                <Link to="/" className="back">
                    <FaArrowLeftLong />
                    Voltar
                </Link>
                {/* <video width="640" height="360" autoPlay muted>
                    <source src={netflix} type="video/mp4"></source>
                    Seu navegador não suporta o elemento de vídeo.
                </video> */}
                <img src={netflix} />
                <div className="description" data-aos="zoom-in-left">
                    <span>
                        t is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </span>
                    <div className="skills">
                        <button>React</button>
                        <button>Styled Component</button>
                        <button>Firebase</button>
                    </div>
                    <div className="host">
                        <button>
                            <FaGithub />
                            GitHub
                        </button>
                        <button>
                            <BsArrowUpRightCircleFill />
                            Visitar site
                        </button>
                    </div>
                </div>
            </ContainerContent>
        </Container>
    );
};

export default Details;
