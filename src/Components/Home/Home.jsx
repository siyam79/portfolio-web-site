import About from "../About/About";
import Education from "../About/Education";
import Bot from "../Bot/Bot";
import ContactUs from "../ContactUs/ContactUs";
import Experince from "../Experince/Experince";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
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
            <Projects></Projects>
            <Education></Education>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;