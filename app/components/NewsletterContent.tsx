"use client"
import React, { useState } from "react";

const NewsletterContent: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-6 py-6 max-md:py-4">
            <div className="flex flex-row items-center justify-between gap-6 w-full max-w-6xl mx-4 max-md:flex-col max-md:gap-4 max-md:mx-2">
                <div className="text-white flex-1 max-md:text-center">
                    <div className="text-2xl font-normal pb-2 max-md:text-xl">
                        Newsletter
                    </div>
                    <div className="text-5xl font-semibold mt-2 max-md:text-3xl">
                        Keep Updated{" "}
                        <span className="text-[rgba(216,177,80,1)]">About Our Product</span>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex-1 max-w-xl max-md:max-w-full w-full"
                >
                    <div className="bg-[rgba(68,68,68,1)] flex items-stretch gap-5 justify-between p-3 rounded-full w-full max-md:gap-1 max-md:p-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="text-[rgba(148,148,148,1)] text-sm font-medium bg-transparent border-none outline-none flex-grow max-md:pl-2 max-md:w-1/2 max-md:text-xs"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[rgba(216,177,80,1)] text-xl text-white font-semibold px-5 py-2 rounded-full max-md:text-sm max-md:px-3 max-md:py-1.5 max-md:whitespace-nowrap"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default NewsletterContent;
