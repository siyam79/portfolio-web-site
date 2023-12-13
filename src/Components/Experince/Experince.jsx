import reactLogo from "../../../public/image/atom.png"
import nodeLogo from "../../../public/image/nodejs.png"
import mongoDB from "../../../public/image/database.png"
import figma from "../../../public/image/figma.png"
import tailwind from "../../../public/image/tailwind_icon.png"
import express from "../../../public/image/images (2).jpeg"
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react"

const Experince = () => {

    const [data, setData] = useState({})


    const experince = [
        {
            name: 'MongoDB', logo: mongoDB, description: 'Professional with expertise in working with MongoDB', details: 'Experienced MongoDB expert adept in NoSQL database management, data modeling, and performance optimization. Skilled in designing scalable solutions and integrating MongoDB with diverse applications. Strong troubleshooting and problem-solving abilities with a deep understanding of MongoDB features.', skill: 'Database Systems , Database Modeling  , JavaScript/ES6+ , Asynchronous Programming , Version Control , Collaboration'
        },
        {
            name: 'Express.js', logo: express, description: 'professional with expertise in building web applications using the Express.js', details: 'An Express.js developer is a professional with expertise in building web applications using the Express.js framework, which is a popular and widely used framework for Node.js. Here ',
            skill: 'Database Systems , JavaScript/ES6+ , Asynchronous Programming , Version Control , Middleware Usage'
        },
        {
            name: 'React.js', logo: reactLogo, description: ' React.js developer passionate about creating engaging and responsive user interfaces.' , details :'My experience includes crafting modular and reusable components, leveraging state management libraries like Redux, and integrating with RESTful APIs. I am adept at translating design concepts into functional and visually appealing front-end solutions, always with a focus on performance and scalability',skill: 'Database Systems , JavaScript/ES6+ , Asynchronous Programming , Version Control , Middleware Usage'
        },
        {
            name: 'Node.js', logo: nodeLogo, description: 'Node.js developer with a passion for building scalable and efficient server-side applications.' , details: "My expertise spans the entire development lifecycle, from architecting server solutions to optimizing performance and ensuring seamless integrations with databases like MongoDB or MySQL. I thrive on solving complex challenges, implementing best practices, and staying abreast of the evolving Node.js ecosystem.", skill: 'Database Systems , JavaScript/ES6+ , Asynchronous Programming , Version Control , Middleware Usage'
        },

        {
            name: 'Figma', logo: figma, description: 'strong proficiency in harnessing the power of Figma to streamline and enhance the collaborative design and development process.' ,details:"My Figma expertise extends beyond traditional design exploration—I use Figma to create interactive prototypes, design systems, and collaborate with designers to ensure a smooth handoff to the development phase. This approach significantly improves efficiency and reduces the likelihood of misinterpretation during implementation." ,  skill: 'Interface Design , Collaborative Design , Component Libraries ,Design Systems , Plugin Integration'
        },
        {
            name: 'Tailwind', logo: tailwind, description: ' strong proficiency in harnessing the power of Tailwind CSS to craft efficient and visually appealing user interfaces. ' , details:"My experience with Tailwind CSS extends to leveraging its utility-first approach to streamline the styling process. By maximizing the use of utility classes, I ensure clean, maintainable code while achieving pixel-perfect designs. This methodology not only speeds up development but also provides a consistent and cohesive visual language across projects." ,skill: 'Responsive Design , Customization , Flexibility and Consistency , Utility-First Approach , Design System Implementation'
        },

    ]



    return (
        <>

            <section id="experince" className="min-h-fit lg:mt-20 py-20 ">
                <h1 className=" text-[#00008B] md:text-3xl text-center text-xl font-bold "> My Experince </h1>
                
                <br />
                <div className=" lg:w-4/5 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 px-6 ">
                    {
                        experince?.map((item, i) => <div key={i} className=" relative group  flex items-center rounded-md border border-[#00008B]   bg-[#DFE1FA] ">

                            <div className=" flex items-center gap-5 p-5 w-full sm:cursor-pointer  ">
                                <img className="w-[40px] group-hover:scale-125 duration-200  " src={item.logo} alt="..." />
                                <div>
                                    <h2 className="text-lg:2xl text-lg font-sans font-bold ">{item.name} </h2>
                                    <p className=" font-mono group-hover:scale-95 duration-200"> {item.description} </p>
                                    <div className=" text-xl absolute top-3 right-3 ">

                                        <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}></button>

                                        <button className="" onClick={async () => {
                                            await setData(item)
                                            document.getElementById('my_modal_1').showModal()
                                        }}><FaArrowRightLong className="group-hover:scale-150  duration-200" ></FaArrowRightLong> </button>


                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </section>

            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div className="flex items-center gap-2 ">
                            <img className="w-10 " src={data.logo} alt="" />
                            <h3 className="font-bold text-xl "> {data.name} </h3>
                        </div>
                        <p className="text-sm font-thin py-6 ">{data.details} </p>
                        <h1 className=" text-xl text-center py-2 font-mono  "> Working Skills </h1>
                        <p className=" text-md font-bold  "> {data?.skill} </p>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn"><AiOutlineClose className="text-xl text-red-600" /></button>
                        </form>
                    </div>

                </dialog >

            </div >
        </>
    );
};

export default Experince;