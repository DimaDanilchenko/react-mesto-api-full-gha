import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [props.isOpen]);
  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleSetDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      title="Редактировать данные"
      name="profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        type="text"
        className="popup__input profile-popup__input profile-popup__input_type_name"
        name="popupName"
        placeholder="Имя"
        minLength={2}
        maxLength={40}
        required=""
        value={name || ''}
        onChange={handleSetName}
      />
      <span className="name-input-error" />
      <input
        id="job-input"
        type="text"
        className="popup__input profile-popup__input profile-popup__input_type_job"
        name="popupJob"
        placeholder="О себе"
        minLength={2}
        maxLength={200}
        required=""
        value={description || ''}
        onChange={handleSetDescription}
      />
      <span className="job-input-error" />
    </PopupWithForm>

  );
}
export default EditProfilePopup;