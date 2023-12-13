
import image from '../../../public/image/siyam-removebg-preview.png'
const About = () => {



    return (
        <section id="about" className="py-20 ">
            <div className="text-center lg:mt-10 ">
                <h1 className="md:text-4xl text-xl font-bold text-[#00008B] ">About <span className="">Me</span> </h1>
                <p className="text-gray-600 my-3 text-lg "> My Introduction </p>
                <div className="max-w-5xl md:flex lg:mt-20 items-center md:gap-6 gap-10 px-10  mx-auto ">
                    <div className=' lg:w-1/2 w-full text-start items-center  '>
                        <h1 className='text-lg font-thin '>I'm  <span className=' text-[#000088] font-mono text-2xl '>SIYAM AHMED</span>, a passionate MERN stack developer with a keen eye for crafting robust and scalable web applications. My journey in the world of programming has led me to specialize in MongoDB, Express.js, React, and Node.js - a combination that empowers me to turn innovative ideas into reality. </h1>

                        <button className=' bg-[#000088] hover:bg-transparent hover:border hover:border-[#000088] hover:text-[#000088] px-5 py-2 lg:mt-6 rounded-xl  text-white mt-2'>Cotact Me </button>

                    </div>
                    <div className='flex-1 flex justify-center mt-10  items-center '>
                        <div className='image lg:w-[400px] w-[350px] h-full relative sm:w-3/5  mx-auto'>
                            <img className=' w-full object-cover bg-cyan-600 rounded-xl  h-[500px] ' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;