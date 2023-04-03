// импорт стилей
import './index.css';
// импорт начальных карточек
//import { classListForm } from '../components/utils/objectList.js';
// импорт классов
import { Card } from '../components/Card.js';
//import { apiFindings } from '../components/utils/apiFindings.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupNotice } from '../components/PopupNotice.js';
import { Api } from '../components/Api.js';
// импорт переменных
import {
  popupEditOpen, popupAddOpen, popupAdd,
  profileEditForm, profileNameInput, profileJobInput,
  popupAvatarEditForm, iconAvatarEdit
} from '../components/utils/constants.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    'content-Type': 'application/json',
    authorization: "7a41bbcd-7273-4261-a42b-1d34f24ccc05"
  },
});

// данные пользователя
const userInfo = new UserInfo({
  usernameSelector: '.profile__name',
  userJobSelector: '.profile__job',
  userAvatarSelector: '.profile__avatar'
});

// отрисовка начальных карточек с помощью API
const section = new Section({
  renderer: (renderCard) }, '.cards');

Promise.all([api.getUserInfo(), api.getAllCards()])
 .then(([user, cards]) => {
   userInfo.setUserInfo(user);
   section.renderItems(cards.reverse());
 })
 .catch((err) => {
   console.log(err);
 });

// Объявление экземпляра API
const apiConnect = new Api(api);
// Переменная для хранения ID пользователя
let userId;

// попап зум
const popupZoom = new PopupWithImage('.popup_zoom');
popupZoom.setEventListeners();


// попап редактирования профиля
const popupEdit = new PopupWithForm('.popup_edit', {
  callbackFormSubmit: (profileData) => {
    userInfo.setUserInfo({
      name: profileData.name,
      about: profileData.about
    });
    popupEdit.close();
  }
});
popupEdit.setEventListeners();


// функция добавления новой карточки
const renderCard = function (cardObject) {
  const CardItem = new Card(cardObject, '#cards__item_template', userId, 
  { cardId: cardObject._id, authorId: cardObject.owner._id, }, {
  // увеличение картинки
   handleCardZoom: (place, picture) => { popupImageZoom.open(place, picture) },
  // удаление карточки
    handleCardDelete: (cardElement, cardId) => { popupNoticeDelete.open(cardElement, cardId) },
    // Добавление лайка
    handleCardLike: (cardId) => { apiConnect.putCardLike(cardId)
      .then((res) => {
        cardItem.renderCardLike(res);
      })
      .catch((err) => { console.log(`При лайке карточки возникла ошибка, ${err}`) })
  },
  // Удаление лайка
  handleCardDeleteLike: (cardId) => { apiConnect.deleteCardLike(cardId)
      .then((res) => {
        cardItem.renderCardLike(res);
        })
        .catch((err) => { console.log(`При дизлайке карточки возникла ошибка, ${err}`) })
    },
  });
  return cardItem.generateCard();
}

// промис
Promise.all([ apiConnect.getUserData(), apiConnect.getInitialCards() ]).then(([ userProfileData, cardObject ]) => {
  userId = userProfileData._id;
  userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about })
  renderInitialCards.renderItems(cardObject.reverse());
  userInfo.setUserAvatar(userProfileData.avatar);
})
.catch((err) => { console.log(`Возникла ошибка, ${err}`) })

// Объявление popup всплывающего изображения
const popupImageZoom = new PopupWithImage('#image-popup');
popupImageZoom.setEventListeners();
// Объявление popup редактирования аватара
const popupEditeAvatar = new PopupWithForm('#avatar-popup', {
callbackFormSubmit: (userProfileData) => { popupEditeAvatar.putSavingProcessText(); apiConnect.sendAvatarData(userProfileData)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      popupEditeAvatar.close();
    })
    .catch((err) => {
      console.log(`При обновлении аватара возникла ошибка, ${err}`)
    })
    .finally(() => {
      popupEditeAvatar.returnSavingProcessText();
    })
}
});
popupEditeAvatar.setEventListeners();

// Объявление popup подтверждения удаления карточки
const popupNoticeDelete = new PopupNotice("#delete-card", {
callbackNotice: (cardElement, cardId) => {
  apiConnect.deleteCard(cardId)
    .then(() => { popupNoticeDelete.close(); cardElement.remove(); })
    .catch((err) => { console.log(`При удалении карточки возникла ошибка, ${err}`) })
}
});
popupNoticeDelete.setEventListeners();
// Объявление popup редактирования профиля
const popupEditeProfile = new PopupWithForm('#profile-popup', {
callbackFormSubmit: (userProfileData) => {
  popupEditeProfile.putSavingProcessText();
  apiConnect.sendUserData(userProfileData)
    .then((res) => { userInfo.setUserInfo({ username: res.name, description: res.about }) })
    .catch((err) => { console.log(`При редактировании профиля возникла ошибка, ${err}`) })
    .finally(() => {
      popupEditeProfile.returnSavingProcessText();
      popupEditeProfile.close()
    })
}
});
popupEditeProfile.setEventListeners();


// попап добавления новой карточки
const popupAddCard = new PopupWithForm('.popup_add', {
  callbackFormSubmit: (formValues) => {
    popupAddCard.putSavingProcessText();
    apiConnect.addNewCard({ name: formValues.place, link: formValues.picture })
      .then((card) => { renderInitialCards.addItem(renderCard(card)) })
      .catch((err) => { console.log(`При добавлении новой карточки возникла ошибка, ${err}`) })
      .finally(() => {
        popupAddCard.returnSavingProcessText();
        popupAddCard.close()
      })
  }
});
popupAddCard.setEventListeners();

// запускаем валидацию форм
const editProfileValidate = new FormValidator(classListForm, profileEditForm);
editProfileValidate.enableValidation();
const addCardValidate = new FormValidator(classListForm, popupAdd);
addCardValidate.enableValidation();
const editProfileAvatarValidate = new FormValidator(classListForm, popupAvatarEditForm);
editProfileAvatarValidate.enableValidationCheck();

// открытие попапа редактирования
popupEditOpen.addEventListener('click', function() {
  popupEdit.open();
  editProfileValidate.resetValidation();
  const currentUserInfo = userInfo.getUserInfo();
  profileNameInput.setAttribute('value', currentUserInfo.name);
  profileJobInput.setAttribute('value', currentUserInfo.about);
});

// иконка изменения аватара
iconAvatarEdit.addEventListener('click', function () {
  popupEditeAvatar.open();
  editProfileAvatarValidate.resetValidation();
});

// открытие попапа добавления места
popupAddOpen.addEventListener('click', function() {
  popupAddCard.open();
  addCardValidate.resetValidation();
});