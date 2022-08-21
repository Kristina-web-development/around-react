import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext, useEffect, useRef } from "react";

function EditProfilePopup({ isOpen, onClose, onSubmit }) {

  const currentUser = useContext(CurrentUserContext);

  const currentName = useRef("")
  const currentJob = useRef("")


  useEffect(() => {
      if(isOpen){
        currentName.current.value = currentUser.name;
        currentJob.current.value = currentUser.about;

      }
  },[isOpen])


  return (
    <PopupWithForm
      name="profilePopup"
      title="Edit profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          ref={currentName}
          className="form__input"
          type="text"
          id="name"
          placeholder="name"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-error form__input-error">
          Please fill out this field.
        </span>
        <input
          ref={currentJob}
          className="form__input"
          type="text"
          id="job"
          placeholder="job"
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
