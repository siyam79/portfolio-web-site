
import { BiSolidLike } from "react-icons/bi";

const Bot = () => {
    return (
        <div className=" fixed bottom-5 right-4 z-[999] sm:right-8  cursor-pointer text-[#fff] bg-cyan-600 lg:w-12 w-10 lg:h-12 h-10 flex items-center justify-center rounded-full animate-bounce ">
            
            <BiSolidLike  className=" text-4xl "/>
        </div>
    );
};

export default Bot;