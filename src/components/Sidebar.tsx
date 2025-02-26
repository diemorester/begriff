import { motion } from "framer-motion";

interface SidebarProps {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
    modalRef: React.RefObject<HTMLDivElement | null>;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, closeSidebar, modalRef }) => {
    return (
        <motion.div
            ref={modalRef}
            className="fixed top-0 right-0 w-full md:w-1/2 h-screen bg-begriff-white text-black rounded-l-2xl flex justify-center items-center z-40"
            initial={{ x: "100%" }}
            animate={{ x: isSidebarOpen ? "0%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <button onClick={closeSidebar}>
                test
            </button>
        </motion.div>
    )
}

export default Sidebar