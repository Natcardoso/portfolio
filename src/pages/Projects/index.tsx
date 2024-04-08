import React, { useState } from "react";
import {
    Container,
    ContainerCard,
    ContainerFooter,
    Content,
    TitlePage,
} from "./styles";
import netflixImg from "../../assets/netflix.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export type ProjectsProps = {
    name: string;
    img: string;
    description: string;
    skills: string;
    linkGithub: string;
    linkDeploy: string;
};

const Card = () => {
    const [onMouse, setOnMouse] = useState(false);
    return (
        <ContainerCard
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
        >
            <div className="background">
                <span>Clone UI - Netflix</span>
                {onMouse && (
                    <Link to="/details">
                        <button type="button">Clique para ver mais</button>
                    </Link>
                )}
            </div>
            <img src={netflixImg} data-aos="zoom-in-right" />
        </ContainerCard>
    );
};
const Projects = () => {
    const projects: ProjectsProps[] = [
        {
            name: "Clone UI - Netflix",
            img: "",
            description: "",
            skills: "",
            linkGithub: "",
            linkDeploy: "",
        },
        {
            name: "ChatWeb",
            img: "",
            description: "",
            skills: "",
            linkGithub: "",
            linkDeploy: "",
        },
        {
            name: "ShopCart",
            img: "",
            description: "",
            skills: "",
            linkGithub: "",
            linkDeploy: "",
        },
        {
            name: "ShopCart",
            img: "",
            description: "",
            skills: "",
            linkGithub: "",
            linkDeploy: "",
        },
        {
            name: "ShopCart",
            img: "",
            description: "",
            skills: "",
            linkGithub: "",
            linkDeploy: "",
        },
        {
            name: "ShopCart",
            img: "",
            description: "",
            skills: "",
            linkGithub: "",
            linkDeploy: "",
        },
    ];

    return (
        <Container className="page">
            <TitlePage data-aos="fade-up">Projetos</TitlePage>
            <Content>
                {projects.map((data, index) => (
                    <Card key={index} />
                ))}
            </Content>
            <ContainerFooter>
                <div>
                    <span>
                        feito com ♥ por <strong>Natália Almeida</strong>
                    </span>
                    <span>© 2024</span>
                </div>

                <div className="contact">
                    <a target="_blank" href="https://github.com/Natcardoso">
                        <FaGithub />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/nat%C3%A1lia-almeida-87890620b/"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        target="_blank"
                        href="mailto:cmp.1a.nataliaalmeidacardoso2001@gmail.com"
                    >
                        <MdEmail />
                    </a>
                </div>
            </ContainerFooter>
        </Container>
    );
};
export default Projects;
