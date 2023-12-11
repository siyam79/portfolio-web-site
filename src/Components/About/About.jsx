
import cv from '../../../public/image/Grey Clean CV Resume Photo (2).pdf'
import image from '../../../public/image/siyam-removebg-preview.png'
const About = () => {

    const info = [
        {
            text: 'Years Experince', count: '01'
        },
        {
            text: 'Completed Projects ', count: '5'
        },
        {
            text: 'Companies Work', count: '0'
        },
    ]





    return (
        <section id="about" className="py-10 ">
            <div className="text-center mt-10 ">
                <h1 className="md:text-4xl text-xl font-bold text-[#00008B] ">About <span className="">Me</span> </h1>
                <p className="text-gray-600 my-3 text-lg "> My Introduction </p>
                <div className=" flex items-center md:flex-row  md:gap-6 gap-10 px-10 max-w-6xl mx-auto ">
                    <div className='flex items-center  '>
                        <div className="text-gray-600 my-4 ">
                            <p className="text-left  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat soluta nobis quod vitae asperiores animi doloremque ut, aliquam repellat.</p>
                            <div className=" flex mt-10 w-1/2 mx-auto items-center gap-7 ">

                                {info.map((data, i) => <div key={i}>
                                    <h1 className="md:text-3xl text-xl font-bold "> {data.count} <span className="text-gray-600 ">+</span></h1>
                                    <span className="text-[#00008B] text-md font-mono  md:text-xl"> {data.text}</span>
                                </div>)}

                            </div>
                            <br />
                            <a href={cv} download>
                                <button className="text-[#00008B] bg-slate-200 rounded-2xl font-bold  py-3 px-10 my-6 justify-start  text-xl animate-bounce"> Download CV </button>
                            </a>


                        </div>
                        <div className='  flex-1 flex justify-center items-center '>
                            <div className=' lg:w-96 h-full relative sm:w-11/12 max-w-sm'>
                                <img className=' w-full object-cover bg-cyan-600 rounded-xl  h-[600px] ' src={image} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;