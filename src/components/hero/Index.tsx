import "./Style.css";
//Images
import Logo from "../menu/Logo";
import HeroNFT from "../../assets/nft-hero.png";

const Hero = () =>{
  return(
    <section id="hero">
      <div className="contentHero">
        <h1>Descubrar e colete <span>obras de arte</span> digitais super raras</h1>
        <p>O maior mercado NFT. Criação digital autêntica e verdadeiramente única. Assinado e emitido pelo criador, possibilitado pela tecnologia blockchain</p>
        <button className="button">Explorar</button>
      </div>
        <div className="heroCard">
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
      </div>
    </section>
  )
}

export default Hero;