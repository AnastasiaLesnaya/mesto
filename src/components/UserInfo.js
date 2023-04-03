class UserInfo {
  constructor({ usernameSelector, userJobSelector, userAvatarSelector }) {
    this._username = document.querySelector(usernameSelector);
    this._userAbout = document.querySelector(userJobSelector);
    this._avatarLink = document.querySelector(userAvatarSelector);
  }

  // метод возвращения объекта с данными пользователя
  // этот метод пригодится, когда данные пользователя 
  // нужно будет подставить в форму при открытии
  getUserInfo() {
    return {
      name: this._username.textContent,
      about: this._userAbout.textContent
    };
  }

  getUserId() {
    return this._userId;
  }

  // метод принимает новые данные пользователя 
  // и добавляет их на страницу
  setUserInfo(data) {
    this._username.textContent = data.name ? data.name : "";
    this._userAbout.textContent = data.about ? data.about : "";
  }
// метод изменения аватара пользователя
setUserAvatar(data) {
  this._avatarLink.src = data.avatar ? data.avatar : "";
}
}

export { UserInfo };