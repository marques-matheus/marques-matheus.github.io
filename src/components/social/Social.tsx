import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

let socials = [
    {
        icon: <AiFillGithub size={22}/>,
        link: "https://github.com/marques-matheus",
    },
    {
        icon: <AiFillLinkedin size={22}/>,
        link: "https://www.linkedin.com/in/marques-matheus-silva/",
    },
    {
        icon: <AiFillMail size={22}/>,
        link: "mailto:marques.m4th3u5@gmail.com",
    }
]

const Social = () => {
    return (
        <div className="flex items-center space-x-3">
            {socials.map((social) => (
                <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={social.link}
                >
                    <span className="text-custom-400 w-10 hover:text-custom-300">
                        {social.icon}
                    </span>
                </a>
            ))}
        </div>
    )
}

export default Social