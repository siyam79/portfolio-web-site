import About from "../About/About";
import Bot from "../Bot/Bot";
import ContactUs from "../ContactUs/ContactUs";
import Experince from "../Experince/Experince";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>

            <Bot></Bot>
            <Hero></Hero>
            <Experince></Experince>
            <Skills></Skills>
            <About></About>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;