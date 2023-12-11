import Bot from "../Bot/Bot";
import ContactUs from "../ContactUs/ContactUs";
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
            <Skills></Skills>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;