import "./Style.css";
import Logo from "./Logo";

const Menu = () =>{
  return(
    <header>
      <div className="logo">
        <Logo />
        <span>CodeNFT</span>
      </div>
      <nav>
        <ul>
          <li><a href="#hero">Início</a></li>
          <li><a href="#nft">NFT</a></li>
          <li><a href="#colaboradores">Colecionadores</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;