import { Card, Container, ContainerCard } from "./styles";
import UiIcon from "../../assets/ui-design.svg";
import DevIcon from "../../assets/dev.svg";
import MotionIcon from "../../assets/motion.svg";
import { TitlePage } from "../PageInitial/styles";

const Services = () => {
    const dataCard = [
        {
            img: UiIcon,
            title: "UI Design",
            description:
                "Desenho interfaces de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
            img: DevIcon,
            title: "Desenvolvimento",
            description:
                "Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce.",
        },
        {
            img: MotionIcon,
            title: "Motion",
            description:
                "Crio interações que transmitem sensação de modernidade, além de chamarem a atenção do usuário.",
        },
    ];

    return (
        <Container className="page" data-aos="fade-up" data-aos-delay="500">
            <TitlePage>Serviços</TitlePage>
            <ContainerCard>
                {dataCard.map((item, index) => (
                    <Card key={index} data-aos="flip-left">
                        <div className="img">
                            <img src={item.img} />
                        </div>
                        <div className="text">
                            <span>{item.title}</span>
                            <span>{item.description}</span>
                        </div>
                    </Card>
                ))}
            </ContainerCard>
        </Container>
    );
};
export default Services;
