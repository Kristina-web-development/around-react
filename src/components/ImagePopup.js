import React from "react";

function ImagePopup(props) {
  return (
    <section
      id="bigPicturePopup"
      className={`popup ${props.isOpen && "popup_active"}`}
    >
      <div className="popup__container fullsize">
        <div className="popup__card-container">
          <button
            type="button"
            className="popup__close-button"
            onClick={props.onClose}
          ></button>
          <img src={props.card.link} alt={`Picture of ${props.card.name}`} />
        </div>
      </div>
    </section>
  );
}

export default ImagePopup; 
