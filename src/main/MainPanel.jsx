import "./mainpanel.css";
import CardsContainer from "../cards-container/CardsContainer";
import FiltersPanel from "../filters-panel/FiltersPanel";

import { useEffect, useState } from "react";

function MainPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    currentPage: currentPage,
    keywords: "",
    priceLow: "",
    priceHigh: "",
    selectedPerPage: 20,
  });
  const [data, setData] = useState("");
  const [totalPages, setTotalPages] = useState("");

  const handleSetFilters = (obj) => {
    setFilters(obj);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => {
        return currentPage + 1;
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => {
        return currentPage - 1;
      });
    }
  };

  useEffect(() => {
    fetch(
      `http://localhost:4400/allcards?currentPage=${currentPage}&keywords=${filters.keywords}&priceLow=${filters.priceLow}&priceHigh=${filters.priceHigh}&selectedPerPage=${filters.selectedPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setTotalPages(Math.ceil(data.total / filters.selectedPerPage));
      });
  }, [currentPage, filters]);
  return (
    <div className="main-container w-100 mh-90 flex-col-center">
      <FiltersPanel handleSetFilters={handleSetFilters} />
      <CardsContainer
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        data={data}
      />
    </div>
  );
}

export default MainPanel;
