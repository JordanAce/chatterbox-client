var Rooms = {
  $button: $('#rooms button'),

  initialize: function() {

    Rooms.$button.on('click', Rooms.add);

  },

  add: function(string) {
    var $roomname = $('#message').val();
    $('#rooms select').append(`<option value = ` + $roomname + `>` + $roomname + `</option>`);
  }




};