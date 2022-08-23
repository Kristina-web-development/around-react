import React, { useState, useEffect } from "react";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import PopupWithConfirmation from "./PopupWithConfirmation";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddNewPlacePopupOpen, setIsAddNewPlacePopupOpen] = useState(false);
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = useState(false);
  const [isPopupWithConfirmationOpen, setIsPopupWithConfirmationOpen] =
    useState(false);
  const [cardForRemoval, setCardForRemoval] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((res) => {
        setCards([
          ...cards.map((item) => {
            if (item._id === card._id) {
              return res;
            } else {
              return item;
            }
          }),
        ]);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddNewPlaceClick() {
    setIsAddNewPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddNewPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsPopupWithImageOpen(false);
    setIsPopupWithConfirmationOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setIsPopupWithImageOpen(true);
    setSelectedCard(card);
  }

  function handleAddNewPlaceSubmit({ urlInput, cardTitle }) {
    const cardData = {
      title: cardTitle,
      image: urlInput,
    };
    api
      .addCard(cardData)
      .then((res) => {
        setCards([res, ...cards]);
        setIsAddNewPlacePopupOpen(false);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }

  function onCardRemove(card) {
    setIsPopupWithConfirmationOpen(true);
    setCardForRemoval(card);
  }

  function confirmSubmit(e) {
    e.preventDefault();
    api
      .deleteCard(cardForRemoval._id)
      .then(() => {
        setIsPopupWithConfirmationOpen(false);
        setCards([...cards.filter((card) => card._id !== cardForRemoval._id)]);
        setCardForRemoval({});
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }

  function editAvatarSubmit({ avatarLink }) {
    const data = {
      avatarLink: avatarLink,
    };

    api
      .addUserAvatar(data)
      .then((res) => {
        setCurrentUser({ ...currentUser, avatar: res.avatar });

        setIsEditAvatarPopupOpen(false);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }

  function editProfileSubmit({ name, job }) {
    const data = {
      name: name,
      about: job,
    };

    api
      .addUserInfo(data)
      .then((res) => {
        setCurrentUser({ ...currentUser, name: res.name, about: res.about });

        setIsEditProfilePopupOpen(false);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser({ ...res });
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });

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
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onAddNewPlaceClick={handleAddNewPlaceClick}
            onEditProfileClick={handleEditProfileClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDelete={onCardRemove}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onSubmit={editAvatarSubmit}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onSubmit={editProfileSubmit}
          />

          <AddPlacePopup
            isOpen={isAddNewPlacePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleAddNewPlaceSubmit}
          />

          <ImagePopup
            isOpen={isPopupWithImageOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />

          <PopupWithConfirmation
            isOpen={isPopupWithConfirmationOpen}
            onClose={closeAllPopups}
            onSubmit={confirmSubmit}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
