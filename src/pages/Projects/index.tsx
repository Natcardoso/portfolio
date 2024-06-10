import { useState } from "react";
import { Container, ContainerCard, ContainerFooter, Content } from "./styles";
import creditCardImg from "../../assets/imgProjects/creditCardImg.png";
import formMultStepsImg from "../../assets/imgProjects/multEtapasImg.png";
import netflixImg from "../../assets/imgProjects/netflix.png";
import chatWebImg from "../../assets/imgProjects/chatImg.png";
import shopImg from "../../assets/imgProjects/shopImg.png";
import todoImg from "../../assets/imgProjects/todoImg.png";

import creditCardPc from "../../assets/imgProjects/creditCard-pc.svg";
import formMultStepsPc from "../../assets/imgProjects/formMultSteps-pc.svg";
import netflixPc from "../../assets/imgProjects/netflix-pc.svg";
import chatWebPc from "../../assets/imgProjects/chatWeb-pc.svg";
import shopPc from "../../assets/imgProjects/shop-pc.svg";
import todoPc from "../../assets/imgProjects/todo-pc.svg";

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { TitlePage } from "../PageInitial/styles";
import Details from "./Details";

export type ProjectsData = {
    name: string;
    img: string;
    imgPc: string;
    description: string;
    skills: string[];
    linkGithub: string;
    linkDeploy: string;
};

type Props = {
    data: ProjectsData;
};

const Card = ({ data }: Props) => {
    const [onMouse, setOnMouse] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <ContainerCard
                onMouseEnter={() => setOnMouse(true)}
                onMouseLeave={() => setOnMouse(false)}
                data-aos="flip-left"
            >
                <div className="background">
                    <span>{data.name}</span>
                    {onMouse && (
                        <button
                            onClick={() => setShowDetails(true)}
                            type="button"
                        >
                            Clique para ver mais
                        </button>
                    )}
                </div>
                <div className="divImg">
                    <img src={data.img} />
                </div>
            </ContainerCard>
            {showDetails && (
                <Details setShowDetails={setShowDetails} data={data} />
            )}
        </>
    );
};

const Projects = () => {
    const projects: ProjectsData[] = [
        {
            name: "Shopcart - Loja de Iphones",
            img: shopImg,
            imgPc: shopPc,
            description:
                "O projeto é uma loja virtual especializada na venda de iPhones, desenvolvida para oferecer uma experiência de compra intuitiva e eficiente para os usuários. Este projeto incorpora funcionalidades essenciais como pesquisa de produtos, adição de itens ao carrinho, favoritos e descrições detalhadas dos produtos. ",
            skills: [
                "React",
                "Typescript",
                "Styled-Components",
                "Git",
                "Github",
            ],
            linkGithub: "https://github.com/Natcardoso/shopping-cart",
            linkDeploy: "https://natcardoso.github.io/shopping-cart/",
        },
        {
            name: "Chat Web",
            img: chatWebImg,
            imgPc: chatWebPc,
            description:
                "O projeto é uma aplicação de chat online desenvolvida para fornecer uma plataforma de comunicação eficiente e moderna. Este projeto incorpora funcionalidades essenciais para uma experiência de chat completa, incluindo login, autenticação de usuário, adição de contatos, envio de mensagens com suporte a emojis, personalização de perfil e pesquisa de contatos.",
            skills: [
                "ReactJS",
                "Styled-Components",
                "Typescript",
                "Firebase",
                "Git",
                "Github",
                "React icons",
                "Emoji Picker React",
                "Uuid",
            ],
            linkGithub: "https://github.com/Natcardoso/chat-web",
            linkDeploy: "https://natcardoso.github.io/chat-web/",
        },
        {
            name: "Clone UI - Netflix",
            img: netflixImg,
            imgPc: netflixPc,
            description:
                "O projeto é uma aplicação web desenvolvida para replicar a experiência de uso da popular plataforma de streaming Netflix. Este projeto incorpora funcionalidades-chave como animações, integração com APIs, players de filmes e descrições detalhadas dos filmes, proporcionando uma experiência imersiva e envolvente para os usuários. O objetivo foi criar uma interface intuitiva e visualmente atraente, similar à da Netflix.",
            skills: [
                "React",
                "Typescript",
                "Styled-Components",
                "React Icons",
                "React Player",
                "React Router Dom",
                "Api-The movie database Api",
            ],
            linkGithub: "https://github.com/Natcardoso/ui-clone-netflix",
            linkDeploy: "https://natcardoso.github.io/ui-clone-netflix/",
        },
        {
            name: "Formulário Multi Etapas",
            img: formMultStepsImg,
            imgPc: formMultStepsPc,
            description:
                "O projeto é uma aplicação web desenvolvida para facilitar a coleta de informações através de um processo de preenchimento de formulários dividido em múltiplas etapas. Este projeto incorpora funcionalidades essenciais como navegação entre etapas, interações visuais aprimoradas e validação de campos.",
            skills: [
                "React",
                "Styled-Components",
                "Typescript",
                "Vite",
                "Git",
                "Github",
            ],
            linkGithub: "https://github.com/Natcardoso/form-mult-step",
            linkDeploy: "https://natcardoso.github.io/form-mult-step/",
        },
        {
            name: "Todo List",
            img: todoImg,
            imgPc: todoPc,
            description:
                "O projeto é uma aplicação web desenvolvida para ajudar os usuários a organizar e gerenciar suas atividades diárias de maneira eficiente. A aplicação oferece funcionalidades essenciais como remoção e conclusão de tarefas, além de exibir a data atual para cada tarefa.",
            skills: ["React", "Typescript", "Styled-Components"],
            linkGithub: "https://github.com/Natcardoso/todo_list",
            linkDeploy: "https://natcardoso.github.io/todo_list/",
        },
        {
            name: "Formulário para Cartão de Crédito",
            img: creditCardImg,
            imgPc: creditCardPc,
            description:
                "O projeto é uma aplicação web desenvolvida para facilitar a inserção de informações de cartão de crédito de forma segura e agradável. Este projeto incorpora funcionalidades modernas como modos dark/light, interações visuais aprimoradas e animações 3D.",
            skills: ["React", "Typescript", "Styled-Components"],
            linkGithub: "https://github.com/Natcardoso/form-credit-card",
            linkDeploy: "https://natcardoso.github.io/form-credit-card/",
        },
    ];

    return (
        <Container>
            <TitlePage data-aos="fade-up">Projetos</TitlePage>
            <Content>
                {projects.map((data, index) => (
                    <Card key={index} data={data} />
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
