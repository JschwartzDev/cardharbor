import "./cardscontainer.css";
import Card from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function CardsContainer({ data, handlePreviousPage, handleNextPage }) {
  return (
    <div className="w-80 mh-80 b flex-row-between cards-container">
      <div
        className="w-10 mh-80 flex-col-center nav-button btn"
        onClick={() => handlePreviousPage()}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </div>
      <div className="w-80 mh-80 flex-row-start display-card-container">
        {data &&
          data.items.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
      </div>
      <div
        className="w-10 mh-80 flex-col-center nav-button btn"
        onClick={() => handleNextPage()}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </div>
  );
}

export default CardsContainer;
