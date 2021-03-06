import { useState, useEffect } from "react";
import  {cards} from "../cards";
import "./Modal.scss";
import arrows from "../../assets/icons/ic16-import-export.svg";
import arrowDown from "../../assets/icons/ic16-arrow-down.svg";
import arrowUp from "../../assets/icons/ic16-arrow-up.svg";


const Modal = ({ card, showModal, handleHideModal }) => {

  const API_URL = process.env.REACT_APP_API_URL;

  const [buttonActive, setButtonActive] = useState({
    id: "",
    sorting: ""
  });

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (card) {
      fetch(`${API_URL}${cards[card].endpoint}`)
      .then(response => {
        if (response.ok) {
          return response;
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setSortedData(data);
          setLoading(false);
        })
        setLoading(true)
    } 
  }, [card, API_URL]);

  const sort = (list, property) => {
    return list.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  };

  const getIcon = (id) => {
    if (buttonActive.id === id) {
      if (buttonActive.sorting === "") {
        return arrows;
      } else if (buttonActive.sorting === "ascending") {
        return arrowDown;
      } else if (buttonActive.sorting === "descending") {
        return arrowUp;
      }
    }
    return arrows;
  };

  const handleSort = (e) => {
    let sortedData = [...data];
    let sorting = buttonActive.sorting;
    if (buttonActive.id !== e.target.id) {
      sorting = "";
    }
    if (sorting === "") {
      sorting = "ascending";
      sortedData = sort(sortedData, e.target.id);
    } else if (sorting === "ascending") {
      sorting = "descending";
      sortedData = sort(sortedData, e.target.id).reverse();
    } else if (sorting === "descending") {
      sorting = "";
    }
    setButtonActive({ id: e.target.id, sorting: sorting });
    setSortedData(sortedData);
  };

  if (showModal === false) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <p className="modal-header-title">{cards[card].cardTitle}</p>
        <button
          onClick={() => handleHideModal()}
          className="modal-header-button-close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="modal-body-table">
          <div className="modal-body-table-header">
            <div className="modal-body-table-col">
              <div
                id={cards[card].firstColumn}
                className={
                  buttonActive.buttonName === cards[card].firstColumnTitle
                    ? "modal-body-table-col-title active"
                    : "modal-body-table-col-title"
                }
                onClick={(e) => handleSort(e)}
              >
                <span className="title-text">
                  {cards[card].firstColumnTitle}
                </span>
                <img
                  src={getIcon(cards[card].firstColumn)}
                  alt=""
                  className="title-icon"
                ></img>
              </div>
            </div>
            <div className="modal-body-table-col">
              <div
                id={cards[card].secondColumn}
                className={
                  buttonActive.buttonName === cards[card].secondColumnTitle
                    ? "modal-body-table-col-title active"
                    : "modal-body-table-col-title"
                }
                onClick={(e) => handleSort(e)}
              >
                <span className="title-text">
                  {cards[card].secondColumnTitle}
                </span>
                <img
                  src={getIcon(cards[card].secondColumn)}
                  alt=""
                  className="title-icon"
                ></img>
              </div>
            </div>
          </div>
          {loading ? (
            <span className="modal-body-table-content loading">Loading...</span>
          ) : (
            <div className="modal-body-table-content">
              <div className="modal-body-table-col">
                <ul className="modal-body-table-content-list">
                  {sortedData.map((element, id) => {
                    return (
                      <li
                        key={id}
                        className="modal-body-table-content-list-element"
                      >
                        {element[cards[card].firstColumn]}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="modal-body-table-col">
                <ul className="modal-body-table-content-list">
                  {sortedData.map((element, id) => {
                    return (
                      <li
                        key={id}
                        className="modal-body-table-content-list-element"
                      >
                        {element[cards[card].secondColumn]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
