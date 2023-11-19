import PopupWithForm from "./PopupWithForm";

function DeletePlacePopup(props) {
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete-photo"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Да"
    />
  );
}
export default DeletePlacePopup;