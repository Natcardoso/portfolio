import styled from "styled-components";
import About from "./pages/About";
import Home from "./pages/Apresentation/index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";

const ContainerPage = styled.div`
    /* scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;

    .page {
        scroll-snap-align: start;
    } */
`;

export type ProjectsProps = {
    name: string;
    img: string;
    description: string;
    skills: string;
    linkGithub: string;
    linkDeploy: string;
};

function App() {
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
    ];
    // const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(
    //             BIRDS({
    //                 el: myRef.current,
    //             })
    //         );
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy();
    //     };
    // }, [vantaEffect]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <ContainerPage ref={myRef}>
            <Home />
            <About />
            {projects.map((project) => (
                <Projects project={project} />
            ))}
            <Contact />
        </ContainerPage>
    );
}

export default App;
