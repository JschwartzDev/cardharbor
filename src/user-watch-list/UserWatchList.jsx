import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./userwatchlist.css";

const UserWatchList = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [newWatchListItem, setNewWatchListItem] = useState("");
  const [currentWatchList, setCurrentWatchList] = useState([]);

  if (isAuthenticated) {
    useEffect(() => {
      fetch(
        `https://cardharbor-api.onrender.com/userwatchlist?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.items[0].watchlist.length > 0) {
            setCurrentWatchList(data.items[0].watchlist.reverse());
          }
        });
    }, [currentWatchList]);
  }

  const addWatchListItem = () => {
    const reqParams = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, item: newWatchListItem }),
    };
    fetch("https://cardharbor-api.onrender.com/userwatchlist", reqParams)
      .then((res) => res.json())
      .then((data) => {
        setCurrentWatchList(data.items.reverse());
        setNewWatchListItem("");
      });
  };

  const deleteWatchListItem = (item) => {
    const reqParams = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, item: item }),
    };
    fetch("https://cardharbor-api.onrender.com/userwatchlist/delete", reqParams)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setCurrentWatchList(data.items.reverse());
        } else {
          setCurrentWatchList([]);
        }
      });
  };

  return (
    <div className="mh-30 flex-col-start watch-list-container">
      <div className="w-90 flex-col-start m-10">
        <div className="w-100 label">Add to Watch List</div>
        <input
          id="watchlist-input"
          type="text"
          className="w-80 p-5"
          value={newWatchListItem}
          onChange={(e) => {
            setNewWatchListItem(e.target.value);
          }}
        />

        <FontAwesomeIcon
          icon={faPlus}
          className="icon ml-10"
          onClick={() => {
            currentWatchList.push(newWatchListItem);
            addWatchListItem();
          }}
        />
      </div>
      <div className="w-100 flex-col-start mh-20 ml-10 mb-10">
        <div className="w-100 label">Your Watched Cards</div>
        <div className="w-100 flex-col-start watched-cards-list-container">
          {currentWatchList.map((item) => {
            return (
              <div className="w-90 flex-row-between h-box p-10 mb-5" key={item}>
                {item}
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  className="inverse-icon"
                  onClick={() => {
                    deleteWatchListItem(item);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserWatchList;
