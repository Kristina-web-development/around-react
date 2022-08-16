import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      name="avatarPopup"
      title="Change profile picture"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          className="form__input"
          type="url"
          id="avatarLink"
          placeholder="Image link"
          name="avatarLink"
          required
        />
        <span className="avatarLink-error form__input-error">
          Please fill out this field.
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
