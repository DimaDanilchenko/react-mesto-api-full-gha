import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleSetLink(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: name,
      link: link,
    });
  }
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]); 
  return (
    <PopupWithForm
      title="Новое место"
      name="add-photo"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="name-foto-input"
        type="text"
        className="popup__input add-photo-popup__input add-photo-popup__input_type_photo"
        name="name"
        placeholder="Название"
        minLength={2}
        maxLength={40}
        required=""
        onChange={handleSetName}
        value={name}
      />
      <span className="name-foto-input-error" />
      <input
        id="link-photo-input"
        type="url"
        className="popup__input add-photo-popup__input add-photo-popup__input_type_link"
        name="link"
        placeholder="Ссылка на скачивание"
        required=""
        onChange={handleSetLink}
        value={link}
      />
      <span className="link-photo-input-error" />
    </PopupWithForm>
  );
}
export default AddPlacePopup;