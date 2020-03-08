'use strict';

(function () {
  var rooms = document.querySelector('#room_number');
  var guests = document.querySelector('#capacity');

  function roomsGuests(select1, select2) {
    var optionMap = {
      1: [1],
      2: [1, 2],
      3: [3, 2, 1],
      100: [0]
    };

    return function () {
      var value = +select1.value;
      var options = select2.options;
      var optionsLength = options.length;
      var availableOptions = optionMap[value];

      for (var i = 0; i < optionsLength; i++) {
        if (availableOptions.indexOf(+options[i].value) !== -1) {
          options[i].disabled = false;
          if (+options[i].value === value || availableOptions.length === 1) {
            options[i].selected = true;
          }
        } else {
          options[i].disabled = true;
        }
      }
    };
  }
  rooms.addEventListener('change', roomsGuests(rooms, guests));
})();
