import popupCloseImg from '../images/Close_Icon.svg';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup photo-popup ${card ? "popup_open" : ""}`}>
      <div className="photo-popup__container">
        <button className="photo-popup__close" aria-label="photo-popup-close" onClick={onClose}>
          <img
            className="popup__close photo-popup__image"
            src={popupCloseImg}
            alt="Закрыть окно"
          />
        </button>
        <img className="photo-popup__photo" src={card?.link} alt={card?.name}/>
        <h2 className="photo-popup__text">{card?.name}</ h2>
      </div>
    </div>
  );
}
export default ImagePopup;