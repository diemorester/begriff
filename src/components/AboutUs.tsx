import { motion } from "framer-motion";
import AboutUsContent from "./AboutUsContent";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delayTime: number) => ({
      opacity: 1,
      y: 0, 
      transition: { duration: 0.3, delay: delayTime}
    }),
  };

  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="w-full h-screen px-8 md:px-24 flex flex-col justify-center md:gap-y-8 items-center relative bg-begriff-green"
    >
      <motion.div variants={itemVariants} custom={0} className="font-begriff-serif w-full space-x-5 z-0">
        <span className="italic border mt-[14px] text-sm rounded-3xl block float-left px-2 py-1 md:px-3 md:py-[6px] place-content-center text-center border-begriff-white text-begriff-white">About Us</span>
        <AboutUsContent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi modi io" />
        <AboutUsContent text="incidunt impedit, facere, aspernatur consequatur distinctio at iure quia obcaecati," />
        <AboutUsContent text="explicabo reiciendis suscipit tempore eaque? Quaerat, exercitationem dolorem!" />
      </motion.div>
      <motion.div className="flex justify-between w-full">
        <motion.div
          variants={itemVariants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          className="font-begriff text-begriff-white tracking-wider text-sm"
        >
          <p>GAK PROPORSIONAL</p>
          <p>GAK WELL-ALLIGNED JUGA</p>
          <p>DASAR MISKIN</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          custom={1.1}
          initial="hidden"
          whileInView="visible"
          className="font-begriff font-extralight text-sm tracking-wider text-begriff-white/85 md:pt-8"
        >
          <p>Kan bole kali pak Mekel desain abstrak2 gitu, kalo khas orang miskin maapin pak.</p>
          <p>ab dolorum debitis saepe eum quasi assumenda minus quod. Recusandae voluptatem eligendi,</p>
          <p>sunt consequuntur cum, nisi aspernatur aliquam incidunt laudantium odio quae iusto.</p>
          <p>Iure, perferendis eos! In fugiat dolores consequuntur illo. Optio, vel. Itaque dolorem</p>
          <p>dignissimos aliquam eaque, vero, omnis soluta architecto sed accusamus, non minus minima sequi ex!</p>
        </motion.div>
        <div/>
      </motion.div>
    </motion.section>
  )
}

export default AboutUs