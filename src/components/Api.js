export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

// функция обработки ответа сервера
_handleRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Код ошибки: ${res.status}`);
}

// функция отправки запроса на сервер
_request(url, config) {
  return fetch(url, config)
  .then(this._handleRes);
}

// загрузка карточек с сервера
getAllCards() {
  return this._request(`${this._url}cards`, {
    method: "GET",
    headers: this._headers,
    });
  }

// загрузка данных профиля с сервера
getUserInfo() {
  return this._request(`${this._url}/users/me`, {
    method: "GET",
    headers: this._headers,
  });
}

// отправка обновлённых данных пользователя
setUserInfo(data) {
  return this._request(`${this._url}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  });
}

// отправка аватара пользователя
setAvatar(data) {
  return this._request(`${this._url}/users/me/avatar`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      avatar: data.link,
    }),
  });
 }

// отправка новой карточки на сервер
addNewCard(data) {
  return this._request(`${this._url}cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link,      
    }),
  });
}
  
// удаление карточки с сервера
deleteCard(id) {
  return this._request(`${this._url}/cards/${id}`, {
    headers: this._headers,
    method: 'DELETE',
  });
}

// отправка/снятие лайка на сервере
likeCard(id) {
  return this._request(`${this._url}/cards/${id}/likes`, {
    method: "PUT",
    headers: this._headers,
  });
}

dislikeCard(id) {
  return this._request(`${this._url}/cards/${id}/likes`, {
    method: "DELETE",
    headers: this._headers,
  });
 }
}