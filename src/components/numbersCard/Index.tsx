import "./Style.css";
import { motion } from "framer-motion";

const NumberCard = () =>{
  return(
    <motion.div className="box numberCard"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: .6,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
      <div className="numberCard-container">
        <motion.div className="box number-1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: .9,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          <p>300</p>
          <span>Coleções</span>
        </motion.div>

        <div className="line"></div>
        
        <motion.div className="box number-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          <p>+100K</p>
          <span>Usuários</span>
        </motion.div> 
        
        <div className="line"></div>
        
        <motion.div className="box number-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          <p>+30K</p>
          <span>Negociações</span>
        </motion.div>
        
        <div className="line"></div>
        
        <motion.div className="box number-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          <p>+1M</p>
          <span>Vizualizações</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NumberCard;