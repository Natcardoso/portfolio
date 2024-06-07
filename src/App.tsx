import AOS from "aos";
import "aos/dist/aos.css";
import PageInitial from "../src/pages/PageInitial";
import { useEffect, useRef } from "react";

function App() {
    const myRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div ref={myRef}>
            <PageInitial />
        </div>
    );
}

export default App;
