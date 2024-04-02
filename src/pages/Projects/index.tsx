import React from "react";
import { Container, ContainerContent, TitlePage } from "./styles";
import netflixImg from "../../assets/netflix-front.png";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { ProjectsProps } from "../../App";

type Props = {
    project: ProjectsProps;
};

const Projects = ({ project }: Props) => {
    return (
        <Container className="page">
            <TitlePage data-aos="fade-up">Projetos</TitlePage>
            <span className="title">{project.name}</span>
            <ContainerContent>
                <img src={netflixImg} data-aos="zoom-in-right" />
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
export default Projects;
