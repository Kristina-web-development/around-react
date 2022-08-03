import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from './Main';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithConfirmation from './PopupWithConfirmation';
import PopupWithImage from './PopupWithImage';
import AddNewPlacePopup from './AddNewPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddNewPlacePopupOpen, setIsAddNewPlacePopupOpen] = useState(false);
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = useState(false);
  const [isPopupWithConfirmationOpen, setIsPopupWithConfirmationOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
    }
    
    function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
    }
    
    function handleAddNewPlaceClick(){
        setIsAddNewPlacePopupOpen(true)
    }

    function handlePopupWithConfirmationClick() {
      setIsPopupWithConfirmationOpen(true)
    
    }
  
  
    function closeAllPopups(){
        setIsAddNewPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsPopupWithImageOpen(false)
        setIsPopupWithConfirmationOpen(false)
        setSelectedCard({})
      }

    function handleCardClick(card){
      setIsPopupWithImageOpen(true)
        setSelectedCard(card)
       
      }
      
      

      return (
      <div className="page">
<div className="page__container">
  <Header />
  <Main 
  onAddNewPlaceClick={handleAddNewPlaceClick}
  onEditProfileClick={handleEditProfileClick}
  onEditAvatarClick={handleEditAvatarClick}
  onCardClick={handleCardClick}
  onCardDelete={handlePopupWithConfirmationClick}
  />
  <Footer />
  <EditAvatarPopup
  isOpen={isEditAvatarPopupOpen}
  onClose={closeAllPopups}
  />

  <EditProfilePopup 
  isOpen={isEditProfilePopupOpen}
  onClose={closeAllPopups}
  />

  <AddNewPlacePopup 
  isOpen={isAddNewPlacePopupOpen}
  onClose={closeAllPopups}
  />

  <PopupWithImage 
  isOpen={isPopupWithImageOpen}
  onClose={closeAllPopups}
  card={selectedCard}

  />

  <PopupWithConfirmation 
  isOpen={isPopupWithConfirmationOpen}
  onClose={closeAllPopups}
  //onPopupWithConfirmationClick={handlePopupWithConfirmationClick}
  />



  
  
</div>
</div>
     

      );
    }

export default App;