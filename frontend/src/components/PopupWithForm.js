import popupCloseImg from '../images/Close_Icon.svg';

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name}-popup ${props.isOpen ? "popup_open" : ""}`}>
      <div className="profile-image-popup__container">
        <button
          className="profile-image-popup__close"
          aria-label="profile-image-popup-close"
          onClick={props.onClose}
        >
          <img
            className="popup__close profile-image-popup__image"
            src={popupCloseImg}
            alt="Закрыть окно"
          />
        </button>
        <h3 className="profile-image-popup__title">{props.title}</h3>
        <form
          name={props.name}
          method="post"
          className="popup__form profile-image-popup__form"
          onSubmit={props.onSubmit}
        >
          {props.children}
          <span className="profile-image-popup-error" />
          <button className="popup__button profile-image-popup__save" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>

  );
}

export default PopupWithForm;