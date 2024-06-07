import { Container, ContainerIcons } from "./styles";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <Container className="page">
            <span className="title" data-aos="zoom-in">
                {"<Natália Almeida />"}
            </span>
            <div className="subTitle">
                <Typewriter
                    words={[
                        "Olá 👋",
                        "Seja bem vindo ao meu portfólio! Eu sou Desenvolvedora Front-end",
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
            <ContainerIcons data-aos="zoom-in">
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
            </ContainerIcons>
        </Container>
    );
};

export default Home;
