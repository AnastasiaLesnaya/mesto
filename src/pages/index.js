// импорт стилей
import './index.css';
// импорт начальных карточек
import { classListForm } from '../components/utils/objectList.js';
// импорт классов
import { Card } from '../components/Card.js';
import { apiFindings } from '../components/utils/apiFindings.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { popupNotice } from '../components/popupNotice.js';
import { Api } from '../components/Api.js';
// импорт переменных
import {
  popupEditOpen, popupAddOpen, popupAdd,
  profileEditForm, profileNameInput, profileJobInput,
  popupAvatarEditForm, iconAvatarEdit
} from '../components/utils/constants.js';

// Объявление экземпляра API
const apiConnect = new Api(apiFindings);
// Переменная для хранения ID пользователя
let userId;

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

// отрисовка начальных карточек с помощью API
const renderInitialCards = new Section({
  renderer: (cardObject) => {
    renderInitialCards.addItem(renderCard(cardObject));
  }
}, '.cards');

// промис
Promise.all([ apiConnect.getUserData(), apiConnect.getInitialCards() ]).then(([ userProfileData, cardObject ]) => {
  userId = userProfileData._id;
  userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about })
  renderInitialCards.renderItems(cardObject.reverse())
  userInfo.setUserAvatar(userProfileData.avatar)
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
    })
    .catch((err) => {
      console.log(`При обновлении аватара возникла ошибка, ${err}`)
    })
    .finally(() => {
      popupEditeAvatar.returnSavingProcessText(); popupEditeAvatar.close()
    })
}
});
popupEditeAvatar.setEventListeners();

// Объявление popup подтверждения удаления карточки
const popupNoticeDelete = new popupNotice("#delete-card", {
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
  profileJobInput.setAttribute('value', currentUserInfo.job);
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