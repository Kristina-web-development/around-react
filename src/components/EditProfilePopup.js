import PopupWithForm from "./PopupWithForm";

function EditProfilePopup( { isOpen, onClose } ) {
  return (
    <PopupWithForm
      name="profilePopup"
      title="Edit profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="form__fieldset">
        <input
          className="form__input"
          type="text"
          id="name"
          placeholder="Jacques Cousteau"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-error form__input-error">
          Please fill out this field.
        </span>
        <input
          className="form__input"
          type="text"
          id="job"
          placeholder="Explorer"
          name="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="job-error form__input-error">
          Please fill out this field.
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
