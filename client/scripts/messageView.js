var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <%- username %> </div>

        <%- text %>
        <div></div>
      </div>
    `)

};