import "./App.css";
import { useState, createContext } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

export const PageContext = createContext();

const App = () => {
    const [page, setPage] = useState("home");

    return (
        <>
            <PageContext.Provider value={[page, setPage]}>
                {page === "home" ? <Home /> : null}
                {page === "about" ? <About /> : null}
            </PageContext.Provider>
        </>
    );
};

export default App;
