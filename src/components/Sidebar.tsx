import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
    modalRef: React.RefObject<HTMLDivElement | null>;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, closeSidebar, modalRef }) => {
    const sidebarItems = [
        { name: "HOME", id: "home" },
        { name: "ABOUT", id: "about" },
        { name: "PROMO", id: "promo" },
        { name: "MENU", id: "menu" }
    ];

    const itemVariant = {
        hidden: { x: 30, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }

    return (
        <AnimatePresence>
            <motion.div
                key={isSidebarOpen.toString()}
                ref={modalRef}
                className="fixed top-0 right-0 w-full p-3 md:w-1/2 h-screen bg-begriff-white text-black rounded-l-2xl flex justify-center items-center z-40"
                initial={{ x: "100%" }}
                animate={{ x: isSidebarOpen ? "0%" : "100%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-1 w-full h-full pt-20 pb-10 md:pt-24">
                    <div className="row-span-2 md:row-span-4">
                        <div className="flex flex-col px-10 md:px-20 gap-y-3 md:gap-y-8 w-full h-full font-begriff-serif text-4xl md:text-5xl text-black justify-start">
                            {sidebarItems.map((item) => (
                                <motion.a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={closeSidebar}
                                    className="cursor-default"
                                    variants={itemVariant}
                                    initial="hidden"
                                    animate={isSidebarOpen ? "visible" : "hidden"}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="relative overflow-hidden cursor-pointer group transition duration-300 inline-flex">
                                        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-14">
                                            {item.name}
                                        </span>
                                        <span className="absolute left-0 top-14 w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-14">
                                            {item.name}
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                            <motion.a
                                href="https://gofood.co.id/en/jakarta/restaurant/begriff-kaffee-grogol-302a801f-f216-4e19-b5a1-f36316f0ae17"
                                target="_blank"
                                onClick={closeSidebar}
                                className="cursor-default"
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="relative overflow-hidden cursor-pointer group transition duration-300 inline-flex">
                                    <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-14">
                                        SHOP
                                    </span>
                                    <span className="absolute left-0 top-14 w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-14">
                                        SHOP
                                    </span>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                    <div className="row-span-2 md:row-span-4"></div>
                    <div className="row-span-2 md:row-start-5">
                        <div className="flex flex-col justify-start md:py-3 px-11 md:px-[82px] w-full h-full">
                            <motion.p
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
                                className="font-begriff font-bold text-sm md:text-base text-footer-head"
                            >
                                ADDRESS
                            </motion.p>
                            <motion.p
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
                                className="font-begriff text-xs md:text-sm text-black/50 pt-1 pb-2"
                            >
                                Jl. Kyai Tapa No.101, Tomang, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11440
                            </motion.p>
                            <motion.p
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
                                className="font-begriff pt-2"
                            >
                                +62 819 3210 6158
                            </motion.p>
                        </div>
                    </div>
                    <div className="md:row-start-5 md:pt-4 px-11 md:px-[82px] w-full h-full">
                        <motion.p
                            variants={itemVariant}
                            initial="hidden"
                            animate={isSidebarOpen ? "visible" : "hidden"}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
                            className="font-begriff font-bold text-sm md:text-base text-footer-head"
                        >
                            SOCIALS
                        </motion.p>
                        <a
                            href="https://www.instagram.com/begriffkaffee/"
                            target="_blank"
                            onClick={closeSidebar}
                        >
                            <motion.p
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
                                className="font-begriff text-xs md:text-sm transition-colors duration-100 text-black/50 hover:text-black pt-1 pb-2"
                            >
                                Instagram
                            </motion.p>
                        </a>
                    </div>
                    <div className="md:col-start-2 md:row-start-6 md:pt-4 px-11 md:px-[82px] w-full h-full">
                        <motion.p
                            variants={itemVariant}
                            initial="hidden"
                            animate={isSidebarOpen ? "visible" : "hidden"}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 1.1 }}
                            className="font-begriff font-bold text-sm md:text-base text-footer-head"
                        >
                            OPERATION HOURS
                        </motion.p>
                        <div className="pt-0.5 flex gap-x-3">
                            <motion.p
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
                                className="font-begriff text-xs md:text-sm text-black/50"
                            >
                                Mon - Sun
                            </motion.p>
                            <motion.p
                                variants={itemVariant}
                                initial="hidden"
                                animate={isSidebarOpen ? "visible" : "hidden"}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
                                className="font-begriff text-xs md:text-sm text-black"
                            >
                                09.00 - 21.00
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Sidebar