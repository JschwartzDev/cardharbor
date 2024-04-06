import "./card.css";

function Card({ card }) {
  return (
    <div className="w-30 mh-60 flex-row-center b m-10 p-10 card-container">
      <div className="w-100 text-center">{card.name}</div>
      <img src={card.imagesource} alt="" className="w-70 h-70 card-image" />
      <table className="w-100">
        <thead>
          <tr>
            <th>Site</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {card.prices.map((price) => {
            return (
              <tr className="text-center" key={price}>
                <td>{card.sourcesite == "tnt" ? "Troll and Toad" : ""}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Card;
