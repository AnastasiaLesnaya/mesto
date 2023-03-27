// создаём класс карточки (объект, шаблон)
class Card {
// объект карточки; шаблон; user Id; объект данных; handle
constructor(cardObject, templateEl, userId, authorData, handleActions) {
  // данные с карточками и шаблон
  this._card = cardObject;
  this._cardName = this._card.name;
  this._cardImage = this._card.link;
  this._cardTemplate = templateEl;
  // данные пользователя
  this._userId = userId;
  this._cardId = authorData.cardId;
  this._authorId = authorData.authorId;
  // handle
  this._cardZoom = handleActions.handleCardZoom;
  this._cardDelete = handleActions.handleCardDelete;
  this._putLike = handleActions.handleCardLike;
  this._removeLike = handleActions.handleCardDeleteLike;
}

  _createCard() {
    return document.querySelector(this._Cardtemplate)
    .content.querySelector('.cards__item')
    .cloneNode(true);
  }

// метод лайка карточки
// метод удаления карточки
_deleteCard() {
  this._cardElement.remove();
}

// метод отображения кол-ва лайков
renderCardLike(card) {
  this._likeArea = card.likes;
  if (this._likeArea.length === 0) {
    this.likeSelector.textContent = '';
  } else {
    // количество лайков из ответа сервера
    this.likeSelector.textContent = this._likeArea.length;
  }
  if (this._likedCard()) {
    this._likeIcon.classList.add('cards__btn-like_active');
  } else {
    this._likeIcon.classList.remove('cards__btn-like_active');
  }
 }
  // метод проверки наличия лайка
  _likedCard() {
    return this._likeArea.find((userLike) => userLike._id === this._userId);
  }
  // метод обработки добавления и удаления лайков
  _currentLike() {
    if (this._likedCard()) {
      this._removeLike(this._cardId);
    } else {
      this._putLike(this._cardId);
    }
  }

// метод создания карточки
generateCard() {
  this._cardElement = this._createCard();

  this._elementImages = this._cardElement
  .querySelector('.cards__image');

  this._elementName = this._cardElement
  .querySelector('.cards__title');

  this._likeIcon = this._cardElement
  .querySelector('.cards__btn-like');

  this._deleteIcon = this._cardElement
  .querySelector('.cards__btn-delete');

  this.likeSelector = this._cardElement
  .querySelector('.cards__like-counter');
  // передаём данные в карточку
  this._elementName.textContent = this._cardName;
  this._elementImages.src = this._cardImage;
  this._elementImages.alt = this._cardName;
  this.renderCardLike(this._card);

// вешаем обработчики
this._addEventHandlers();
// возвращаем элемент
return this._cardElement;
}

// обработчики для элемента
_addEventHandlers = () => {
  this._likeIcon.addEventListener('click', () => this._currentLike())
    this._elementImages.addEventListener('click', () => this._cardZoom(this._cardName, this._cardImage));
    if (this._userId === this._authorId) {
      this._deleteIcon.addEventListener('click', () =>  this._cardDelete(this._cardElement, this._cardId, this._deleteCard));
    } else {
      this._deleteIcon.remove();
    }
  }
}
export { Card };