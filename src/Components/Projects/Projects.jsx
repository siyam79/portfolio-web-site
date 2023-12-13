
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
    return (
        <div id="projects" className="py-20">
            <div>
                <div>
                    <h1 className=" text-center mt-10  text-[#000088] font-mono text-3xl ">My Projects  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-12">

                    <div className="p-4 md:p-6 border rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img className="rounded-lg h-[208px] w-full hover:transform hover:scale-125 duration-1000 " src="https://i.ibb.co/18578b8/fitness.png" alt="" />
                        </div>
                        <div className=" space-y-2 md:space-y-4 mt-3 md:mt-6">
                            <h1 className="text-base md:text-xl lg:text-2xl font-bold lex">Fitness Tracker </h1>
                            <div className="lex flex justify-between items-center">
                                <a href="https://github.com/siyam79/fitness-tracker-app-client-site" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 ">
                                    <FaGithub></FaGithub>
                                    Client
                                </a>
                                <a href="https://github.com/siyam79/fitness-tracker-app-server-site" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 ">
                                    <FaGithub></FaGithub>
                                    Server
                                </a>
                                <a href="https://fitness-tracker-97708.web.app/" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 animate-bounce ">
                                    <FaLink></FaLink>
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 border rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img className="rounded-lg h-[208px] w-full hover:transform hover:scale-125 duration-1000 " src="https://i.ibb.co/pwZDSDC/job.png" alt="" />
                        </div>
                        <div className=" space-y-2 md:space-y-4 mt-3 md:mt-6">
                            <h1 className="text-base md:text-xl lg:text-2xl font-bold lex">Job Search</h1>
                            <div className="lex flex justify-between items-center">
                                <a href="https://github.com/siyam79/job-search-react-app-client" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 ">
                                    <FaGithub></FaGithub>
                                    Client
                                </a>
                                <a href="https://github.com/siyam79/job-search-react-app-server" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 ">
                                    <FaGithub></FaGithub>
                                    Server
                                </a>
                                <a href="https://job-assingments-11.web.app/" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 animate-bounce ">
                                    <FaLink></FaLink>
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 border rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img className="rounded-lg h-[208px] w-full hover:transform hover:scale-125 duration-1000 " src="https://i.ibb.co/7SD38t9/social.png" alt="" />
                        </div>
                        <div className=" space-y-2 md:space-y-4 mt-3 md:mt-6">
                            <h1 className="text-base md:text-xl lg:text-2xl font-bold lex"> Social Event Manegment </h1>
                            <div className="lex flex justify-between items-center">
                                <a href="https://github.com/programming-hero-web-course-4/b8a9-event-management-siyam79" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 ">
                                    <FaGithub></FaGithub>
                                    Client
                                </a>
                                {/* <a href="https://github.com/siyam79/Technology-and-Electronics-server-site" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 ">
                                    <FaGithub></FaGithub>
                                    Server
                                </a> */}
                                <a href="https://social-event-c5d78.web.app/" target="_blank" className="text-base flex items-center gap-1 hover:border-[#00E5F7] hover:border-b-2 animate-bounce ">
                                    <FaLink></FaLink>
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;