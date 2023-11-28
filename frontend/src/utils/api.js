class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getToken(jwt) {
    this._headers.authorization = `Bearer ${jwt}`;
  }
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  _request(url, options) {
    return fetch(url, options).then(this._handleResponse)
  }

  // Загрузка информации о пользователе с сервера
  getUserProfile(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    })
      .then(this._handleResponse)
  }


  // Загрузка карточек с сервера
  getInitialCards(token) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
      .then(this._handleResponse)
  }
  // Редактирование профиля
  setUserProfile(name, about, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._handleResponse)
  }
  //Изменение аватарки
  setUserAvatar(avatar, token) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._handleResponse)
  }
  //Добавление карточки
  addNewCard(name, link, token) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._handleResponse)
  }
  // Удаление карточки
  removeCard(id, token) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    })
      .then(this._handleResponse)
  }
  // Постановка, снятие лайка
  changeLikeCardStatus(id, isLiked, token) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    })
      .then(this._handleResponse)
  }
}
const api = new Api({
  //baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.dima-dan.nomoredomainsmonster.ru',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;