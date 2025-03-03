import './globals.css';

import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import DepositSection from "./components/DepositSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InvestmentsSection from "./components/InvestmentsSection";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ServicesSection from "./components/ServicesSection";
import EstimationForm from './components/EstimationForm';
import Products from './components/Products';


const Home = () => {
    return (
        <div>
            <div className="bg-[rgba(39,39,39,1)] flex w-full flex-col overflow-hidden items-center max-md:max-w-full">
                <div className="flex flex-col self-stretch relative min-h-[959px] w-full pt-12 pb-[17px] px-20 max-md:max-w-full max-md:px-5">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/bdcea6354ee15454bc89fccfee9bec8e98eeb9be7936354fcb14eff5940cfefc?placeholderIfAbsent=true"
                        className="absolute h-full w-full object-cover inset-0"
                        alt="Background"
                    />
                    <div className="relative flex flex-col max-md:max-w-full">
                        <Navbar />
                        <HeroSection />
                    </div>
                </div>

                <EstimationForm />

                <AboutSection />

                <Products />

                <ServicesSection />

                <DepositSection />

                <InvestmentsSection />

                <BlogSection />

                <NewsletterSection />

                <Footer />
            </div>
        </div>
    );
};

export default Home;
