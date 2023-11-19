import React from "react";
import success from '../images/Union.svg';
import fail from '../images/Union2.svg';
import popupCloseImg from '../images/Close_Icon.svg';

function InfoTooltip(props) {
  return (
    <div className={`popup registration-popup ${props.isOpen ? "popup_open" : ""}`}>
      <div className="registration-popup__container">
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
        <img
          className="registration-popup__image"
          src={props.status ? success : fail}
          alt={props.status ? "Успешно" : "Ошибка"}
        />
        <p className="registration-popup__text">
          {props.status
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip;