import "./Style.css";

const NumberCard = () =>{
  return(
    <div className="numberCard">
      <div className="numberCard-container">
        <div className="number-1">
          <p>300</p>
          <span>Coleções</span>
        </div>
        <div className="line"></div>
        <div className="number-2">
          <p>+100K</p>
          <span>Usuários</span>
        </div>
        <div className="line"></div>
        <div className="number-3">
          <p>+30K</p>
          <span>Negociações</span>
        </div>
        <div className="line"></div>
        <div className="number-4">
          <p>+1M</p>
          <span>Vizualizações</span>
        </div>
      </div>
    </div>
  )
}

export default NumberCard;