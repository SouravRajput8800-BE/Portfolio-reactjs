import { useRef, useState } from "react";
import FullAboutPage from "../About/FullAbout";

const HeroSection = ({ image }) => {
    const dialogRef = useRef(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
            setIsDialogOpen(true); // Set dialog state to open
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
            setIsDialogOpen(false); // Set dialog state to closed
        }
    };


    return(
        <div className={isDialogOpen ? "relative" : ""}>
            <section className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="container my-12">
                    <div className="flex flex-col lg:flex-row p-4 pb-0 pr-0 pt-5 items-center rounded-3xl border shadow-md">
                        <div className="lg:w-7/12 p-3 lg:p-5 pt-3">
                            <h1 className="text-blue-600 text-lg sm:text-lg font-bold mb-4">
                                Hi There 👋 I am <br />
                                <span className="text-black text-6xl">Sourav Rajput</span><br />
                                <span className="text-gray-500 text-sm">Software Developer:- Ruby on Rails | Node.js | React.js </span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">
                                A passionate Software Developer with a knack for building robust <br /> 
                                and scalable web applications. With a deep understanding of backend <br />
                                development and a love for solving complex problems, I thrive on turning <br />
                                innovative ideas into reality. <br />
                                Over the <span className="text-black font-bold">2.5 years</span> experience , I've honed my skills in developing dynamic <br />
                                and user-friendly web solutions that not only meet business requirements <br />
                                but also delight users. My journey in the tech world has been driven by a curiosity to explore new technologies and a commitment to clean, maintainable code.
                            </p>
                            <div className="flex flex-col md:flex-row gap-2 md:justify-start mb-4 lg:mb-3">
                                <button onClick={openDialog} className="rounded-full px-8 py-2 font-bold text-white bg-blue-500 hover:bg-blue-600">
                                    Read More...
                                </button>
                                <a
                                    href="#contactWithMe"
                                    className="rounded-full px-8 py-2 font-bold text-gray-700 bg-transparent border-2 border-gray-700 
                                    transition-all duration-300 ease-in-out transform hover:bg-gray-200 hover:text-black hover:scale-105"
                                >
                                    Contact with me
                                </a>


                            </div>
                        </div>
                        <div className="lg:w-5/12 p-0 shadow-md ">
                            <img className="rounded-lg" src={image} alt="Sourav Rajput Image" width="720" />
                        </div>
                    </div>
                </div>
            </section>
            <dialog
                ref={dialogRef}
                className="rounded-lg p-6 bg-white max-w-7xl w-full shadow-lg"
            >
                {/* Close Button */}
                <button
                    onClick={closeDialog}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    &times;
                </button>
                    {/* FullAboutPage Content */}
                    <FullAboutPage image={image}/>
                </dialog>
                {isDialogOpen && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
                )}
        </div>    
    )
};

export default HeroSection;