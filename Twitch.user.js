/**
Thanks to https://github.com/BrockA for WaitForKeyElements.js
**/
// ==UserScript==
// @name         Twitch.tv Full HTML5 Player
// @version      1.5.1
// @description  Twitch.tv Full HTML5 Player
// @author       Devrim
// @include      /https?://(.*\.)?twitch.tv/
// @require      https://github.com/EchoDev/TwitchHTML5/raw/master/waitForKeyElements.js
// ==/UserScript==
    waitForKeyElements("div[class^='js-player']", html5);
    function html5(){
           $("[class^='js-player']").html($("<iframe>").attr({
            "src": location.protocol + "//player.twitch.tv/?branding=false&html5&quality=source&showInfo=false&channel=" + $(location).attr('pathname'),
            "width": "100%",
            "height": "100%",
            "allowfullscreen": true,
            "webkitallowfullscreen": true,
            "mozallowfullscreen": true,            
    }).css(
            "border", 0
        )
    );
    var r= $('<button class="button primary float-left enter-theater-button"><span>Theater Mode</span></button>');
    $(".ember-chat .chat-interface .chat-buttons-container").append(r)
    $(".enter-theater-button").toggle(function enable() {
    $("#player").removeClass("dynamic-player");
    $(".app-main").addClass("theatre");
    $(".conversations-content .conversations-list-container").css("display","none");
      }, function disable() {
    $("#player").addClass("dynamic-player");
    $(".app-main").removeClass("theatre");
        });      
}
