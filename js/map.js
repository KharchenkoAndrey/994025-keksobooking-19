'use strict';

window.showPin = function () {
  var similarPin = document.querySelector('#pin').content.querySelector('.map__pin');
  var similarMapPins = document.querySelector('.map__pins');

  var successHandler = function (ads) {

    var renderPin = function () {
      var itemPin = similarPin.cloneNode(true);
      var imgPin = itemPin.querySelector('img');

      imgPin.src = ads[i].author.avatar;
      imgPin.alt = ads[i].offer.title;
      itemPin.style.left = ads[i].location.x + 'px';
      itemPin.style.top = ads[i].location.y + 'px';

      return itemPin;
    };

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderPin(ads[i]));
    }
    similarMapPins.appendChild(fragment);
  };
  window.load(successHandler);
};
