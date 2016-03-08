# TwitchHTML5
Twitch.tv Full HTML5 Player



This is confirmed to work with Firefox 42 and newer with the latest Greasemonkey and Chrome 46 and newer with Tampermonkey.


Greasemonkey: https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/

Tampermonkey: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo



1: First install the Greasemonkey addon (for Firefox) or the Tampermonkey addon (for Chrome)

2: Restart your browser

3: Left click on this link it should ask you about installing the script, click ok.

https://github.com/EchoDev/TwitchHTML5/raw/master/Twitch.user.js

4a: Firefox users***
Install the following addon:
https://addons.mozilla.org/firefox/addon/toggle-mixed-active-content/

OR

Enter about:config into the address bar and click "I'll be carefull, I promise". Then enter the following in the search bar
security.mixed_content.block_active_content
Right click on the result and press the toggle

4b: Chrome users***
See the following page: https://support.google.com/chrome/answer/1342714?hl=en

5. You are done, you can disable Flash and use Twitch.tv in full HTML5

Note: To disable Flash in Firefox you can uninstall the Flash NPAPI plugin, to disable Flash in Chrome go to about:plugins and click the Disable button under Flash

Note 2: This script might not work when the FrankerFaceZ addon is enabled

***Why are these changes needed and what do they mean?
1. By default Firefox and Chrome block HTTP content on HTTPS sites. This means that 'insecure' content will not be loaded when using a 'secure' site. Due to Twitch switching to HTTPS on the site but remain using HTTP for their streaming domains, the HTML5 player will block the streaming files. To circumvent this, changes are needed to the browser configuration.
2. These changes mean that 'insecure' content on ALL SITES that use HTTPS will be loaded, not just Twitch.tv. When a HTTPS site loads HTTP content Firefox will display a lock icon with a red line over it. Chrome will draw a red line over HTTPS on the addressbar. If you see this it means the page you are on is insecure(!)
