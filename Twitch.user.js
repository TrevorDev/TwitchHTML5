// ==UserScript==
// @name         Twitch.tv Full HTML5 Player
// @version      1.3.4
// @description  Twitch.tv Full HTML5 Player
// @author       Devrim
// @include /^https?://(.*\.)?twitch\.tv/.*(?!/v/).*$/
// ==/UserScript==

setTimeout(function html5() {
    $(".js-player").html(
        $("<iframe>").attr({
            "src": "http://player.twitch.tv/?branding=false&html5&quality=source&showInfo=false&channel=" + $(location).attr('pathname'),
            "width": "100%",
            "height": "100%",
            "allowfullscreen": true,
            "webkitallowfullscreen": true,
            "mozallowfullscreen": true,            
    }).css(
            "border", 0
        )
    );
    $(".player-overlay").hide(); 
    $(".player-loading").hide(); 
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
          
},5000);
