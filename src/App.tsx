import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
// import { ContainerHeader } from "./pages/Home/styles";
import Router from "./router";

// const Header = () => {
//     return (
//         <ContainerHeader>
//             <span>Sobre mim</span>
//             <span>Serviços</span>
//             <span>Projetos</span>
//         </ContainerHeader>
//     );
// };

function App() {
    const myRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div ref={myRef}>
            {/* <Header /> */}
            <Router />
        </div>
    );
}

export default App;
