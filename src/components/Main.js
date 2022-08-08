import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "../components/Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__image-container"
            onClick={props.onEditAvatarClick}
          >
            <button className="profile__image-overlay"></button>
            <img
              src={userAvatar}
              alt="profile image"
              className="profile__image"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__open-button"
              onClick={props.onEditProfileClick}
            ></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          id="newPlaceButton"
          onClick={props.onAddNewPlaceClick}
          type="button"
          className="profile__add-button"
        ></button>
      </section>

      <section className="gallery">
        <ul className="gallery__container">
          {cards.map((data) => (
            <Card
              name={data.name}
              link={data.link}
              likes={data.likes}
              key={data._id}
              card={data}
              onCardClick={props.onCardClick}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
