import React from "react";
import { Container, ContainerIcons } from "./styles";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <Container className="page">
            <i className="title" data-aos="fade-up">
                {"<Natália Almeida />"}
            </i>
            <div className="subTitle">
                Olá, Seja bem vindo ao meu portfólio!! eu sou Desenvolvedora
                Front-end
            </div>
            <ContainerIcons>
                <a href="https://github.com/Natcardoso">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nat%C3%A1lia-almeida-87890620b/">
                    <FaLinkedinIn />
                </a>
                <a href="mailto:cmp.1a.nataliaalmeidacardoso2001@gmail.com">
                    <MdEmail />
                </a>
            </ContainerIcons>
        </Container>
    );
};

export default Home;
