# csgo-game-info
Script for displaying game info on stream in Counter-Strike Global Offensive

## How to use

First you'll need to put the cfg file in this repository called gamestate_integration_gameinfo.cfg into your counter strikes cfg folder.

after this clone or download the repository then run   

    $ npm install
To start the script run

    $ node webserver.js

Remember to change the steamid to yours in index.html

Alternatively you can use the executable file I've provided if you don't want to install Nodejs

After this open up Open Broadcaster and create a new CLR browser element.
You can find it here: [a link](https://obsproject.com/forum/resources/clr-browser-source-plugin.22/)

Put http://localhost:3000 in the URL and 250 for width and 131 for height.
Now the script should work, and your viewers will be able to see your score without you having to press tab.
