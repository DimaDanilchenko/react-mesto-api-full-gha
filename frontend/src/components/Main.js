import React from "react";
import profileImage from "../images/Vector.png";
import profileRedaction from "../images/Redaction.svg";
import addPhoto from "../images/Add.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete, onCardLike}) {
  const currentUser = React.useContext(CurrentUserContext);


  const cardElements = cards.map((card)=>(
    <Card 
      card = {card}
      key = {card._id}
      onCardClick = {onCardClick}
      onCardLike={onCardLike}
      onCardDelete={onCardDelete}
    />
  ))
  return (
    <main className="content">
      <section className="section-profile">
        <div className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img src={currentUser.avatar} className="profile__image" alt="User avatar"/>
              <img
                src={profileImage}
                className="profile__vector-image"
                alt="Button close"
                onClick={onEditAvatar}
              />
            </div>
            <div className="profile__account">
              <div className="profile__text">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button
                  className="profile__redaction"
                  type="button"
                  aria-label="profile-redaction"
                  onClick={onEditProfile}
                >
                  <img
                    src={profileRedaction}
                    alt="Изменить профиль"
                    className="profile__redaction-image"
                  />
                </button>
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__add" type="button" onClick={onAddPlace}>
            <img src={addPhoto} alt="Button add"/>
          </button>
        </div>
      </section>
      <section className="elements">{cardElements}</section>
    </main>

  );
}

export default Main;