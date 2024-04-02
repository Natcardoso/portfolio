import React from "react";
import { Container, TitlePage } from "./styles";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <Container className="page" data-aos="fade-up" data-aos-delay="500">
            <TitlePage>Contact</TitlePage>
            <div className="socialMedia">
                <a href="https://github.com/Natcardoso">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nat%C3%A1lia-almeida-87890620b/">
                    <FaLinkedinIn />
                </a>
                <a href="mailto:cmp.1a.nataliaalmeidacardoso2001@gmail.com">
                    <MdEmail />
                </a>
            </div>
        </Container>
    );
};
export default Contact;
