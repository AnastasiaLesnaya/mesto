// создаём класс карточки (объект, шаблон)
export class Card {
constructor( data, templateElem, userId, handleCardClick, handleCardDelete, likeCardApi, dislikeCardApi ) {
  // данные с карточками и шаблон
  this._data = data;
  this._cardName = this._data.name;
  this._cardImage = this._data.link;
  this._templateElem = templateElem;
  this._userId = userId;
  this._cardEl = this._templateElem.querySelector('.cards__item');
  
  this._handleCardDelete = handleCardDelete;
  this._handleCardClick = handleCardClick;
  this._likeCardApi = likeCardApi;
  this._dislikeCardApi = dislikeCardApi;
  this._isLiked = data.likes.length !== 0 ? data.likes.find((item) => item._id === this._userId()) : false;
}

// метод создания карточки
createCard() {
  this._cardElement = this._cardEl.cloneNode(true);

  this._likeSelector = this._cardElement
  .querySelector('.cards__like-counter');
  this.renderCardLike(this._data);

  this._elementImages = this._cardElement
  .querySelector('.cards__image');

  this._elementName = this._cardElement
  .querySelector('.cards__title');

  this._likeIcon = this._cardElement
  .querySelector('.cards__btn-like');

  this._deleteIcon = this._cardElement
  .querySelector('.cards__btn-delete');

  // передаём данные в карточку
  this._elementImages.src = this._cardImage;
  this._elementImages.alt = this._cardName;
  this._elementName.textContent = this._cardName;

  this._isLiked ? this._likeIcon.classList.add("cards__btn-like_active") : null;
  
  this._isThisUser(this._data);
  // вешаем обработчики
  this._addEventHandlers();
// возвращаем элемент
return this._cardElement;
}

_isThisUser(data) {
  if (data.owner._id !== this._userId()) {
    this._deleteIcon.remove();
  }
}

// обработчики для элемента
_addEventHandlers() {
  this._deleteIcon.addEventListener("click", () => {
    this._handleCardDelete(this._data, this._deleteCard.bind(this));
  });

  this._likeIcon.addEventListener('click', () =>
    this._currentLikeApi()
  );

  this._elementImages.addEventListener('click', () => {
    this._handleCardClick(this._data.link, this._data.name);
  });
}

renderCardLike(data) {
  this._likeSelector.textContent = data.likes.length;
}

currentLike(data) {
  const res = data.likes.some((el) => {
    return el._id === this._userId();
  });
  if (!res) {
    this._dislikeCard();
  } else {
    this._likeCard();
  }
}

// метод удаления карточки
_deleteCard() {
  this._cardEl.remove();
  this._cardElement.remove();
  this._cardEl = null;
}

_dislikeCard() {
  this._likeIcon.classList.remove("cards__btn-like_active")
}
_likeCard() {
  this._likeIcon.classList.add("cards__btn-like_active")
}

_currentLikeApi() {
  if (this._likeIcon.classList.contains("cards__btn-like_active")) {
    this._dislikeCardApi(this._data._id);
  } else {
    this._likeCardApi(this._data._id);
  }
}

_handleImageClick() {
  this._handleCardClick(this._data.link, this._data.name,);
  }
}