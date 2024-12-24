import { useState } from "react";
import HorizontalLine from "./HorizontalLine";

const EmailSection = () => {
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const [message, setMessage] = useState("");

    const submitWorkInfo = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setMessage(""); // Clear any previous message

        try {
            const response = await fetch("http://localhost:3000/api/workTogether", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, note }), // Send form data as JSON
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setMessage("Your submission was successful!"); // Success message
            setEmail(""); // Clear the email field
            setNote(""); // Clear the note field
        } catch (error) {
            console.error("Error submitting work info:", error);
            setMessage("Something went wrong. Please try again."); // Error message
        }
    };

    return (
        <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-blue-600 text-lg sm:text-lg font-bold">
                Work Together? <br />
                <span className="text-black text-5xl">Drop your Email!!</span>
            </h1>
            <div className="mt-4 bg-blue-600 py-12 text-center rounded-full mb-28">
                <h3 className="text-3xl font-semibold text-white mb-8">
                    Want to work together and create <br /> amazing products with me?
                </h3>
                <div className="flex justify-center items-center gap-4">
                    <form onSubmit={submitWorkInfo} className="flex flex-row items-center gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-full text-black w-72 focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Enter your note"
                            className="px-4 py-2 rounded-full text-black w-72 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-28 py-2 rounded-full hover:bg-gray-100"
                        >
                            Send
                        </button>
                    </form>
                </div>
                {message && <p className="text-white mt-4">{message}</p>} {/* Display message */}
            </div>
            <HorizontalLine />
        </section>
    );
};

export default EmailSection;
