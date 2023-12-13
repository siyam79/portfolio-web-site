import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import banner from "../../../public/image/user.png"
import cv from '../../../public/image/Grey Clean CV Resume Photo (2).pdf'
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div id="home" className="min-h-screen lg:w-[90%] mx-auto flex items-center px-10 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-2xl font-semibold">Hi I'm</h4>
                        <h2 className=" text-xl md:text-3xl uppercase font-mono text-blue-800">
                            Siyam Ahmed
                        </h2>
                        <p className="text-xl text-gray-500 ">MERN Stack Developer</p>
                        <p className="text-sm font-thin ">Greetings! I'm  a passionate MERN stack developer with a keen eye for crafting robust and scalable web applications. My journey in the world of programming has led me to specialize in MongoDB, Express.js, React, and Node.js - a combination that empowers me to turn innovative ideas into reality.</p>
                        <div className=" flex items-center gap-6 mt-2 ">
                            <Link to={'https://www.facebook.com/profile.php?id=100077374245629'}><FaFacebookSquare className="text-3xl "></FaFacebookSquare></Link>
                            <Link to={'https://www.linkedin.com/in/siyam-ahmed-a5a6b3285/'}><FaLinkedin className="text-3xl "></FaLinkedin></Link>

                            <Link to={'https://www.instagram.com/foysalahmedsiyam/'}><SlSocialInstagram className="text-3xl "></SlSocialInstagram></Link>
                        </div>
                    </div>

                    <div className="pt-10 space-x-4 flex items-center flex-col md:flex-row space-y-3 text-center ">

                        <a href={cv} download>
                            <button className="flex gap-2 bg-[#000088] hover:bg-transparent hover:border hover:border-[#000088] hover:text-[#000088] px-5 py-3 text-white animate-bounce">
                                Download Resume
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                            </button>
                        </a>

                        {/* <button className="flex gap-2 bg-[#000088] hover:bg-transparent hover:border hover:border-[#000088] hover:text-[#000088] px-5 py-3 text-white">
                            Contact Me
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                />
                            </svg>
                        </button> */}
                    </div>
                </div>
                <div className="lg:w-[400px] ">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;