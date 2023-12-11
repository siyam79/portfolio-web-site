import Bot from "../Bot/Bot";
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
        </div>
    );
};

export default Home;