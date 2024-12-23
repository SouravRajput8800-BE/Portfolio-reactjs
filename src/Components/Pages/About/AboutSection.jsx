import ConnectWithMe from "../About/ConnectWithMe";
import HorizontalLine from "../../HorizontalLine";

const AboutSection = ({ image }) => {
    return(
        <>
            <section className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="container mb-12">
                    <div className="flex flex-col lg:flex-row p-4 pb-0 pr-0 pt-5 items-center rounded-3xl">
                        <div className="lg:w-7/12 p-3 lg:p-5 pt-3">
                            <h1 className="text-blue-600 text-lg sm:text-lg font-bold mb-4">
                                ABOUT ME <br />
                                <span className="text-black text-4xl">better code,</span><br />
                                <span className="text-black text-4xl">better experience </span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">
                                When I'm not coding, you might find me cycling, listening to music, or exploring the latest trends in software development. Let's connect and create the next big thing together!!
                            </p>
                        </div>
                        <ConnectWithMe />
                    </div>
                    <HorizontalLine />
                </div>
            </section>
        </>
    )
};

export default AboutSection;