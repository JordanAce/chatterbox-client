var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(userMessage) {
    console.log('test');

    $("#chats").append(userMessage);

  }

};