import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="deletePicture"
      title="Are you sure?"
      buttonText="Yes"
      isOpen={isOpen}
      onClose={onClose}
    ></PopupWithForm>
  );
}

export default PopupWithConfirmation;
