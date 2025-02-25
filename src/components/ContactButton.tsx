import { motion } from "framer-motion";

// Definisikan variants untuk animasi teks
const firstTextVariants = {
  initial: { y: "0%" },
  hover: { y: "-120%" } // Pergeser ke atas lebih jauh
};

const secondTextVariants = {
  initial: { y: "120%" }, // Mulai di bawah dan tersembunyi
  hover: { y: "0%" }
};

interface ContactButtonProps {
  isModalOpen: boolean;
}

const ContactButton = ({ isModalOpen }: ContactButtonProps) => {
  return (
    <motion.a
      href="/"
      className={`
        relative px-3 py-2 md:px-5 md:py-3 rounded-4xl overflow-hidden transition-colors duration-300 group
        ${isModalOpen ? "bg-black group-hover:bg-begriff-yellow text-begriff-white" 
                     : "bg-begriff-white group-hover:bg-black text-begriff-green"}
      `}
      // Saat hover, trigger state "hover" ke children yang punya variants
      whileHover="hover"
    >
      {/* Teks utama */}
      <motion.span
        variants={firstTextVariants}
        initial="initial"
        className="block relative transition-transform duration-300 ease-in-out"
        style={{ zIndex: 2 }}
      >
        Contact
      </motion.span>

      {/* Teks yang muncul dari bawah */}
      <motion.span
        variants={secondTextVariants}
        initial="initial"
        className="absolute left-0 top-0 w-full transition-transform duration-300 ease-in-out"
        style={{
          zIndex: 1,
          // Ganti font saat hover dengan font baru, misal:
          fontFamily: "serif"
        }}
      >
        Contact
      </motion.span>
    </motion.a>
  );
};

export default ContactButton;