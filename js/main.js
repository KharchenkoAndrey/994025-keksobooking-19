'use strict';

var showMap = document.querySelector('.map');
var formFieldset = document.querySelectorAll('.ad-form__element');
var form = document.querySelector('.ad-form');
var formHeader = document.querySelector('.ad-form-header');
var formFilters = document.querySelector('.map__filters');
var formSelect = formFilters.querySelectorAll('select');
var formFeatures = formFilters.querySelector('.map__features');
var mapPin = document.querySelector('.map__pin--main');
var appartmentType = ['palace', 'flat', 'house', 'bungalo'];
var checkInTime = ['12:00', '13:00', '14:00'];
var checkOutTime = ['12:00', '13:00', '14:00'];
var featureList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var appartmentPhoto = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var ads = [];
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

var activeMode = function () {
  var getAds = function (numbers) {
    for (var i = 0; i < numbers; i++) {
      var ad = {
        author: {
          avatar: ''
        },
        offer: {
          title: 'заголовок объявления',
          adress: '600, 350',
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
          x: getRandomRange(0, 1120),
          y: getRandomRange(130, 630)
        }
      };
      ads.push(ad);
    }
    return ads;
  };

  getAds(8);

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
    ads[i].offer.adress = ads[i].location.x + ', ' + ads[i].location.y;
    ads[i].author.avatar = 'img/avatars/user' + avatarNumbers[i] + '.png';
    fragment.appendChild(renderPin(ads[i]));
  }
  similarMapPins.appendChild(fragment);
  form.classList.remove('ad-form--disabled');
  showMap.classList.remove('map--faded');
  formFeatures.removeAttribute('disabled', 'disabled');
  for (var i = 0; i < formFieldset.length; i++) {
    formFieldset[i].removeAttribute('disabled', 'disabled');
  }
  for (var i = 0; i < formSelect.length; i++) {
    formSelect[i].removeAttribute('disabled', 'disabled');
  }
};

mapPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activeMode();
  }
});

mapPin.addEventListener('mousedown', function (evt) {
  if (evt.which === 1) {
    activeMode();
  }
});

for (var i = 0; i < formFieldset.length; i++) {
  formFieldset[i].setAttribute('disabled', 'disabled');
}

for (var i = 0; i < formSelect.length; i++) {
  formSelect[i].setAttribute('disabled', 'disabled');
}

formHeader.setAttribute('disabled', 'disabled');
formFeatures.setAttribute('disabled', 'disabled');

var rooms = document.querySelector('#room_number');
var guests = document.querySelector('#capacity').options;

rooms.addEventListener('change', function (evt) {
  var target = evt.target.value;

  if (target === '1') {
    guests[2].selected = true;
    guests[0].setAttribute('disabled', 'disabled');
    guests[1].setAttribute('disabled', 'disabled');
    guests[3].setAttribute('disabled', 'disabled');
  }
  if (target === '2') {
    guests[1].selected = true;
    guests[0].setAttribute('disabled', 'disabled');
    guests[3].setAttribute('disabled', 'disabled');
  }
  if (target === '3') {
    guests[0].selected = true;
    guests[3].setAttribute('disabled', 'disabled');
  }
  if (target === '100') {
    guests[3].selected = true;
    guests[2].setAttribute('disabled', 'disabled');
    guests[1].setAttribute('disabled', 'disabled');
    guests[0].setAttribute('disabled', 'disabled');
  }
});
