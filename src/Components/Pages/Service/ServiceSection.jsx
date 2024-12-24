import { ShoppingCartIcon, UsersIcon, DesktopComputerIcon, ViewGridIcon } from '@heroicons/react/solid'; // Solid style


const ServicesSection = () => {
    const services = [
        {
            title: "E-Commerce",
            description: "Empowering businesses to thrive online with tailored e-commerce solutions that drive growth and customer engagement.",
            icon: <ShoppingCartIcon className="h-10 w-10 text-white" />,
        },
        {
            title: "Employee Management",
            description: "Streamline workforce operations with effective management tools designed to enhance productivity and collaboration.",
            icon: <UsersIcon className="h-10 w-10 text-white" />,
        },
        {
            title: "Social Media",
            description: "Boost your digital presence and connect with your audience through strategic social media solutions.",
            icon: <DesktopComputerIcon className="h-10 w-10 text-white" />,
        },
        {
            title: "Portfolio",
            description: "Showcase your achievements and creative projects with personalized portfolio designs that leave a lasting impression.",
            icon: <ViewGridIcon className="h-10 w-10 text-white" />,
        },
    ];
    return(
        <>
            <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-blue-600 text-lg sm:text-lg font-bold mb-4">
                    What I Offer? <br />
                    <span className="text-black text-5xl">My Services</span>
                </h1>
                <h2 className="text-lg text-gray-600 mb-4">
                    There are many variations From innovative e-commerce solutions to professional portfolio designs, <br />I provide a variety of services to meet your needs. <b>Let's</b> create something amazing together.
                </h2>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-6 py-12 rounded-lg shadow-md border transform transition-transform duration-300 group"
                        >
                            <div className="flex items-center justify-center w-20 h-20 text-5xl bg-blue-600 rounded-full mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>   
            </section>
        </>
    )
};

export default ServicesSection;