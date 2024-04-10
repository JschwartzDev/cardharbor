import "./filterspanel.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import UserWatchList from "../user-watch-list/UserWatchList";

function FiltersPanel({ handleSetFilters }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [priceLow, setPriceLow] = useState("");
  const [priceHigh, setPriceHigh] = useState("");
  const [selectedPerPage, setSelectedPerPage] = useState(20);

  const options = [20, 40, 60];

  function createFiltersObj() {
    let obj = {};
    obj.keywords = keywords;
    obj.priceLow = priceLow;
    obj.priceHigh = priceHigh;
    obj.selectedPerPage = selectedPerPage;
    return obj;
  }

  function createEmptyFiltersObj() {
    let obj = {};
    obj.keywords = "";
    obj.priceLow = "";
    obj.priceHigh = "";
    obj.selectedPerPage = 20;
    setKeywords("");
    setPriceHigh("");
    setPriceLow("");
    setSelectedPerPage(20);
    return obj;
  }

  return (
    <div className="w-20 mr-10 mh-80">
      <div className="w-100 mh-40 b flex-col-start mr-10 filter-container">
        <div className="w-80 flex-col-start m-10">
          <label htmlFor="keyword-input">Keywords</label>
          <input
            id="keyword-input"
            type="text"
            className="w-80 p-5"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
          />
        </div>
        <div className="w-80 flex-row-start m-10">
          <div className="w-50">
            <span>$ </span>
            <input
              type="text"
              className="p-5 w-50"
              onChange={(e) => {
                setPriceLow(e.target.value);
              }}
            />
            <span className="ml-10"> to</span>
          </div>
          <div className="w-50">
            <span>$ </span>
            <input
              type="text"
              className="p-5 w-50"
              onChange={(e) => {
                setPriceHigh(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-100 flex-col-start">
          <label htmlFor="per-page-select" className="w-50 ml-10">
            Items Per Page
          </label>
          <div
            id="per-page-select"
            className="w-50 p-5 ml-10 b"
            onClick={() => {
              setOptionsVisible((cur) => !cur);
            }}
          >
            {selectedPerPage}
          </div>
          {optionsVisible && (
            <div className="w-50 ml-10 options-container">
              {options.map((option) => {
                return (
                  <div
                    className="w-100 p-5 b option"
                    key={option}
                    onClick={() => {
                      setOptionsVisible(false);
                      setSelectedPerPage(option);
                    }}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="w-100 flex-row-around ml-10 mr-10">
          <button
            className="p-5 w-50 btn"
            onClick={() => {
              let obj = createEmptyFiltersObj();
              handleSetFilters(obj);
            }}
          >
            Clear
          </button>
          <button
            className="p-5 w-50 btn"
            onClick={() => {
              let obj = createFiltersObj();
              handleSetFilters(obj);
            }}
          >
            Apply
          </button>
        </div>
      </div>
      {isAuthenticated && <UserWatchList />}
    </div>
  );
}

export default FiltersPanel;
