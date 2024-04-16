import "./filterspanel.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import UserWatchList from "../user-watch-list/UserWatchList";
import WatchListPlaceHolder from "../watchlist-placeholder/WatchListPlaceHolder";

function FiltersPanel({ handleSetFilters }) {
  const { isAuthenticated } = useAuth0();

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedPerPage, setSelectedPerPage] = useState(20);
  const [amazonSelected, setAmazonSelected] = useState(true);
  const [tntSelected, setTntSelected] = useState(true);

  const options = [20, 40, 60];

  function createFiltersObj() {
    let obj = {};
    obj.keywords = keywords;
    obj.maxPrice = maxPrice;
    obj.selectedPerPage = selectedPerPage;
    obj.amazonSelected = amazonSelected;
    obj.tntSelected = tntSelected;
    return obj;
  }

  function createEmptyFiltersObj() {
    let obj = {};
    obj.keywords = "";
    obj.maxPrice = "";
    obj.tntSelected = true;
    obj.amazonSelected = true;
    obj.selectedPerPage = 20;
    setKeywords("");
    setMaxPrice("");
    setAmazonSelected(true);
    setTntSelected(true);
    setSelectedPerPage(20);
    return obj;
  }

  function handleSetTntSelected() {
    setTntSelected((cur) => !cur);
  }

  function handleSetAmazonSelected() {
    setAmazonSelected((cur) => !cur);
  }

  return (
    <div className="w-80 mh-30 sidebar-container flex-row-between mb-10 b">
      <div className="mh-40 flex-col-center filter-container">
        <div className="w-100 flex-row-between m-10 upper-container">
          <div className="flex-col-center w-100 filters-label-div">
            Set Filters
          </div>
          <div className="w-50 keywords-container">
            <label htmlFor="keywords-input">Keywords</label>
            <input
              type="text"
              id="keyword-input"
              className="p-5 w-100 b"
              value={keywords}
              placeholder="Type Any Keyword"
              onChange={(e) => {
                setKeywords(e.target.value);
              }}
            />
          </div>
          <div className="w-40 ml-10 max-price-container">
            <label htmlFor="keywords-input">Set A Max Price</label>
            <input
              type="text"
              id="max-price-input"
              className="p-5 w-100 b"
              value={maxPrice}
              placeholder="Max Value"
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-100 flex-col-start lower-container">
          <label
            htmlFor="per-page-select"
            className="w-100 ml-10 per-page-label"
          >
            Items Per Page
          </label>
          <div
            id="per-page-select"
            className="w-30 p-5 ml-10 b"
            onClick={() => {
              setOptionsVisible((cur) => !cur);
            }}
          >
            {selectedPerPage}
          </div>
          <div className="p-5 ml-10 b flex-row-around checkbox-container">
            <div className="checkbox-sub-container">
              <span
                id="tnt-checkbox"
                className="bg-primary checkbox"
                onClick={() => {
                  setTntSelected((cur) => !cur);
                }}
                onChange={handleSetTntSelected}
              >
                {tntSelected && (
                  <FontAwesomeIcon icon={faCheck} className="text-color" />
                )}
                {!tntSelected && (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-color unchecked"
                  />
                )}
              </span>
              <span className="ml-5">Troll and Toad</span>
            </div>
            <div className="checkbox-sub-container">
              <span
                id="amazon-checkbox"
                className="bg-primary checkbox"
                onClick={() => {
                  setAmazonSelected((cur) => !cur);
                }}
                onChange={handleSetAmazonSelected}
              >
                {amazonSelected && (
                  <FontAwesomeIcon icon={faCheck} className="text-color" />
                )}
                {!amazonSelected && (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-color unchecked"
                  />
                )}
              </span>
              <span className="ml-5">Amazon</span>
            </div>
          </div>
          {optionsVisible && (
            <div className="w-30 ml-10 options-container">
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
        <div className="w-100 flex-row-around ml-10 mr-10 filter-button-group">
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
      {isAuthenticated ? <UserWatchList /> : <WatchListPlaceHolder />}
    </div>
  );
}

export default FiltersPanel;
