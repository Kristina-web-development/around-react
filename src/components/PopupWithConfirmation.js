import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation(props) {
  return (
    <PopupWithForm
      name={`deletePicture`}
      title={`Are you sure?`}
      buttonText={`Yes`}
      isOpen={props.isOpen}
      onClose={props.onClose}
    ></PopupWithForm>
  );
}

export default PopupWithConfirmation;
