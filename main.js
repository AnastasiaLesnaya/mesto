(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function e(t,r,o,i,a){var u,c,s,l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=this,s=function(){l._likeIcon.addEventListener("click",(function(){return l._currentLike()})),l._elementImages.addEventListener("click",(function(){return l._cardZoom(l._cardName,l._cardImage)})),l._userId===l._authorId?l._deleteIcon.addEventListener("click",(function(){return l._cardDelete(l._cardElement,l._cardId,l._deleteCard)})):l._deleteIcon.remove()},(c=n(c="_addEventHandlers"))in u?Object.defineProperty(u,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):u[c]=s,this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=r,this._userId=o,this._cardId=i.cardId,this._authorId=i.authorId,this._cardZoom=a.handleCardZoom,this._cardDelete=a.handleCardDelete,this._putLike=a.handleCardLike,this._removeLike=a.handleCardDeleteLike}var t,o;return t=e,(o=[{key:"_createCard",value:function(){return document.querySelector(this._Cardtemplate).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_deleteCard",value:function(){this._cardElement.remove()}},{key:"renderCardLike",value:function(e){this._likeArea=e.likes,0===this._likeArea.length?this.likeSelector.textContent="":this.likeSelector.textContent=this._likeArea.length,this._likedCard()?this._likeIcon.classList.add("cards__btn-like_active"):this._likeIcon.classList.remove("cards__btn-like_active")}},{key:"_likedCard",value:function(){var e=this;return this._likeArea.find((function(t){return t._id===e._userId}))}},{key:"_currentLike",value:function(){this._likedCard()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"generateCard",value:function(){return this._cardElement=this._createCard(),this._elementImages=this._cardElement.querySelector(".cards__image"),this._elementName=this._cardElement.querySelector(".cards__title"),this._likeIcon=this._cardElement.querySelector(".cards__btn-like"),this._deleteIcon=this._cardElement.querySelector(".cards__btn-delete"),this.likeSelector=this._cardElement.querySelector(".cards__like-counter"),this._elementName.textContent=this._cardName,this._elementImages.src=this._cardImage,this._elementImages.alt=this._cardName,this.renderCardLike(this._card),this._addEventHandlers(),this._cardElement}}])&&r(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objectList=t,this._elementValidation=r,this._inputList=Array.from(this._elementValidation.querySelectorAll(this._objectList.inputSelector)),this._submitButton=this._elementValidation.querySelector(this._objectList.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var r=this._elementValidation.querySelector(".".concat(e.id,"-error"));e.classList.add(this._objectList.inputErrorClass),r.textContent=t,r.classList.add(this._objectList.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._elementValidation.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._objectList.inputErrorClass),t.classList.remove(this._objectList.ErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled","true"),this._submitButton.classList.add(this._objectList.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._objectList.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var l=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._templateContainer=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){res.forEach(this._renderer)}},{key:"addItem",value:function(e){this._templateContainer.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function y(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}var d=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=y(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupItem=document.querySelector(t),this._sendButton=this._popupItem.querySelector(".popup__submit")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"putSavingProcessText",value:function(){this._sendButton.textContent="Сохранение..."}},{key:"returnSavingProcessText",value:function(){this._sendButton.textContent="Создать"}},{key:"setEventListeners",value:function(){var e=this;this._popupItem.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},b.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(o){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r,n=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._callbackFormSubmit=n,r._popupFormItem=r._popupItem.querySelector(".popup__form"),r._inputList=Array.from(r._popupFormItem.querySelectorAll(".popup__input")),r}return t=a,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(_(a.prototype),"setEventListeners",this).call(this),this._popupFormItem.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){b(_(a.prototype),"close",this).call(this),this._popupFormItem.reset()}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var w=function(){function e(t){var r=t.usernameSelector,n=t.userJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(r),this._userJob=document.querySelector(n),this._avatarLink=document.querySelector(".profile__avatar")}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.job;this._username.textContent=t,this._userJob.textContent=r}},{key:"setUserAvatar",value:function(e){this._avatarLink.src=e}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},O.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupZoomTitle=document.querySelector(".popup__title_zoom"),t._popupZoomImage=document.querySelector(".popup__image"),t}return t=a,(r=[{key:"open",value:function(e,t){this._popupZoomTitle.textContent=e,this._popupZoomImage.src=t,this._popupZoomImage.alt=e,O(I(a.prototype),"open",this).call(this)}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},R.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(o){var r=B(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r,n=t.callbackNotice;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._submitButton=r._popupItem.querySelector(".popup__form"),r._callbackNotice=n,r}return t=a,(r=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,R(B(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("submit",(function(t){t.preventDefault(),e._callbackNotice(e._cardObject,e._cardId)})),R(B(a.prototype),"setEventListeners",this).call(this)}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var V=function(){function e(t){var r=t.link,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r,this._headers=n}var t,r;return t=e,(r=[{key:"_processingServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Код ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._link,"cards"),{headers:this._headers}).then((function(t){return e._processingServerResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._link,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._processingServerResponse(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._link,"users/me"),{headers:this._headers}).then((function(t){return e._processingServerResponse(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._link,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"sendAvatarData",value:function(e){var t=this;return fetch("".concat(this._link,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"putCardLike",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._processingServerResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._processingServerResponse(e)}))}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=document.querySelector(".profile__btn-edit"),U=document.querySelector(".profile__btn-add"),F=(document.querySelector(".popup_edit"),document.querySelector(".popup_add")),J=document.forms.profileEdit,Z=document.querySelector(".popup__input_type_name"),H=document.querySelector(".popup__input_type_job"),z=document.querySelector("#avatar-popup").querySelector(".popup__form"),M=document.querySelector(".profile__avatar-edit");function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.querySelector(".popup__input_type_place"),document.querySelector(".popup__input_type_picture");var G=new V({link:"https://mesto.nomoreparties.co/v1/cohort-62/",headers:{authorization:"7a41bbcd-7273-4261-a42b-1d34f24ccc05","Content-Type":"application/json"}}),K=new L(".popup_zoom");K.setEventListeners();var Q=new w({usernameSelector:".profile__name",userJobSelector:".profile__job"}),W=new S(".popup_edit",{callbackFormSubmit:function(e){Q.setUserInfo({name:e.name,job:e.job}),W.close()}});W.setEventListeners();var X=function(e,t){K.open(e,t)},Y=function(e){return new o(e,"#cards__item_template",X).generateCard()},ee=new l({renderer:function(e){ee.addItem(Y(e))}},".cards");Promise.all([G.getUserData(),G.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];o._id,Q.setUserInfo({username:o.name,description:o.about}),ee.renderItems(i.reverse()),Q.setUserAvatar(o.avatar)})).catch((function(e){console.log("Возникла ошибка, ".concat(e))})),new L("#image-popup").setEventListeners();var te=new S("#avatar-popup",{callbackFormSubmit:function(e){te.putSavingProcessText(),G.sendAvatarData(e).then((function(e){Q.setUserAvatar(e.avatar)})).catch((function(e){console.log("При обновлении аватара возникла ошибка, ".concat(e))})).finally((function(){te.returnSavingProcessText(),te.close()}))}});te.setEventListeners();var re=new x("#delete-card",{callbackNotice:function(e,t){G.deleteCard(t).then((function(){re.close(),e.remove()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});re.setEventListeners();var ne=new S("#profile-popup",{callbackFormSubmit:function(e){ne.putSavingProcessText(),G.sendUserData(e).then((function(e){Q.setUserInfo({username:e.name,description:e.about})})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){ne.returnSavingProcessText(),ne.close()}))}});ne.setEventListeners();var oe=new S(".popup_add",{callbackFormSubmit:function(e){oe.putSavingProcessText(),G.addNewCard({name:e.place,link:e.picture}).then((function(e){ee.addItem(Y(e))})).catch((function(e){console.log("При добавлении новой карточки возникла ошибка, ".concat(e))})).finally((function(){oe.returnSavingProcessText(),oe.close()}))}});oe.setEventListeners();var ie=new u(e,J);ie.enableValidation();var ae=new u(e,F);ae.enableValidation();var ue=new u(e,z);ue.enableValidationCheck(),N.addEventListener("click",(function(){W.open(),ie.resetValidation();var e=Q.getUserInfo();Z.setAttribute("value",e.name),H.setAttribute("value",e.job)})),M.addEventListener("click",(function(){te.open(),ue.resetValidation()})),U.addEventListener("click",(function(){oe.open(),ae.resetValidation()}))})();