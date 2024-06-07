import {
    Container,
    ContainerCard,
    ContainerSkills,
    Description,
    Text,
} from "./styles";
import IconReact from "../../assets/react.svg";
import Javascript from "../../assets/javascript.svg";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import Styled from "../../assets/styledcomponents.svg";
import TypeScript from "../../assets/typeScript.svg";
import Figma from "../../assets/figma.svg";
import Firebase from "../../assets/firebase.svg";
import Storybook from "../../assets/storybook.svg";
import Vite from "../../assets/vite.svg";
import Git from "../../assets/git.svg";
import TailwindCss from "../../assets/tailwindCss.svg";
import { TitlePage } from "../PageInitial/styles";

const About = () => {
    const skills = [
        {
            name: "React",
            svg: IconReact,
        },
        {
            name: "Javascript",
            svg: Javascript,
        },
        {
            name: "HTML",
            svg: HTML,
        },
        {
            name: "CSS",
            svg: CSS,
        },
        {
            name: "Styled Components",
            svg: Styled,
        },
        {
            name: "TypeScript",
            svg: TypeScript,
        },
        {
            name: "Figma",
            svg: Figma,
        },
        {
            name: "Firebase",
            svg: Firebase,
        },
        {
            name: "Storybook",
            svg: Storybook,
        },
        {
            name: "Vite",
            svg: Vite,
        },
        {
            name: "Git",
            svg: Git,
        },

        {
            name: "Tailwind css",
            svg: TailwindCss,
        },
    ];

    return (
        <Container className="page">
            <TitlePage data-aos="fade-up">Sobre mim</TitlePage>
            <Description>
                <div className="photo" data-aos="zoom-in-right">
                    <img src="https://avatars.githubusercontent.com/u/88684378?v=4" />
                </div>
                <Text data-aos="zoom-in-left">
                    <span className="title">
                        “Uma verdadeira amante da programação web”
                    </span>
                    <span>
                        Meu chamo <strong>Natália Almeida</strong> e sou formada
                        em <strong>Análise e Desenvolvimento</strong> de
                        Sistemas. Escolhi a programação web como minha área de
                        atuação porque me encantei por essa área. No momento,
                        trabalho como <strong>desenvolvedora Front-end</strong>,
                        onde faço uso das minhas habilidades em tecnologias como{" "}
                        <strong>
                            React, TypeScript, Figma, Git, entre outras
                        </strong>
                        , para criar projetos que são verdadeiras expressões do
                        meu entusiasmo e dedicação.
                    </span>
                </Text>
            </Description>
            <ContainerSkills>
                <span className="title" data-aos="zoom-in-down">
                    MINHAS SKILLS
                </span>
                <ContainerCard data-aos="zoom-in">
                    {skills.map((skill, index) => (
                        <div className="card" key={index}>
                            <img src={skill.svg} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </ContainerCard>
            </ContainerSkills>
        </Container>
    );
};
export default About;
