import reactLogo from "../../../public/image/atom.png"
import nodeLogo from "../../../public/image/nodejs.png"
import mongoDB from "../../../public/image/database.png"
import figma from "../../../public/image/figma.png"
import tailwind from "../../../public/image/tailwind_icon.png"
import express from "../../../public/image/images (2).jpeg"
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react"

const Skills = () => {

    const [data, setData] = useState({})


    const skills = [
        {
            name: 'MongoDB', logo: mongoDB, description: 'Professional with expertise in working with MongoDB', details: 'Experienced MongoDB expert adept in NoSQL database management, data modeling, and performance optimization. Skilled in designing scalable solutions and integrating MongoDB with diverse applications. Strong troubleshooting and problem-solving abilities with a deep understanding of MongoDB features.',   skill : 'Database Systems , Database Modeling  , JavaScript/ES6+ , Asynchronous Programming , Version Control , Collaboration'
        },
        {
            name: 'Express.js', logo: express, description: 'professional with expertise in building web applications using the Express.js',  details: 'An Express.js developer is a professional with expertise in building web applications using the Express.js framework, which is a popular and widely used framework for Node.js. Here ',
            skill : 'Database Systems , JavaScript/ES6+ , Asynchronous Programming , Version Control , Middleware Usage'
        },
        {
            name: 'React.js', logo: reactLogo, description: 'Hellow react developer'
        },
        {
            name: 'Node.js', logo: nodeLogo, description: 'Hellow react developer'
        },

        {
            name: 'Figma', logo: figma, description: 'Hellow react developer'
        },
        {
            name: 'Tailwind', logo: tailwind, description: 'Hellow react developer'
        },

    ]



    return (
        <>

            <section className="min-h-fit ">

                <div className=" md:container px-6 py-10" >
                    <h1 className=" text-[#00008B] md:text-3xl text-xl font-bold ">Skills </h1>
                </div>
                <br />
                <div className=" lg:w-3/5 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 px-6 ">
                    {
                        skills.map((item, i) => <div key={i} className=" relative group  flex items-center rounded-md border border-[#00008B]   bg-[#DFE1FA] ">

                            <div className=" flex items-center gap-5 p-5 w-full sm:cursor-pointer  ">
                                <img className="w-[40px] group-hover:scale-125 duration-200  " src={item.logo} alt="..." />
                                <div>
                                    <h2 className="text-lg:2xl text-lg font-sans font-bold ">{item.name} </h2>
                                    <p className=" font-mono "> {item.description} </p>
                                    <div className=" text-xl absolute top-3 right-3 ">



                                        <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}></button>

                                        <button className="" onClick={async () => {
                                            await setData(item)
                                            document.getElementById('my_modal_1').showModal()
                                        }}><FaArrowRightLong></FaArrowRightLong> </button>


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

export default Skills;