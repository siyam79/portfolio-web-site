
import image from '../../../public/image/siyam-removebg-preview.png'


const Hero = () => {






    return (

        <section id='#home'
            className='min-h-screen flex py-10 md:flex-row flex-col items-center '>
            <div className=' flex-1 flex items-center justify-center h-full '>
                <img className='md:w-11/12 h-full object-cover w-full lg:w-[400px] ' src={image} alt="" />
            </div>
            <div className='flex-1  '>
                <div>
                    <h1> <span>Hello!!</span> My Name Is <span> SIYAM AHMED </span> </h1>
                    <h1> MERN STACK DEVELOPER </h1>
                    <button> Contact Me </button>
                    <div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;