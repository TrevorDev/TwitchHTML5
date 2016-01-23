// ==UserScript==
// @name         Twitch.tv Full HTML5 Player
// @version      1.2.1
// @description  Twitch.tv Full HTML5 Player
// @author       Devrim
// @match        http://twitch.tv/*
// @match        http://*.twitch.tv/*
// @exclude      http://twitch.tv/*/v/*
// @exclude      http://*.twitch.tv/*/v/*
// @run-at       document-end
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
    $(".player-buttons-right").css("padding","0px 50px 0px 0px");
    $('.ember-view.button.drop.action').text('Theater Mode');
    $(".ember-view.button.drop.action").click(function enable() { 
    $("#player").removeClass("dynamic-player");
    $(".app-main").addClass("theatre");
    $(".popup").css("display","none");
      });

    
},5000);
