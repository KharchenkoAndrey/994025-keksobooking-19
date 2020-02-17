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
var avatarNumbers = ['01', '02', '03', '04', '05', '06', '07', '08'];
var similarPin = document.querySelector('#pin').content.querySelector('.map__pin');
var similarMapPins = document.querySelector('.map__pins');

var getRandom = function (arr) {
  var random = Math.floor(Math.random() * (arr.length));
  return arr[random];
};

var getRandomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var ads = [
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
  {
    author: {
      avatar: ''
    },
    offer: {
      title: 'заголовок объявления',
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
      x: getRandomRange(0, 1200),
      y: getRandomRange(130, 630)
    }
  },
];

var renderPin = function (ads) {
  var itemPin = similarPin.cloneNode(true);
  var imgPin = itemPin.querySelector('img');

  imgPin.src = ads.author.avatar;
  imgPin.alt = '{{заголовок объявления}}';
  itemPin.style.left = ads.location.x + 'px';
  itemPin.style.top = ads.location.y + 'px';

  return itemPin;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < ads.length; i++) {
  ads[i].author.avatar = 'img/avatars/user' + avatarNumbers[i] + '.png';
  fragment.appendChild(renderPin(ads[i]));
}
similarMapPins.appendChild(fragment);
