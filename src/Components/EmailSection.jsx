import HorizontalLine from "./HorizontalLine";

const EmailSection = () => {
    return (
        <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-blue-600 text-lg sm:text-lg font-bold">
                    Work Together? <br />
                    <span className="text-black text-5xl">Drop your Email!!</span>
                </h1>
                <div className="mt-4 bg-blue-600 py-12 text-center rounded-full mb-28">
                    <h3 className="text-3xl font-semibold text-white mb-8">
                        Want to work together and create <br />amazing products with me?
                    </h3>
                    <div className="flex justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-full text-black w-72 focus:outline-none"
                    />
                    <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100">
                        Get a Quote
                    </button>
                    </div>
                </div> 
                <HorizontalLine />
        </section>
    );
};

export default EmailSection;
