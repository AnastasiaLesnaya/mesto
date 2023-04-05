// импорт стилей
import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { Api } from '../components/Api.js';
// импорт переменных
import {
  popupEditOpen, popupAddOpen, popupAdd,
  profileEditForm, profileNameInput, profileJobInput,
  popupAvatarEditForm, iconAvatarEdit
} from '../components/utils/constants.js';

// для валидации
const classListForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_visible',
};

// API, токен
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

function userId() {
  return userInfo.getUserId();
}

// шаблон
//const templateCard = document.querySelector("#cards__item_template");

// отрисовка начальных карточек с помощью API
const section = new Section({ renderer: renderCard }, ".cards");

Promise.all([api.getUserInfo(), api.getAllCards()])
 .then(([user, cards]) => {
   userInfo.setUserInfo(user);
   section.renderItems(cards.reverse());
 })
 .catch((err) => {
   console.log(`При загрузке начальных данных возникла ошибка, ${err}`);
 });

 // запускаем валидацию форм
const editProfileValidate = new FormValidator(classListForm, profileEditForm);
editProfileValidate.enableValidation();
const addCardValidate = new FormValidator(classListForm, popupAdd);
addCardValidate.enableValidation();
const editProfileAvatarValidate = new FormValidator(classListForm, popupAvatarEditForm);
editProfileAvatarValidate.enableValidation();

// попап редактирования профиля
const popupEdit = new PopupWithForm('.popup_edit', (data) => {
  popupEdit.showLoading(true);
  api.setUserInfo(data)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEdit.close();
  })
  .catch((err) => {
    console.log(`Возникла ошибка, ${err}`);
  })
  .finally(() => {
    popupEdit.showLoading(false);
  });
});

// попап добавления новой карточки
const popupAddCard = new PopupWithForm('.popup_add', (data) => {
  popupAddCard.showLoading(true);
    api.addNewCard(data)
      .then((res) => { 
        const elem = createNewCard(res);
        section.addItem(elem);
        popupAddCard.close();
      })
      .catch((err) => { 
        console.log(`При добавлении новой карточки возникла ошибка, ${err}`);
})
      .finally(() => {
        popupAddCard.showLoading(false);
      })
  });

// попап подтверждения удаления карточки
const popupNoticeDelete = new PopupWithConfirmation("#delete-card", () => {
  const { data, deleteCard } = popupNoticeDelete.getData();
    api.deleteCard(data._id)
      .then(() => {
        deleteCard();
        popupNoticeDelete.close();
      })
      .catch((err) => {
        console.log(`При удалении карточки возникла ошибка, ${err}`);
  });
});

// функция создания новой карточки
function createNewCard(data) {
  const card = new Card(data, '#cards__item_template', userId, handleCardClick, handleCardDelete,
    (id) => {
      api.likeCard(id)
      .then((res) => {
        card.renderCardLike(res);
        card.currentLike(res);
      })
    .catch((err) => {
      console.log(`При лайке карточки возникла ошибка, ${err}`);
    });
  },
  (id) => {
    api.dislikeCard(id)
    .then((res) => {
      card.renderCardLike(res);
      card.currentLike(res);
    })
    .catch((err) => {
      console.log(`При дизлайке карточки возникла ошибка, ${err}`);
    });
  });

  return card.createCard();
}

// Объявление popup редактирования аватара
const popupEditeAvatar = new PopupWithForm('#avatar-popup', (data) => {
  popupEditeAvatar.showLoading(true);
  api.setAvatar(data)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEditeAvatar.close();
  })
  .catch((err) => {
    console.log(`При обновлении аватара возникла ошибка, ${err}`)
  })
  .finally(() => {
    popupEditeAvatar.showLoading(false);
  });
});

// присваивание введеных значений для попапа с открытой картинкой
function handleCardClick(name, link) {
  popupZoom.open(name, link);
}

function handleCardDelete(data, deleteCard) {
  popupNoticeDelete.getData();
  popupNoticeDelete.setData(data, deleteCard);
}

// функция создания карточек из каждого объекта массива
function renderCard(data) {
  const newCard = createNewCard(data);
  section.addItem(newCard);
}

// открытие попапа редактирования
popupEditOpen.addEventListener('click', function() {
  profileNameInput.value = userInfo.getUserInfo().name;
  profileJobInput.value = userInfo.getUserInfo().about;
  popupEdit.open();
  editProfileValidate.resetValidation();
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

// попап зум
const popupZoom = new PopupWithImage('.popup_zoom');
popupZoom.setEventListeners();


//слушатели событий
popupEditeAvatar.setEventListeners();
popupEdit.setEventListeners();
popupAddCard.setEventListeners();
popupNoticeDelete.setEventListeners();