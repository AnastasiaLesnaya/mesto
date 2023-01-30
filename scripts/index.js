// edit profile
let profileEditForm = document.forms['profileEdit'];
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let profileNameInput = document.querySelector('.popup__input_type_name');
let profileJobInput = document.querySelector('.popup__input_type_job');

// edit profile form
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(popupEdit);
};

profileEditForm.addEventListener('submit', formSubmitHandler);


// popups
let popupEdit = document.querySelector('.popup_edit');
let popupAdd = document.querySelector('.popup_add');
let popupZoom = document.querySelector('.popup_zoom');

// zoom popup
const popupZoomImage = popupZoom.querySelector('.popup__image');
const popupZoomTitle = popupZoom.querySelector('.popup__title_zoom');



// popups open buttons
let popupEditOpen = document.querySelector('.profile__btn-edit');
let popupAddOpen = document.querySelector('.profile__btn-add');
let popupZoomOpen = document.querySelector('.popup__image');


// popups close buttons
let popupEditClose = popupEdit.querySelector('.popup__close');
let popupAddClose = popupAdd.querySelector('.popup__close');
let popupZoomClose = popupZoom.querySelector('.popup__close');


// function open popup
function openPopup (popup) {
popup.classList.add('popup_opened');
}

// function close popup
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  }

// open popups
popupEditOpen.addEventListener('click', function () {
  openPopup(popupEdit);
  profileNameInput.value = profileName.textContent.trim();
  profileJobInput.value = profileJob.textContent.trim();
});

popupAddOpen.addEventListener('click', function () {
  openPopup(popupAdd);
});

popupZoomOpen.addEventListener('click', function () {
 openPopup(popupZoom);
});

  // close popups
popupEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

popupAddClose.addEventListener('click', function () {
  closePopup(popupAdd);
});

popupZoomClose.addEventListener('click', function () {
  closePopup(popupZoom);
});

  // new place popup
  const cards = document.querySelector('.cards');
  const newPlaceForm = document.forms['newPlace'];
  const newPlaceTitleInput = document.querySelector('.popup__input_type_place');
  const newPlaceLinkInput = document.querySelector('.popup__input_type_picture');
  const cardsTemplate = document.querySelector('#cards__item_template');

// start cards
const initialCards = [
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


const createCard = function (card) {
  const place = cardsTemplate
  .content
  .querySelector('.cards__item')
  .cloneNode(true);

const newPlaceTitle = place.querySelector('.cards__title');
newPlaceTitle.textContent = card.name;

const newPlaceLink = place.querySelector('.cards__image');
newPlaceLink.src = card.link;

// zoom popup
newPlaceLink.addEventListener('click', function () {
  popupZoomImage.src = newPlaceLink.src;
  popupZoomTitle.textContent = newPlaceTitle.textContent;
  openPopup(popupZoom);
});

console.log (newPlaceLink);

//like place
const likeBtn = place.querySelector('.cards__btn-like');
likeBtn.addEventListener('click', function () {
likeBtn.classList.toggle('cards__btn-like_active');
});

// delete place 
const deleteBtn = place.querySelector('.cards__btn-delete');
deleteBtn.addEventListener('click', () => {
  place.remove();
});

return place;
};

const renderCard = (place) => {
  cards.prepend(createCard(place));
};

initialCards.forEach(function (place) {
  renderCard(place);
});

// add new place
const addNewPlace = function (evt) {
  evt.preventDefault();
  const place = {
    name: newPlaceTitleInput.value,
    link: newPlaceLinkInput.value
  }
  newPlaceTitleInput.value = "";
  newPlaceLinkInput.value = "";
  closePopup(popupAdd);
  renderCard(place);
};

newPlaceForm.addEventListener('submit', addNewPlace);



