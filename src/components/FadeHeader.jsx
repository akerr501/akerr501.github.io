import { motion } from "framer-motion";


function FadeHeader({title}) {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0}}
      transition={{ duration: 0.3 }}
    >
      <h3 className="mb-1 mt-4 text-center">{title}</h3>
    </motion.div>
  );
}

export default FadeHeader;
