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
          <li>Início</li>
          <li>NFT</li>
          <li>Colecionadores</li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;