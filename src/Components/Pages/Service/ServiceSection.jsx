import { ShoppingCartIcon, UsersIcon, DesktopComputerIcon, ViewGridIcon } from '@heroicons/react/solid'; // Solid style


const ServicesSection = () => {
    const services = [
        {
            title: "E-Commerce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.",
            icon: <ShoppingCartIcon className="h-10 w-10 text-white" />,
        },
        {
            title: "Employee Management",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.",
            icon: <UsersIcon className="h-10 w-10 text-white" />,
        },
        {
            title: "Social Media",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.",
            icon: <DesktopComputerIcon className="h-10 w-10 text-white" />,
        },
        {
            title: "Portfolio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.",
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
                    There are many variations of passages of Lorem Ipsum available but <br />the majority have suffered alteration in some form.
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