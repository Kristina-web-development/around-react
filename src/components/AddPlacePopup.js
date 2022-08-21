import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onSubmit }) {

  const urlInput = useRef("");
  const cardTitle = useRef("");
  
  useEffect(() => {
    if(isOpen){
      urlInput.current.value = "";
      cardTitle.current.value = ""
    }
  },[isOpen])


  return (
    <PopupWithForm
      name="newPlacePopup"
      title={`New place`}
      buttonText={`Create`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          ref={cardTitle}
          className="form__input"
          type="text"
          id="cardTitle"
          placeholder="Title"
          name="cardTitle"
          minLength="1"
          maxLength="30"
          required
        />
        <span className="cardTitle-error form__input-error">
          Please fill out this field.
        </span>
        <input
          ref={urlInput}
          className="form__input"
          type="url"
          id="cardLink"
          placeholder="Image link"
          name="cardLink"
          required
        />
        <span className="cardLink-error form__input-error">
          Please enter a web address.
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
