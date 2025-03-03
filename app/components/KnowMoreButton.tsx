import { ArrowRight } from "lucide-react";

interface KnowMoreButtonProps {
    className?: string;
}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({ className = "" }) => {
    return (
        <div
            className={`flex gap-5 items-start text-xl text-[rgba(216,177,80,1)] ${className}`}
        >
            <div className="flex items-center gap-2">

                <button className="basis-auto">Know More</button>
                <ArrowRight />
            </div>
        </div>
    );
};

export default KnowMoreButton;