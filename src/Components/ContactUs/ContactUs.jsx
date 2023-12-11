
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
    // Define initial form values
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    // Define a function to handle form submission
    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission logic (send email, save to database, etc.)
        console.log(values);

        // Reset the form after submission
        resetForm();
    };

    return (
        <>
            <h2 className="text-2xl text-center py-10 text-[#00008B] font-bold mb-4">Contact Us</h2>
            <div className=" w-11/12  mx-auto grid md:grid-cols-2 grid-cols-1 mt-8 gap-6 ">

                <div className=' flex items-center'>
                    <div className='  '>
                        <div className='flex items-center gap-2 text-[#fff] bg-[#DFE1FA] px-10 py-4  rounded-full animate-bounce  '>
                            <FaPhoneAlt className='text-3xl px-2 bg-cyan-600 text-white rounded-full '></FaPhoneAlt>
                            <h1 className=' md:text-2xl text-lg text-[#00008B]'> <span className='font-bold  '>Phone :</span> 0162927289 </h1>
                        </div>
                        <div className='flex items-center gap-2 mt-4 text-[#fff] bg-[#DFE1FA] px-10 py-4  rounded-full animate-bounce  '>
                            <MdOutlineMarkEmailRead className='text-3xl px-2 bg-cyan-600 text-white rounded-full '></MdOutlineMarkEmailRead>
                            <h1 className=' md:text-2xl text-lg text-[#00008B]'> <span className='font-bold  '>Email :</span> siyamahmed3827@gmail.com </h1>
                        </div>
                        <div className='flex items-center gap-2 mt-4 text-[#fff] bg-[#DFE1FA] px-10 py-4  rounded-full animate-bounce  '>
                            <FaLocationDot className='text-3xl px-2 bg-cyan-600 text-white rounded-full '></FaLocationDot>
                            <h1 className=' md:text-2xl text-lg text-[#00008B]'> <span className='font-bold '>Location :</span> Bhola.Barisal.Bangladesh</h1>
                        </div>

                    </div>
                </div>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className="  p-8 bg-white shadow-lg rounded">


                        {/* Name Field */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message
                            </label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>

            </div>

        </>
    );
};

export default ContactUs;
