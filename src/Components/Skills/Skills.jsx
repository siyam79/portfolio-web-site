
import ProgressBar from "react-animated-progress-bar";

function Skills() {
    const skills = [
        {
            id: 1,
            title: "React.js",
            value: 70,
        },
        {
            id: 2,
            title: "Tailwind",
            value: 83,
        },
        {
            id: 3,
            title: "Firebase",
            value: 76,
        },
        {
            id: 4,
            title: "Node Js",
            value: 55,
        },
        {
            id: 5,
            title: "Express Js",
            value: 55,
        },
        {
            id: 6,
            title: "MongoDB",
            value: 60,
        },
    ];
    return (
        <div id="skills" className="container mx-auto py-24 px-10 ">
            <h2 className="text-[#000088]  text-4xl font-bold text-center pb-8">My Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {skills.map((item) => (
                    <div key={item.id} className="text-center shadow-md p-6 bg-[#DFE1FA] ">
                        <div className="flex justify-center">
                            <ProgressBar
                                width="230"
                                trackWidth="13"
                                percentage={item.value}
                            />
                        </div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;