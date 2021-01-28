var MessagesView = {


  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(templatedString) {

    $('#chats').append(templatedString);
  }

};