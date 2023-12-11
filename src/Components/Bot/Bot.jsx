
import { BiSolidLike } from "react-icons/bi";

const Bot = () => {
    return (
        <div className=" fixed bottom-5 right-4 z-[999] sm:right-8  cursor-pointer text-[#fff] bg-cyan-600 w-16 h-16  flex items-center justify-center rounded-full animate-bounce ">
            
            <BiSolidLike  className=" text-4xl "/>
        </div>
    );
};

export default Bot;