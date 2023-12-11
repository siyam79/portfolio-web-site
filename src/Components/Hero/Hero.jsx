import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import image from '../../../public/image/siyam-removebg-preview.png'
import { Link } from "react-router-dom";


const Hero = () => {



    return (

        <section id='#home'
            className='min-h-screen flex py-10 md:flex-row flex-col items-center '>
            <div className=' flex-1 flex items-center justify-center h-full '>
                <img className='md:w-11/12 h-full object-cover w-full lg:w-[400px] ' src={image} alt="" />
            </div>
            <div className='flex-1  '>
                <div>
                    <h1 className="md:text-3xl text-xl md:leading-normal leading-10 uppercase text-[#00008B] font-bold "> <span>Hello!! ,
                        <br />
                        </span> My Name is <span> SIYAM AHMED </span> </h1>
                    <h1 className="md:text-xl text-lg font-bold  md:leading-normal leading-10 md:mt-4 mt-2 text-gray-600  "> MERN STACK DEVELOPER </h1>
                    <button className="text-[#00008B]  bg-[#DFE1FA]  px-6 py-2   ">  Contact Me </button>
                    <div className="flex items-center gap-4 animate-bounce mt-2 ">
                        <Link to={'https://www.facebook.com/profile.php?id=100077374245629'}><FaFacebookSquare className="text-3xl "></FaFacebookSquare></Link>
                        <Link to={'https://www.linkedin.com/in/siyam-ahmed-a5a6b3285/'}><FaLinkedin className="text-3xl "></FaLinkedin></Link>

                        <Link to={'https://www.instagram.com/foysalahmedsiyam/'}><SlSocialInstagram className="text-3xl "></SlSocialInstagram></Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;