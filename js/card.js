'use strict';

(function () {
  var similarCard = document.querySelector('#card').content.querySelector('.popup');
  var similarMapPins = document.querySelector('.map__pins');

  var renderCard = function () {
    var itemCard = similarCard.cloneNode(true);
    var popupTitle = similarCard.querySelector('.popup__title');
    var popupAdress = similarCard.querySelector('.popup__text--address');
    var popupPrice = similarCard.querySelector('.popup__text--price');
    var popupType = similarCard.querySelector('.popup__type');
    var popupCapacity = similarCard.querySelector('.popup__text--capacity');
    var popupTime = similarCard.querySelector('.popup__text--time');
    var popupDescription = similarCard.querySelector('.popup__description');

    popupTitle.textContent = window.data.ads[i].offer.title;
    popupAdress.textContent = window.data.ads[i].offer.adress;
    popupPrice.textContent = window.data.ads[i].offer.price + '₽/ночь';
    popupCapacity.textContent = window.data.ads[i].offer.rooms + ' комнаты для ' + window.data.ads[i].offer.guests + ' гостей';
    popupTime.textContent = 'Заезд после ' + window.data.ads[i].offer.checkin + ' , выезд до ' + window.data.ads[i].offer.checkout;
    popupDescription.textContent = window.data.ads[i].offer.description;

    switch (window.data.ads[i].offer.type) {
      case 'flat':
        popupType.textContent = 'Квартира';
        break;
      case 'bungalo':
        popupType.textContent = 'Бунгало';
        break;
      case 'house':
        popupType.textContent = 'Дом';
        break;
      case 'palace':
        popupType.textContent = 'Дворец';
        break;
    }

    return itemCard;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.data.ads.length; i++) {
    fragment.appendChild(renderCard());
  }
  similarMapPins.appendChild(fragment);
})();


var popupPhotos = document.querySelector('.popup__photos');
var popupPhoto = document.querySelector('.popup__photo');
var appartmentPhoto = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

var renderPhotos = function () {
  popupPhoto.cloneNode(true);
  return popupPhoto;
};

var fragmentPhotos = document.createDocumentFragment();
for (var i = 0; i < appartmentPhoto.length; i++) {
  fragment.appendChild(renderPhotos());
}
popupPhotos.appendChild(fragmentPhotos);
