import React from "react";
import { Container, ContainerContent, Title, Wrapper } from "./styles";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ProjectsData } from "..";
import { Typewriter } from "react-simple-typewriter";

type Props = {
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
    data: ProjectsData;
};

const Details = ({ setShowDetails, data }: Props) => {
    return (
        <Wrapper>
            <Container>
                <ContainerContent>
                    <div className="back" onClick={() => setShowDetails(false)}>
                        <FaArrowLeftLong />
                        Voltar
                    </div>
                    <div className="divImg">
                        <img
                            src={data.imgPc}
                            data-aos="zoom-in-right"
                            loading="lazy"
                        />
                    </div>

                    <div className="description" data-aos="zoom-in-left">
                        <Title>
                            <Typewriter
                                words={[data.name]}
                                loop={1}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </Title>
                        <span>{data.description}</span>
                        <div className="skills">
                            {data.skills.map((skill, index) => (
                                <button key={index}>{skill}</button>
                            ))}
                        </div>
                        <div className="host">
                            <a target="_blank" href={data.linkGithub}>
                                <FaGithub />
                                GitHub
                            </a>
                            <a target="_blank" href={data.linkDeploy}>
                                <BsArrowUpRightCircleFill />
                                Visitar site
                            </a>
                        </div>
                    </div>
                </ContainerContent>
            </Container>
        </Wrapper>
    );
};

export default Details;
