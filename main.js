(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u,a){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._cardName=this._data.name,this._cardImage=this._data.link,this._templateElem=r,this._userId=n,this._cardEl=this._templateElem.querySelector(".cards__item"),this._handleCardDelete=i,this._handleCardClick=o,this._likeCardApi=u,this._dislikeCardApi=a,this._isLiked=0!==e.likes.length&&e.likes.find((function(t){return t._id===c._userId()}))}var r,n;return r=t,(n=[{key:"createCard",value:function(){return this._cardElement=this._cardEl.cloneNode(!0),this._likeSelector=this._cardElement.querySelector(".cards__like-counter"),this.renderCardLike(this._data),this._elementImages=this._cardElement.querySelector(".cards__image"),this._elementName=this._cardElement.querySelector(".cards__title"),this._likeIcon=this._cardElement.querySelector(".cards__btn-like"),this._deleteIcon=this._cardElement.querySelector(".cards__btn-delete"),this._elementImages.src=this._cardImage,this._elementImages.alt=this._cardName,this._elementName.textContent=this._cardName,this._isLiked&&this._likeIcon.classList.add("cards__btn-like_active"),this._isThisUser(this._data),this._addEventHandlers(),this._cardElement}},{key:"_isThisUser",value:function(t){var e=this;t.owner._id!==this._userId()?this._deleteIcon.remove():this._deleteIcon.addEventListener("click",(function(){e._handleCardDelete(e._data,e._deleteCard)}))}},{key:"_addEventHandlers",value:function(){var t=this;this._deleteIcon.addEventListener("click",(function(){t._handleCardDelete(t._data,t._deleteCard.bind(t))})),this._likeIcon.addEventListener("click",(function(){return t._currentLikeApi()})),this._elementImages.addEventListener("click",(function(){t._handleCardClick(t._data.link,t._data.name)}))}},{key:"renderCardLike",value:function(t){this._likeSelector.textContent=t.likes.length}},{key:"currentLike",value:function(t){var e=this;t.likes.some((function(t){return t._id===e._userId()}))?this._likeCard():this._dislikeCard()}},{key:"deleteCard",value:function(){this._cardEl.remove(),this._cardElement.remove(),this._cardEl=null}},{key:"_dislikeCard",value:function(){this._likeIcon.classList.remove("cards__btn-like_active")}},{key:"_likeCard",value:function(){this._likeIcon.classList.add("cards__btn-like_active")}},{key:"_currentLikeApi",value:function(){this._likeIcon.classlist.contains("cards__btn-like_active")?this._dislikeCardApi(data._id):this._likeCardApi(data._id)}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._data.link,this._data.name)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._objectList=e,this._elementValidation=r,this._inputList=Array.from(this._elementValidation.querySelectorAll(this._objectList.inputSelector)),this._submitButton=this._elementValidation.querySelector(this._objectList.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var r=this._elementValidation.querySelector(".".concat(t.id,"-error"));t.classList.add(this._objectList.inputErrorClass),r.textContent=e,r.classList.add(this._objectList.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._elementValidation.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._objectList.inputErrorClass),e.classList.remove(this._objectList.ErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled","true"),this._submitButton.classList.add(this._objectList.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._objectList.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var p=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=f(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupItem=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupItem.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._callbackFormSubmit=e,r._popupFormItem=r._popupItem.querySelector(".popup__form"),r._inputList=Array.from(r._popupFormItem.querySelectorAll(".popup__input")),r._sendButton=r._popupFormItem.querySelector(".popup__submit"),r._sendButtonText=r._sendButton.textContent,r}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;this._popupFormItem.addEventListener("submit",(function(e){e.preventDefault(),t._callbackFormSubmit(t._getInputValues())})),h(m(u.prototype),"setEventListeners",this).call(this)}},{key:"showLoading",value:function(t){this._sendButton.textContent=t?"Сохранение...":this._sendButtonText}},{key:"close",value:function(){h(m(u.prototype),"close",this).call(this),this._popupFormItem.reset()}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var g=function(){function t(e){var r=e.usernameSelector,n=e.userJobSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(r),this._userAbout=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,about:this._userAbout.textContent}}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserInfo",value:function(t){this._userId=t._id,this._username.textContent=t.name?t.name:"",this._userAbout.textContent=t.about?t.about:"",this._avatar.src=t.avatar?t.avatar:""}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(o){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupZoomTitle=e._popupItem.querySelector(".popup__title_zoom"),e._popupZoomImage=e._popupItem.querySelector(".popup__image"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupZoomTitle.textContent=e,this._popupZoomImage.src=t,this._popupZoomImage.alt=e,E(O(u.prototype),"open",this).call(this)}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},P.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(o){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._deleteCardApi=e,r._popupFormItem=r._popupItem.querySelector(".popup__form"),r}return e=u,(r=[{key:"setData",value:function(t,e){this._data=t,this._deleteCard=e}},{key:"getData",value:function(t,e){this._data=t,this.deleteCard=e,P(T(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;P(T(u.prototype),"setEventListeners",this).call(this),this._popupFormItem.addEventListener("submit",(function(e){e.preventDefault(),t._deleteCardApi()}))}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_handleRes",value:function(t){return t.ok?t.json():Promise.reject("Код ошибки: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._handleRes)}},{key:"getAllCards",value:function(){return this._request("".concat(this._url,"cards"),{method:"GET",headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(t){return this._request("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})})}},{key:"setAvatar",value:function(t){return this._request("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})})}},{key:"addNewCard",value:function(t){return this._request("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({link:t.link,name:t.name})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"likeCard",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"dislikeCard",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=document.querySelector(".profile__btn-edit"),U=document.querySelector(".profile__btn-add"),V=(document.querySelector(".popup_edit"),document.querySelector(".popup_add")),N=document.forms.profileEdit,F=document.querySelector(".popup__input_type_name"),J=document.querySelector(".popup__input_type_job"),Z=document.querySelector("#avatar-popup").querySelector(".popup__form"),H=document.querySelector(".profile__avatar-edit");function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.querySelector(".popup__input_type_place"),document.querySelector(".popup__input_type_picture");var G={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_visible"},M=new x({url:"https://mesto.nomoreparties.co/v1/cohort-62/",headers:{"content-Type":"application/json",authorization:"7a41bbcd-7273-4261-a42b-1d34f24ccc05"}}),$=new g({usernameSelector:".profile__name",userJobSelector:".profile__job",userAvatarSelector:".profile__avatar"});function K(){return $.getUserId()}var Q=document.querySelector("#cards__item_template").content,W=new c({renderer:function(t){var e=ot(t);W.addItem(e)}},".cards");Promise.all([M.getUserInfo(),M.getAllCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];$.setUserInfo(o),W.renderItems(i.reverse())})).catch((function(t){console.log("При загрузке начальных данных возникла ошибка, ".concat(t))}));var X=new i(G,N);X.enableValidation();var Y=new i(G,V);Y.enableValidation();var tt=new i(G,Z);tt.enableValidation();var et=new v(".popup_edit",(function(t){et.showLoading(!0),M.setUserInfo(t).then((function(t){$.setUserInfo(t),et.close()})).catch((function(t){console.log("Возникла ошибка, ".concat(t))})).finally((function(){et.showLoading(!1)}))})),rt=new v(".popup_add",(function(t){rt.showLoading(!0),M.addNewCard(t).then((function(t){var e=ot(t);W.addItem(e),rt.close()})).catch((function(t){console.log("При добавлении новой карточки возникла ошибка, ".concat(t))})).finally((function(){rt.showLoading(!1)}))})),nt=new A("#delete-card",(function(){var t=nt.getData(),e=t.data,r=t.deleteCard;M.deleteCard(e._id).then((function(){r(),nt.close()})).catch((function(t){console.log("При удалении карточки возникла ошибка, ".concat(t))}))}));function ot(t){var e=new r(t,Q,K,ut,at,(function(t){M.likeCard(t).then((function(t){e.renderCardLike(t),e.currentLike(t)})).catch((function(t){console.log("При лайке карточки возникла ошибка, ".concat(t))}))}),(function(t){M.dislikeCard(t).then((function(t){e.renderCardLike(t),e.currentLike(t)})).catch((function(t){console.log("При дизлайке карточки возникла ошибка, ".concat(t))}))}));return e.createCard()}var it=new v("#avatar-popup",(function(t){it.showLoading(!0),M.setAvatar(t).then((function(t){$.setUserInfo(t),it.close()})).catch((function(t){console.log("При обновлении аватара возникла ошибка, ".concat(t))})).finally((function(){it.showLoading(!1)}))}));function ut(t,e){ct.open(t,e)}function at(t,e){nt.getData(),nt.setData(t,e)}D.addEventListener("click",(function(){F.value=$.getUserInfo().name,J.value=$.getUserInfo().about,et.open(),X.resetValidation()})),H.addEventListener("click",(function(){it.open(),tt.resetValidation()})),U.addEventListener("click",(function(){rt.open(),Y.resetValidation()}));var ct=new C(".popup_zoom");ct.setEventListeners(),it.setEventListeners(),et.setEventListeners(),rt.setEventListeners(),nt.setEventListeners()})();