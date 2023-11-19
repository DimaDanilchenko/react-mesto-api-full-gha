import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardDelete, onCardLike}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__heart ${isLiked && 'element__heart_active'}` 
  );
  function handleCardClick() {
    onCardClick(card);
  }
  function handleLikeClick(){
    onCardLike(card);
  }
  function handleDeleteClick(){
    onCardDelete(card);
  }
  return (
    <div className="element">
      {isOwn && <button className='element__delete element__delete_active' onClick={handleDeleteClick} />}
      <img alt={card.name} className="element__image" src={card.link} onClick={handleCardClick} />
      <div className="element__block">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__heart-area">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}/>
          <p className="element__heart-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;