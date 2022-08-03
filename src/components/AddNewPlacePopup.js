import PopupWithForm from "./PopupWithForm";

function AddNewPlacePopup(props) {
  return (
    <PopupWithForm
      name={`newPlacePopup`}
      title={`New place`}
      buttonText={`Create`}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="form__fieldset">
        <input
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

export default AddNewPlacePopup;