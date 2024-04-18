import "./mainpanel.css";
import CardsContainer from "../cards-container/CardsContainer";
import FiltersPanel from "../filters-panel/FiltersPanel";

import { useEffect, useState } from "react";

function MainPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    currentPage: currentPage,
    keywords: "",
    maxPrice: "",
    tntSelected: true,
    amazonSelected: true,
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
    if (filters.tntSelected && !filters.amazonSelected) {
      fetch(
        `https://cardharbor-api.onrender.com/tntcards?currentPage=${currentPage}&keywords=${filters.keywords}&maxPrice=${filters.maxPrice}&selectedPerPage=${filters.selectedPerPage}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setTotalPages(Math.ceil(data.total / filters.selectedPerPage));
        });
    } else if (filters.amazonSelected && !filters.tntSelected) {
      fetch(
        `https://cardharbor-api.onrender.com/amazoncards?currentPage=${currentPage}&keywords=${filters.keywords}&maxPrice=${filters.maxPrice}&selectedPerPage=${filters.selectedPerPage}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setTotalPages(Math.ceil(data.total / filters.selectedPerPage));
        });
    } else {
      fetch(
        `https://cardharbor-api.onrender.com/allcards?currentPage=${currentPage}&keywords=${filters.keywords}&maxPrice=${filters.maxPrice}&selectedPerPage=${filters.selectedPerPage}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setTotalPages(Math.ceil(data.total / filters.selectedPerPage));
        });
    }
  }, [currentPage, filters]);
  return (
    <div className="main-container w-100 mh-90 flex-col-center mb-10">
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
