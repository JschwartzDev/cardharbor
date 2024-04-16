import "./card.css";

function Card({ card }) {
  //links appear with an extra " right before the path, the " is removed by below code
  function setLink(priceObj, card) {
    if (priceObj === "") {
      return card.link.replace('"', "");
    }

    if (priceObj.sourcesite.toLowerCase().includes("troll")) {
      if (card.link[0].length === 1) {
        return card.link.replace('"', "");
      } else {
        return card.link[0].replace('"', "");
      }
    } else if (priceObj.sourcesite.toLowerCase().includes("amazon")) {
      if (card.link[0].length === 1) {
        return card.link.replace('"', "");
      } else {
        return card.link[1].replace('"', "");
      }
    }
  }
  return (
    <div className="w-30 mh-60 flex-row-center b m-10 p-10 card-container">
      <div className="w-100 text-center card-name">{card.name}</div>
      <img src={card.imagesource} alt="" className="w-70 h-70 card-image" />
      <table className="w-100">
        <thead>
          <tr>
            <th>Site</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* if no price is grabbed but card exists, trollandtoad may be doing an inventory audit */}
          {card.prices.length < 1 && (
            <tr>
              <td>
                <a href={setLink("", card)} target="_blank" className="link">
                  Possible inventory audit on trollandtoad.com
                </a>
              </td>
            </tr>
          )}
          {card.prices.length > 0 &&
            card.prices.map((price) => {
              const obj = JSON.parse(price);

              return (
                <tr className="text-center" key={obj.price}>
                  <td>
                    <a
                      href={setLink(obj, card)}
                      target="_blank"
                      className="link"
                    >
                      <i>{obj.sourcesite}</i>
                    </a>
                  </td>
                  <td>{obj.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Card;
