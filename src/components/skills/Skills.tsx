import Heading from "../heading"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaWindows, FaLinux } from 'react-icons/fa6'
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMysql } from "react-icons/si";

const skills = [
    ['HTML5', <FaHtml5 size={80} />, "text-red-500"],
    ['CSS3', <FaCss3Alt size={80} />, "text-blue-500"],
    ['JavaScript', <FaJs size={80} />, "text-yellow-500"],
    ['React', <FaReact size={80} />, "text-blue-400"],
    ['Node.js', <FaNodeJs size={80} />, "text-green-500"],
    ['TypeScript', <SiTypescript size={80} />, "text-blue-500"],
    ['Tailwind CSS', <RiTailwindCssFill size={80} />, "text-cyan-600"],
    ['Next.js', <RiNextjsFill size={80} />, "text-gray-800"],
    ['MySQL', <SiMysql size={80} />, "text-blue-500"],
    ['GitHub', <FaGithub size={80} />, "text-black"],
    ['Windows', <FaWindows size={80} />, "text-blue-500"],
    ['Linux', <FaLinux size={80} />, "text-black"],

]

const Skills = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Heading>{title}</Heading>
            <div className=" grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <article key={index} className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 box-content flex justify-between flex-col items-center h-32 w-32"> <span className={`${skill[2]}`}>{skill[1]}</span>
                        <h5 className="text-center font-bold">
                            {skill[0]}
                        </h5>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Skills