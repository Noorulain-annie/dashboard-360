import React from "react";

interface CtaButtonProps {
    className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ className = "" }) => {
    return (
        <button
            className={`flex justify-center items-center px-10 py-3 bg-[rgba(216,177,80,1)] 
                cursor-pointer rounded-[12006.944px] w-[352px] max-md:w-full 
                max-md:max-w-[352px] max-sm:px-5 max-sm:py-2.5 ${className}`}
        >
            <span className="mr-1.5 text-xl font-semibold text-white max-sm:text-base">
                Book Your Consultation
            </span>
            <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
            >
                <path
                    d="M12.901 4.27195C12.5763 4.59203 12.5459 5.0978 12.812 5.45266L12.8919 5.54545L18.386 11.1168L4.32789 11.1168C3.83055 11.1168 3.42737 11.52 3.42737 12.0173C3.42737 12.4764 3.7709 12.8553 4.21493 12.9108L4.32789 12.9178H18.386L12.8919 18.4892C12.5719 18.8139 12.5486 19.32 12.8197 19.6711L12.901 19.7627C13.2256 20.0828 13.7318 20.106 14.0828 19.8349L14.1745 19.7537L21.1785 12.6496C21.4954 12.3282 21.5218 11.8281 21.2577 11.4769L21.1785 11.3851L14.1745 4.28098C13.8253 3.92682 13.2551 3.92278 12.901 4.27195Z"
                    fill="white"
                />
            </svg>
        </button>
    );
};

export default CtaButton;

