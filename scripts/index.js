// импорт
import { Card } from "./Card.js";

import { FormValidator } from './FormValidator.js';

// начальные карточки
const objectListCard = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// форма редактирования профиля
const profileEditForm = document.forms['profileEdit'];
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileJobInput = document.querySelector('.popup__input_type_job');
// попапы: редактирование профиля, добавление карточки, зум
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
export const popupZoom = document.querySelector('.popup_zoom');
// поля попапа зум
export const popupZoomImage = popupZoom.querySelector('.popup__image');
export const popupZoomTitle = popupZoom.querySelector('.popup__title_zoom');
// кнопки, открывающие попапы
const popupEditOpen = document.querySelector('.profile__btn-edit');
const popupAddOpen = document.querySelector('.profile__btn-add');
// попап добавления места
const cardsArea = document.querySelector('.cards');
const newPlaceForm = document.forms['newPlace'];
const newPlaceTitleInput = document.querySelector('.popup__input_type_place');
const newPlaceLinkInput = document.querySelector('.popup__input_type_picture');
// попапы и кнопки
const popups = document.querySelectorAll('.popup');
const popupSubmitButton = popupAdd.querySelector('.popup__submit');

// для валидации
const classListForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_visible',
}

// функция открытия попапа
export const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  };

// открытие попапа редактирования профиля
popupEditOpen.addEventListener('click', function openProfileEdit() {
  profileNameInput.value = profileName.textContent.trim();
  profileJobInput.value = profileJob.textContent.trim();
  openPopup(popupEdit);
});

// функция рендера карточек
const renderCard = function (object, template) {
  const card = new Card(object, template);
  return card.generateCard();
};

// функция добавления новых карточек
const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(renderCard({
    name: newPlaceTitleInput.value,
    link: newPlaceLinkInput.value
  }, '#cards__item_template'));
  evt.target.reset();
  closePopup(popupAdd);
  addCardValidate.disableSubmitButton();
  }

// функция отрисовки начальных карточек
const renderInitialCards = function () {
  objectListCard.forEach(function (card) {
    cardsArea.append(renderCard(card, '#cards__item_template'));
  });
}

// отрисовываем начальные карточки
renderInitialCards();


// функция сохранения данных описания
const submitEditForm = function (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(popupEdit);
};

// запускаем валидацию форм
const editProfileValidate = new FormValidator(classListForm, popupEdit);
editProfileValidate.enableValidation();
const addCardValidate = new FormValidator(classListForm, popupAdd);
addCardValidate.enableValidation();

// открытие попапа редактирования
popupEditOpen.addEventListener('click', () => {
  editProfileValidate.resetValidation();
  openPopup(popupEdit);
});

// открытие попапа добавления места
popupAddOpen.addEventListener('click',() => {
  newPlaceTitleInput.value = "";
  newPlaceLinkInput.value = "";
  addCardValidate.resetValidation();
  openPopup(popupAdd);
});


// закрытие попапов
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    });
});

// функция закрытия попапа
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  };

// функция закрытия попапов с помощью ESC
function closePopupByEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  };
};

profileEditForm.addEventListener('submit', submitEditForm);
newPlaceForm.addEventListener('submit', addNewCard);