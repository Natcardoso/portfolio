import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { ContainerHeader } from "./pages/Home/styles";
import Router from "./router";
// import BIRDS from "vanta/dist/vanta.birds.min";

const ContainerPage = styled.div`
    /* scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;

    .page {
        scroll-snap-align: start;
    } */
`;

const Header = () => {
    return (
        <ContainerHeader>
            <span>Sobre mim</span>
            <span>Serviços</span>
            <span>Projetos</span>
        </ContainerHeader>
    );
};

function App() {
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
            <Header />
            <Router />
        </ContainerPage>
    );
}

export default App;
