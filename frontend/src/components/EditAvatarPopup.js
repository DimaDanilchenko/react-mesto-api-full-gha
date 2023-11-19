import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {
  const avatarPopupRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarPopupRef.current.value,
    });
  }
  React.useEffect(() => {
    avatarPopupRef.current.value = '';
  }, [props.isOpen]); 
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="profile-image"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="profile-image-popup"
        type="url"
        className="popup__input profile-image-popup__input profile-image-popup__input_type_link"
        name="avatar"
        placeholder="Ссылка на скачивание"
        required="" 
        ref={avatarPopupRef}/>
      <span className="profile-image-popup-error" />
    </PopupWithForm >
  );
}
export default EditAvatarPopup;