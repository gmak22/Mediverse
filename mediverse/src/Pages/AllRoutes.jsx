import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";
import { About } from "./About";
import { Faqpage } from "./Faq"
import { Container } from "@chakra-ui/react";
import Signup from "../Components/Auth/Signup";
import Checkout from "../Components/Service/Checkout";
import Login from "../Components/Auth/Login";

export const AllRoutes = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faqpage/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </Container>
    );
}