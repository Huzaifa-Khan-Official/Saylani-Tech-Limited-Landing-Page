import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import service1 from "../../assets/Services/service1.jfif";
import service2 from "../../assets/Services/service2.png";
import service3 from "../../assets/Services/service3.jfif";
import service4 from "../../assets/Services/service4.jfif";
import service5 from "../../assets/Services/service5.jfif";

const ScrollableServices = () => {
    return (
        <div className="bg-gray-900">
            <h3 className="text-5xl text-center text-white py-5">Our Services</h3>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-91.6%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-10 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[250px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <img src={card.url} alt="" className="absolute w-full h-full inset-0 object-cover z-0 transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase max-w-2/3 break-words backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default ScrollableServices;

const cards = [
    {
        url: service1,
        title: "Web Development",
        id: 1,
    },
    {
        url: service2,
        title: "App Development",
        id: 2,
    },
    {
        url: service3,
        title: "Ui/Ux Design",
        id: 3,
    },
    {
        url: service4,
        title: "Graphic Designing",
        id: 4,
    },
    {
        url: service5,
        title: "AWS Services",
        id: 5,
    },
    {
        url: service2,
        title: "App Development",
        id: 6,
    },
    {
        url: service4,
        title: "Graphic Designing",
        id: 7,
    },
];