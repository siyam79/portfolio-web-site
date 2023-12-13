
const Education = () => {
    return (
        <>

            <div id="education" className="py-20">


                <h1 className="text-4xl font-bold mt-10 text-center">Education</h1>
                <div>
                    <ul className="timeline timeline-horizontal">
                        <li className=" w-1/2  mx-auto">
                            <hr />
                            <div className="timeline-start text-2xl font-bold"> Diploma In Engineering </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">
                                <div className=" mx-auto">
                                    <h2 className="text-xl font-bold">
                                    Bhola Polytechnic Institute ,,
                                    </h2>
                                    <p className="text-xl font-semibold ">
                                        Computer Science & Technology
                                    </p>
                                    <p className="text-xl font-semibold text-center ">Bhola</p>
                                    <p className="text-xl font-semibold text-center ">2021 - 2025</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Education;