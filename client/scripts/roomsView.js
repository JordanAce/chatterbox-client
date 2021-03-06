var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    data = Parse.readAll(RoomsView.readRoom);
    RoomsView.$select.on('change', RoomsView.changeRoom);
    //RoomsView.$button.on('click', RoomsView.renderRoom);

  },

  readRoom: function(data) {

    //loop through the data
    for (i = 0; i < data.results.length; i++) {
      $roomname = data.results[i].roomname;
      //if room is defined and if room does not already exist in the selector
      //append each room to the selector
      //console.log($roomname);
      if (data.results[i].roomname !== undefined) {
        Rooms[data.results[i].roomname] = data.results[i].roomname;
      }
    }

    for (var key in Rooms) {
      var $uniqueRoom = Rooms[key];
      $('#rooms select').append(`<option value = ` + $uniqueRoom + `>` + $uniqueRoom + `</option>`);
    }

  },

  changeRoom: function() {
    $("#rooms").change(function() {
      var currentSelection = $("#rooms option:selected").text();
      $("#chats").html("");
      Parse.readAll((data) => {
        // examine the response from the server request:
        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i].username !== undefined && data.results[i].text !== undefined && data.results[i].roomname !== undefined && data.results[i].roomname === currentSelection) {
            MessagesView.renderMessage(MessageView.render(data.results[i]));
          }
        }
      });
    });
  },

  renderRoom: function(string) {
    var $userRoom = string;
    $('#rooms select').append(`<option value = ` + $userRoom + `>` + $userRoom + `</option>`);
  }
};