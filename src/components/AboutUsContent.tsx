import { motion } from 'framer-motion'

const AboutUsContent = ({ text }: { text: string }) => {
    const containerVariants = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.009 },
        },
    };

    const letterVariants = {
        hidden: { filter: "blur(8px)", opacity: 0},
        visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.5}},
    };

    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='md:text-4xl/15 font-light text-begriff-white'
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AboutUsContent