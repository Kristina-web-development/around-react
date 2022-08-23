import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onSubmit }) {
  const avatarLink = useRef("");

  // Sorry if i misunderstood the requirement , but it seemed that here i can freely use useRef instead of useState;

  const formSubmit = (event) => {
    event.preventDefault();

    onSubmit({ avatarLink: avatarLink.current.value });
  };

  useEffect(() => {
    if (isOpen) {
      avatarLink.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatarPopup"
      title="Change profile picture"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={formSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          ref={avatarLink}
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
