import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMiniBars3, HiMiniBars3BottomLeft, HiXMark } from "react-icons/hi2";

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About Us", id: "about" },
        { name: "Promo", id: "promo" },
        { name: "Shop", id: "shop" },
    ];

    return (
        <div className={`flex justify-between font-begriff items-center p-3 md:px-10 md:py-5 fixed w-full h-fit transition-colors duration-300
        ${isScrolled ? "bg-[#242d2f]/85 backdrop:blur-md" : "bg-begriff-green"}`}>
            <a href="#home">
                <img
                    src="src\assets\logo-full.png" 
                    width={168}
                    height={168}
                    alt="logo"
                    className="w-12 h-12 active:scale-95"
                />
            </a>
            <div className="flex items-center justify-evenly gap-x-5 text-begriff-white pr-[215px]">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`relative hidden md:block md:min-w-24 min-h-12 text-center place-content-center active:scale-95 rounded-3xl overflow-hidden 
                            ${activeSection === item.id
                                ? "border border-begriff-white bg-transparent font-begriff-serif italic"
                                : `group transition duration-300 ${isScrolled ? "border border-[#242d2f]/85 hover:border-begriff-white" : "border border-begriff-green hover:border-begriff-white"}`
                            }`}
                    >
                        <div className="relative overflow-hidden">
                            <span
                                className={`block transition-transform duration-300 ease-in-out ${activeSection === item.id ? "" : "group-hover:-translate-y-6"
                                    }`}
                            >
                                {item.name}
                            </span>
                            <span
                                className={`absolute left-0 top-6 w-full italic font-begriff-serif transition-transform duration-300 ease-in-out ${activeSection === item.id ? "hidden" : "group-hover:-translate-y-6"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </div>
                    </a>
                ))}
                <div className="fixed top-5 right-3 md:right-10 flex items-center gap-x-2 md:gap-x-6 z-50">
                    <a
                        href="/"
                        className={`relative px-3 py-2 md:px-5 md:py-3 rounded-4xl border overflow-hidden transition-all duration-300 group 
                            ${isModalOpen
                                ? "border bg-black border-black text-begriff-white hover:bg-begriff-brown hover:border-begriff-brown"
                                : "border bg-begriff-white border-begriff-white text-begriff-green hover:bg-black hover:border-black hover:text-begriff-white"
                            }`}
                    >
                        <span
                            className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-12"
                        >
                            Contact
                        </span>
                        <span
                            className="absolute left-0 top-full w-full text-center italic font-begriff-serif transition-transform duration-300 ease-in-out group-hover:-translate-y-9"
                        >
                            Contact
                        </span>
                    </a>
                    <motion.button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`relative cursor-pointer ${isModalOpen ? "text-black" : "delay-300 text-begriff-white"}`}
                        animate={{
                            width: 70,
                            letterSpacing: "0em",
                            opacity: 0.8,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {isModalOpen ? (
                            <div className="flex items-center gap-x-2">
                                <p>Close</p>
                                <HiXMark size={20} />
                            </div>
                        ) : (
                            <div className="flex items-center gap-x-2">
                                <p>Menu</p>
                                <motion.div
                                transition={{ duration: 0.3, ease: "easeInOut"}}
                                >
                                    {isHovered ? <HiMiniBars3BottomLeft size={20} /> : <HiMiniBars3 size={20} />}
                                </motion.div>
                            </div>
                        )}
                    </motion.button>
                </div>
                <motion.div
                    className="fixed top-0 right-0 w-full md:w-1/2 h-screen bg-begriff-white text-black rounded-l-2xl flex justify-center items-center z-40"
                    initial={{ x: "100%" }}
                    animate={{ x: isModalOpen ? "0%" : "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    test
                </motion.div>
            </div>
        </div>
    );
};

export default NavBar;