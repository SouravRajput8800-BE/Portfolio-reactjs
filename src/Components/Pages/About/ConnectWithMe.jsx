import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const ConnectWithMe = () => {
    return (
        <div className="lg:w-7/12 p-3 lg:p-5 pt-3">
            <h1 className="text-black text-xl sm:text-3xl font-bold mb-4">
                Connect With Me <br />
            </h1>
            <p className="text-lg text-gray-600 mb-4">
                Your journey to stay inspired starts here—let's link up on your favorite platform. <br />
                Building meaningful connections is just a click away!
            </p>
            <div className="flex space-x-4">
                <a
                    href="https://github.com/SouravRajput8800-BE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                >
                    <FaGithub size={28} />
                </a>
                <a
                    href="mailto:souravrajput14071998@gmail.com"
                    className="text-gray-600 hover:text-black"
                >
                    <FaEnvelope size={28} />
                </a>
                <a
                    href="https://www.instagram.com/rajput_40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500"
                >
                    <FaInstagram size={28} />
                </a>
                <a
                    href="https://www.linkedin.com/in/sourav-kumar-5641961a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                >
                    <FaLinkedin size={28} />
                </a>
            </div>
        </div>
    );
};

export default ConnectWithMe;
