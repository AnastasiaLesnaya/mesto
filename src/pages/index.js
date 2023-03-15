// импорт стилей
import './index.css';
// импорт начальных карточек
import { objectListCard, classListForm } from '../components/utils/objectList.js';
// импорт классов
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
// импорт переменных
import {
  popupEditOpen, popupAddOpen, popupAdd,
  profileEditForm, profileNameInput, profileJobInput,
} from '../components/utils/constants.js';

// попап зум
const popupZoom = new PopupWithImage('.popup_zoom');
popupZoom.setEventListeners();

// данные пользователя
const userInfo = new UserInfo({
  usernameSelector: '.profile__name',
  userJobSelector: '.profile__job'
});

// попап редактирования профиля
const popupEdit = new PopupWithForm('.popup_edit', {
  callbackFormSubmit: (profileData) => {
    userInfo.setUserInfo({
      name: profileData.name,
      job: profileData.job
    });
    popupEdit.close();
  }
});
popupEdit.setEventListeners();

// функция попап зум
const handleCardClick = function (title, image) {
  popupZoom.open(title, image);
}

// функция добавления новой карточки
const renderCard = function (cardData) {
  const renderCardItem = new Card(cardData, '#cards__item_template', handleCardClick);
  return renderCardItem.generateCard();
}

// отрисовка начальных карточек
const renderInitialCards = new Section({
  items: objectListCard,
  renderer: (cardData) => {
    renderInitialCards.addItem(renderCard(cardData));
  }
}, '.cards');
renderInitialCards.renderItems();


// попап добавления новой карточки
const popupAddCard = new PopupWithForm('.popup_add', {
  callbackFormSubmit: (formValues) => {
    renderInitialCards.addItem(renderCard({
      name: formValues.place,
      link: formValues.picture
    }));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();

// запускаем валидацию форм
const editProfileValidate = new FormValidator(classListForm, profileEditForm);
editProfileValidate.enableValidation();
const addCardValidate = new FormValidator(classListForm, popupAdd);
addCardValidate.enableValidation();

// открытие попапа редактирования
popupEditOpen.addEventListener('click', function() {
  popupEdit.open();
  const currentUserInfo = userInfo.getUserInfo();
  profileNameInput.setAttribute('value', currentUserInfo.name);
  profileJobInput.setAttribute('value', currentUserInfo.job);
});

// открытие попапа добавления места
popupAddOpen.addEventListener('click', function() {
  popupAddCard.open();
  addCardValidate.disableSubmitButton();
});