function Card({card, link, name, likes, onCardClick, onCardDelete }) {
    
    function handleClick() {
        onCardClick(card)
    }
  
    function handleCardDelete() {
        onCardDelete(card);
      }
    
    
    return(
        <>
<li className="gallery__card">
            <div className="gallery__card-image" 
                style={{ backgroundImage: `url(${link})` }}
                aria-label={`Picture of ${name}`}
                onClick={handleClick}
            />
            <div className="gallery__card-container">
                <h2 className="gallery__card-title">{name}</h2>
                <div className="gallery__card-likes-container">
                    <button type="button" className="gallery__card-button"></button>
                    <p className="gallery__card-likes-counter">{likes.length}</p>
                </div>
                
            </div>
            <button type="button" className="gallery__delete-card" onClick={handleCardDelete}></button>
        </li>
        </>
    );
}

export default Card;