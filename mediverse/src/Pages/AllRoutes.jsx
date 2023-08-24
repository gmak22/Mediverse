import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";
import { About } from "./About";
import { Faq } from "./Faq";
import { Container } from "@chakra-ui/react";
import { Login } from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import Login2 from "../Components/Auth/Login";
import Signup2 from "../Components/Auth/Signup";

export const AllRoutes = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login2/>}/>
                <Route path="/signup" element={<Signup2/>}/>
            </Routes>
        </Container>
    );
}