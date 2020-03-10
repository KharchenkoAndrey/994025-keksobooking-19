'use strict';

(function () {
  window.utils = {
    getRandom: function (arr) {
      var random = Math.floor(Math.random() * (arr.length));
      return arr[random];
    },

    getRandomRange: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };
})();

(function () {
  var showMap = document.querySelector('.map');
  var mapPin = document.querySelector('.map__pin--main');
  var form = document.querySelector('.ad-form');

  mapPin.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      showMap.classList.remove('map--faded');
      form.classList.remove('ad-form--disabled');
      window.showPin();
    }
  });

  mapPin.addEventListener('mousedown', function (evt) {
    if (evt.which === 1) {
      showMap.classList.remove('map--faded');
      form.classList.remove('ad-form--disabled');
      window.showPin();
    }
  });
})();
