import { useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const ref = useRef(null);

  return <motion.div 
  className="box" style={{ x, y }} />;
}
