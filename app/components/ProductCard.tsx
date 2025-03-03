import { TabletSmartphone } from "lucide-react";
import KnowMoreButton from "./KnowMoreButton";

interface ProductCardProps {
    title: string;
    description: string;
    iconSrc?: string;
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    iconSrc,
    className = "",
}) => {
    return (
        <article
            className={`flex flex-col items-start px-7 py-14 w-full rounded-2xl bg-zinc-800 shadow-[0px_8px_20px_rgba(0,0,0,0.1)] max-md:px-5 ${className}`}
        >
            {iconSrc ? (
                <img
                    src={iconSrc}
                    className={
                        iconSrc ===
                            "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/77cad192805976216b5d639944ce77d4c96734543a87a3cb691c6f637a1d9117?placeholderIfAbsent=true"
                            ? "object-contain aspect-[1.18] w-[99px]"
                            : "object-contain aspect-square w-[84px]"
                    }
                    alt={`${title} icon`}
                />
            ) : (
                <TabletSmartphone size={60} />
            )}
            <h3 className="mt-9 text-white text-2xl">{title}</h3>
            <p className="self-stretch mt-3 text-white text-sm font-medium leading-5">
                {description}
            </p>
            <KnowMoreButton
                className={
                    iconSrc ===
                        "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/77cad192805976216b5d639944ce77d4c96734543a87a3cb691c6f637a1d9117?placeholderIfAbsent=true"
                        ? "mt-14 max-md:mt-10"
                        : "mt-7"
                }
            />
        </article>
    );
};

export default ProductCard;