import React, { useRef, useState } from "react";
import FullAboutPage from "./FullAbout";
import ConnectWithMe from "../About/ConnectWithMe";
import HorizontalLine from "../../HorizontalLine";

const AboutSection = ({ image }) => {
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

    return (
        <>
            {/* Main Container */}
            <div className={isDialogOpen ? "relative" : ""}>
                {/* About Section */}
                <section className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="container mb-12">
                        <div className="flex flex-col lg:flex-row p-4 pb-0 pr-0 pt-5 items-center rounded-3xl">
                            <div className="lg:w-7/12 p-3 lg:p-5 pt-3">
                                <h1 className="text-blue-600 text-lg sm:text-lg font-bold mb-4">
                                    ABOUT ME <br />
                                    <span className="text-black text-4xl">better code,</span>
                                    <br />
                                    <span className="text-black text-4xl">better experience</span>
                                </h1>
                                <p className="text-lg text-gray-600 mb-4">
                                    When I'm not coding, you might find me cycling, listening to
                                    music, or exploring the latest trends in software development.
                                    Let's connect and create the next big thing together!! <br />
                                    Read more about me just click!
                                </p>
                                {/* Button to Open Dialog */}
                                <button
                                    onClick={openDialog}
                                    className="text-black"
                                >
                                    <i>More...</i>
                                </button>
                            </div>
                            <ConnectWithMe />
                        </div>
                        <HorizontalLine />
                    </div>
                </section>

                {/* Dialog Element */}
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

                {/* Overlay for Blur Effect */}
                {isDialogOpen && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
                )}
            </div>
        </>
    );
};

export default AboutSection;
