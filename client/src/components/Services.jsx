import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-4 m-2 cursor-pointer hover:shadow-xl w-full sm:w-[400px] md:w-[500px]">
        <div className={`w-12 h-12 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-xl">{title}</h3>
            <p className="mt-1 text-white text-sm">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex flex-col md:flex-row items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start mb-8 md:mb-0">
                <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                    Services that we
                    <br />
                    continue to improve
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-full text-base">
                    The best choice for buying and selling your crypto assets, with the
                    various super friendly services we offer.
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security"
                    icon={<BsShieldFillCheck fontSize={24} className="text-white" />}
                    subtitle="Security is non-negotiable. We always maintain privacy and quality of our products."
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Best exchange rates"
                    icon={<BiSearchAlt fontSize={24} className="text-white" />}
                    subtitle="We provide the best exchange rates with nominal gas fees."
                />
                <ServiceCard
                    color="bg-[#F84550]"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={24} className="text-white" />}
                    subtitle="The transactions are highly optimized and hence the wait times are very low."
                />
            </div>
        </div>
    </div>
);

export default Services;
