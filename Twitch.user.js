// ==UserScript==
// @name         Twitch.tv Full HTML5 Player
// @version      1.4.0
// @description  Twitch.tv Full HTML5 Player
// @author       Devrim
// @include /^https?://(.*\.)?twitch\.tv/.*(?!/v/).*$/
// ==/UserScript==

    $(window).load(function html5() {
    $("a").removeAttr("data-ember-action");
    $(".clearfix").removeAttr("data-ember-action");
    $(".boxart").removeAttr("data-ember-action");
    $(".cap").removeAttr("data-ember-action");
    $("href").removeAttr("data-ember-action");
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
    $(".player-button--twitch").hide();
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
          
});
