import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";
import { About } from "./About";
import { Faq } from "./Faq";
import { Container } from "@chakra-ui/react";

export const AllRoutes = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </Container>
    );
}