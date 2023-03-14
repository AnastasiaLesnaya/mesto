// кнопки, открывающие попапы
const popupEditOpen = document.querySelector('.profile__btn-edit');
const popupAddOpen = document.querySelector('.profile__btn-add');

// попапы: редактирование профиля и добавление карточки
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');

// форма редактирования профиля и её поля ввода
const profileEditForm = document.forms['profileEdit'];
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileJobInput = document.querySelector('.popup__input_type_job');

// поля ввода попапа добавления места
const newPlaceTitleInput = document.querySelector('.popup__input_type_place');
const newPlaceLinkInput = document.querySelector('.popup__input_type_picture');

export {
  popupEditOpen, popupAddOpen, popupEdit, popupAdd,
  profileEditForm, profileNameInput, profileJobInput,
  newPlaceTitleInput, newPlaceLinkInput,
};