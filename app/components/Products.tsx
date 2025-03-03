import ProductCard from "./ProductCard";

// Products.tsx
function Products() {
    return (
        <section className="rounded-none">
            <div className="px-4 md:px-16 w-full bg-stone-900 py-8 md:py-14">
                <div className="flex flex-col md:flex-row gap-5">
                    {/* Left Column */}
                    <div className="w-full md:w-6/12">
                        <div className="flex flex-wrap w-full">
                            <div className="hidden md:flex z-10 shrink-0 self-end mt-40 rounded-full border border-solid border-zinc-100 h-[27px] w-[27px]" />
                            <div className="w-full px-0 md:px-5 py-6 md:py-24">
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="w-full md:w-6/12">
                                        <div className="grow font-semibold text-white">
                                            <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-solid border-zinc-100" />

                                            <ProductCard
                                                title="Virtual Islamic Bank"
                                                description="The Islamic Fintech industry provides ways of Shariah-compliant virtual digital, transparent, easy, and quick banking"
                                                className="mt-6 md:mt-10"
                                            />

                                            <ProductCard
                                                title="Islamic Edtech"
                                                description="The online learning industry is growing quite fast, as it easiest, cost effective, time saving"
                                                iconSrc="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/77cad192805976216b5d639944ce77d4c96734543a87a3cb691c6f637a1d9117?placeholderIfAbsent=true"
                                                className="mt-6 md:mt-8"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-6/12 md:ml-5">
                                        <div className="text-white rounded-2xl bg-[rgba(48,33,72,1)] shadow-[0px_210px_59px_rgba(0,0,0,0)]">
                                            <div className="flex relative flex-col items-start p-4 md:px-7 md:py-14 w-full aspect-square md:aspect-[0.739]">
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/27da9c2aab289ca512b110947a03d304cd7b1c1e92289304c45ca72c6320b5f9?placeholderIfAbsent=true"
                                                    className="object-cover absolute inset-0 size-full"
                                                    alt="Background"
                                                />
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/7f1bd496225812e08a7dd238214ea19e1e26ac5416303f067dc4ba5c005d3396?placeholderIfAbsent=true"
                                                    className="object-contain aspect-[1.04] w-16 md:w-[87px]"
                                                    alt="Icon"
                                                />
                                                <h3 className="relative mt-4 md:mt-8 text-xl md:text-2xl font-bold">
                                                    Shariah Compliant Marketplace
                                                </h3>
                                                <p className="relative self-stretch mt-2 md:mt-3 text-sm font-medium leading-5">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor...
                                                </p>
                                                <div className="flex relative gap-3 md:gap-5 items-start mt-4 md:mt-7 text-base md:text-xl font-semibold">
                                                    <span>Know More</span>
                                                    <img
                                                        src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/049b37b1070bcb3c9520eec27f8ac5cee8e92ac3419693bb6e7713b15c0a3de0?placeholderIfAbsent=true"
                                                        className="shrink-0 w-5 md:w-6 aspect-square"
                                                        alt="Arrow"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <ProductCard
                                            title="Product Advisory"
                                            description="strategic partnership that provides vital insights for informed decision-making in product development and market positioning."
                                            iconSrc="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/4dd43da5bc4068a8ea02e2d597658d894f755f16c4edd9ae254678cfc7be8f22?placeholderIfAbsent=true"
                                            className="mt-6 md:mt-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-6/12 md:ml-5">
                        <div className="flex flex-col items-start w-full">
                            <div className="hidden md:flex flex-col self-center w-full max-w-full md:w-[416px]">
                                {/* Desktop-only decorative elements */}
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/89285e391393ec6fa96f72331e32cceb449fbbafee911276dae218d37e9d6860?placeholderIfAbsent=true"
                                    className="object-contain w-12 aspect-[1.17]"
                                    alt="Decorative icon"
                                />
                                <div className="shrink-0 self-end mt-3.5 w-7 rounded-full border border-solid border-zinc-100 h-[27px]" />
                                <div className="shrink-0 self-center mt-9 ml-12 w-12 h-12 rounded-full border border-solid border-zinc-100" />
                            </div>

                            <div className="md:mt-60 w-full">
                                <h2 className="text-2xl md:text-3xl text-white">
                                    Products
                                </h2>

                                <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">
                                    Our <span className="text-[#D8B150]">Islamic Fintech</span>{" "}
                                    Products includes:
                                </h1>
                                <p className="mt-3 md:mt-5 text-base md:text-lg font-medium tracking-wider leading-7 md:leading-9 text-white">
                                    We have complete and very easy solution for Virtual Islamic /
                                    Digital Banking and different fintech products for Islamic
                                    banking including deposit and asset side for all requirements of
                                    clients.
                                </p>
                                <button className="flex gap-1.5 justify-center items-center px-6 md:px-10 py-3 md:py-5 mt-6 md:mt-12 text-base md:text-xl font-semibold text-white bg-[rgba(216,177,80,1)] min-h-[50px] md:min-h-[60px] rounded-full w-full md:w-auto">
                                    <span>All Products</span>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/5c2e4970b57d45b1ab38880d0917110a9a2ec33d7321878df85fe53860574db6?placeholderIfAbsent=true"
                                        className="shrink-0 w-5 md:w-6 aspect-square"
                                        alt="Arrow"
                                    />
                                </button>
                            </div>

                            <div className="hidden md:flex flex-col self-center mt-9 ml-10 w-full max-w-full md:w-[520px]">
                                {/* Desktop-only decorative elements */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;