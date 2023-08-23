import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";

export default function App() {
    return <>
        <Navbar />
        <AllRoutes/>
        <Footer/>
    </>;
}