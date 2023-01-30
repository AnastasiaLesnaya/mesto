// popups
let popupEdit = document.querySelector('.popup_edit');
let popupAdd = document.querySelector('.popup_add');
//let popupZoom = document.querySelector('.popup_zoom');

// popups open buttons
let popupEditOpen = document.querySelector('.profile__btn-edit');
let popupAddOpen = document.querySelector('.profile__btn-add');
//let popupZoomOpen = document.querySelector('.cards-item__btn-zoom');

// popups close buttons
let popupEditClose = popupEdit.querySelector('.popup__close');
let popupAddClose = popupAdd.querySelector('.popup__close');
//let popupZoomClose = popupZoom.querySelector('.popup__close');

// profile edit
let profileEditForm = document.forms['profileEdit'];
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let profileNameInput = document.querySelector('.popup__input_type_name');
let profileJobInput = document.querySelector('.popup__input_type_job');


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

//popupZoomOpen.addEventListener('click', function () {
 // openPopup(popupZoom);
//});

  // close popups
popupEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

popupAddClose.addEventListener('click', function () {
  closePopup(popupAdd);
});

//popupZoomClose.addEventListener('click', function () {
//  closePopup(popupZoom);
//});


// form
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(popupEdit);
};

profileEditForm.addEventListener('submit', formSubmitHandler);


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

const cards = document.querySelector('.cards');

const createCard = (name, link) => {
const template = `
<li class="cards__item">
<button class="button cards__btn-delete" type="button" aria-label="delete"></button>
<img class="button cards__image cards__btn-zoom" alt="Изображение" src="" >
<h2 class="cards__title"></h2>
<button class="button cards__btn-like" type="button" aria-label="like"></button>
</li>
`;
const container = document.createElement('div');
container.innerHTML = template;
const place = container.firstElementChild;
container.querySelector('.cards__title').textContent = name;
container.querySelector('.cards__image').src = link;

// delete place 
const deleteBtn = container.querySelector('.cards__btn-delete');
deleteBtn.addEventListener('click', () => {
  place.remove();
});


return place;
};

const renderCard = (name, link) => {
  cards.append(createCard(name, link));
}

initialCards.forEach(item => {
  renderCard(item.name, item.link);});



// new place popup
let newPlaceForm = document.forms['newPlace'];
let newPlaceTitle = document.querySelector('.cards__title');
let newPlaceLink = document.querySelector('.cards__image');
let newPlaceTitleInput = document.querySelector('.popup__input_type_place');
let newPlaceLinkInput = document.querySelector('.popup__input_type_link');

 function formSubmitHandler2 (evt) {
  evt.preventDefault();
  newPlaceTitle.textContent = newPlaceTitleInput.value;
  newPlaceLink.src = newPlaceLinkInput.value;
  closePopup(popupAdd);
 };

 newPlaceForm.addEventListener('submit', formSubmitHandler2);
