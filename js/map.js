'use strict';

window.showPin = function () {
  var avatarNumbers = ['01', '02', '03', '04', '05', '06', '07', '08'];
  var similarPin = document.querySelector('#pin').content.querySelector('.map__pin');
  var similarMapPins = document.querySelector('.map__pins');

  var renderPin = function () {
    var itemPin = similarPin.cloneNode(true);
    var imgPin = itemPin.querySelector('img');

    imgPin.src = window.data.ads[i].author.avatar;
    imgPin.alt = '{{заголовок объявления}}';
    itemPin.style.left = window.data.ads[i].location.x + 'px';
    itemPin.style.top = window.data.ads[i].location.y + 'px';

    return itemPin;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.data.ads.length; i++) {
    window.data.ads[i].offer.adress = window.data.ads[i].location.x + ', ' + window.data.ads[i].location.y;
    window.data.ads[i].author.avatar = 'img/avatars/user' + avatarNumbers[i] + '.png';
    fragment.appendChild(renderPin(window.data.ads[i]));
  }
  similarMapPins.appendChild(fragment);
};
