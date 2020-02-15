'use strict';

var showMap = document.querySelector('.map');
showMap.classList.remove('map--faded');

var appartmentType = ['palace', 'flat', 'house', 'bungalo'];
var checkInTime = ['12:00', '13:00', '14:00'];
var checkOutTime = ['12:00', '13:00', '14:00'];
var featureList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var appartmentPhoto = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var similarPin = document.querySelector('#pin').content.querySelector('.map__pin');
var similarMapPins = document.querySelector('.map__pins');

var getRandom = function (arr) {
  var random = Math.round(Math.random() * (arr.length - 1));
  return arr[random];
};

var getRandomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var ads = [
  {
    author: {
      avatar: 'img/avatars/user{{xx}}.png'
    },
    offer: {
      title: '{{заголовок предложения}}',
      adress: '{{location.x, location.y}}',
      price: 0,
      type: getRandom(appartmentType),
      rooms: 0,
      guests: 0,
      checkin: getRandom(checkInTime),
      checkout: getRandom(checkOutTime),
      features: getRandom(featureList),
      description: '{{описание}}',
      photos: getRandom(appartmentPhoto)
    },
    location: {
      x: 200,
      y: getRandomRange(130, 630)
    }
  }

  /* {
    author: {
      avatar: 'img/avatars/user{{xx}}.png'
    },
    offer: {
      title: '{{заголовок предложения}}',
      adress: 'location.x, location.y',
      price: 20000,
      type: appartmentType[2],
      rooms: 2,
      guests: 50,
      checkin: checkInTime[0],
      checkout: checkOutTime[2],
      features: featureList[4],
      description: '{{описание}}',
      photos: appartmentPhoto[1]
    },
    location: {
      x: 250,
      y: 350
    }
  }, */
];

var fragment = document.createDocumentFragment();
for (var i = 0; i < ads.length; i++) {
  fragment.appendChild(similarPin);
}
similarMapPins.appendChild(fragment);


// console.log(getRandomRange(130, 630));
