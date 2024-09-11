var DiscordOnline = (function () {
  var $onlineText = $('[data-toggle="discordonline"]');
  var $inviteLink = $('[data-toggle="discordInvite"]');
  // Init
  function init($onlineText) {
    var $discordID = $onlineText.attr("data-discord-id");
    var $ajaxURL = 'https://discord.com/api/guilds/' + $discordID + '/widget.json';

    $.ajax({
      url: $ajaxURL,
      dataType: "json",
      success: function (data) {
        $onlineText.text(data["presence_count"]);
        $inviteLink[0].href= data["instant_invite"];
      },
    });
  }
  if ($onlineText.length) {
    $onlineText.each(function () {
      init($(this));
    });
  }
})();