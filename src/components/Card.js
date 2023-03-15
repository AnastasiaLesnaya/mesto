// создаём класс карточки (объект, шаблон)
class Card {
  constructor(object, templateEl, handleCardClick) {
    this._name = object.name;
    this._image = object.link;
    this._template = templateEl;
    this._handleCardClick = handleCardClick;
  }
  _createCard() {
    return document.querySelector(this._template)
    .content.querySelector('.cards__item')
    .cloneNode(true);
  }

// метод лайка карточки
_likeCard = (evt) => {
  evt.target.classList.toggle('cards__btn-like_active');
}

// метод удаления карточки
_deleteCard() {
  this._cardElement.remove();
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

  this._elementName.textContent = this._name;
  this._elementImages.src = this._image;
  this._elementImages.alt = this._name;

// вешаем обработчики
this._addEventHandlers();
// возвращаем элемент
return this._cardElement;
}

// обработчики для элемента
_addEventHandlers = () => {
  this._likeIcon.addEventListener('click', evt => this._likeCard(evt))
  this._deleteIcon.addEventListener('click', evt => this._deleteCard(evt));
  this._elementImages.addEventListener('click', () => this._handleCardClick(this._name, this._image));
  }
}

// экспортируем класс
export { Card };