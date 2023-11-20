import "./Style.css";
import { motion } from "framer-motion";
//Images
import Logo from "../menu/Logo";
import HeroNFT from "../../assets/nft-hero.png";

const Hero = () =>{
  return(
    <section id="hero">
      <motion.div className="box contentHero"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: .3,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <h1>Descubrar e colete <span>obras de arte</span> digitais super raras</h1>
        <p>O maior mercado NFT. Criação digital autêntica e verdadeiramente única. Assinado e emitido pelo criador, possibilitado pela tecnologia blockchain</p>
        <button className="button">Explorar</button>
      </motion.div>

      <motion.div className="box heroCard"    
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: .5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <div className="heroTop">
          <div className="rate">
            <p>TOP 1</p>
          </div>
          <img className="heroImg" src={HeroNFT} alt="" />
        </div>
        <div className="cardBottom">
          <div className="cardBottom-left">
            <p>Apple Muu</p>
            <span>By Steve Jobs</span>
            <div className="cardBottom-left-price">
              <Logo />
              <p>18 ETH</p>
            </div>
          </div>
          <div className="cardBottom-right">
            <button className="button">Comprar</button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;