import "./Modal.scss";

const Modal = ({ showModal, handleHideModal }) => {
  if (showModal === false) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <p className="modal-header-title">Starlink</p>
        <button
          onClick={() => handleHideModal()}
          className="modal-header-button-close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="modal-body-table">
          <div className="modal-body-table-header">
            <div className="modal-body-table-col">
              <div className="modal-body-table-col-title">Type</div>
            </div>
            <div className="modal-body-table-col">
              <div className="modal-body-table-col-title">Status</div>
            </div>
          </div>
          <div className="modal-body-table-content">
            <div className="modal-body-table-col">
              <ul className="modal-body-table-content-list">
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
              </ul>
            </div>
            <div className="modal-body-table-col">
              <ul className="modal-body-table-content-list">
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
                <li className="modal-body-table-content-list-element">
                  Dragon
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
