import "./App.css";
import { useState, createContext } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
export const PageContext = createContext();

const App = () => {
    const [page, setPage] = useState("home");

    return (
        <>
            <PageContext.Provider value={[page, setPage]}>
                {page === "home" ? <Home /> : null}
                {page === "about" ? <About /> : null}
                {page === "contact" ? <Contact /> : null}
            </PageContext.Provider>
        </>
    );
};

export default App;
