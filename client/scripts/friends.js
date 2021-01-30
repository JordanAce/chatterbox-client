
var Friends = {

  friendArray: [],


  initialize: function() {


    $(document).on('click', '.username', function(event) {
      // var currentFriend = $(this);
      // var $users = getElementsByClassName(username);
      // for (var i = 0; i < $users.length; i ++) {
      //   if (Friends.friendArray.indexOf($users[i]) !== -1) {
      //     $($users[i]).addClass("friend");
      //   }
      // }
      Friends.toggleStatus($(this).text());
    });

  },

  toggleStatus: function() {
    var currentFriend = arguments[0];
    Friends.friendArray.push(currentFriend);
    $(".username").each(function() {
      console.log($(this).text());
      if (Friends.friendArray.indexOf($(this).text()) !== -1) {
        $(this).addClass("friend");
      }
    });
    //console.log(Friends.friendArray);
  }

};