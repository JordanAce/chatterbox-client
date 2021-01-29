var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('button', FormView.refresh);


  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newText = document.getElementById("message").value;
    var message = { 'username': App.username, 'text': newText};
    Parse.create(message);
    console.log('click!');
    //window.location.reload();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  refresh: function() {
    console.log('test');
    App.fetch();
  }

};