/*'use strict';

(function () {

  var ads = [];
  var appartmentType = ['palace', 'flat', 'house', 'bungalo'];
  var checkInTime = ['12:00', '13:00', '14:00'];
  var checkOutTime = ['12:00', '13:00', '14:00'];
  var featureList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var appartmentPhoto = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

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
          type: window.utils.getRandom(appartmentType),
          rooms: 0,
          guests: 0,
          checkin: window.utils.getRandom(checkInTime),
          checkout: window.utils.getRandom(checkOutTime),
          features: window.utils.getRandom(featureList),
          description: '{{описание}}',
          photos: window.utils.getRandom(appartmentPhoto)
        },
        location: {
          x: window.utils.getRandomRange(0, 1120),
          y: window.utils.getRandomRange(130, 630)
        }
      };
      ads.push(ad);
    }
    return ads;
  };

  window.data = {
    getAds: getAds,
    ads: ads
  };
})();

window.data.getAds(8);*/

