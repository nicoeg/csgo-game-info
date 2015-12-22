# csgo-game-info
Script for displaying game info on stream in Counter-Strike Global Offensive

## How to use

First you'll need to put the cfg file in this repository called gamestate_integration_gameinfo.cfg into your counter strikes cfg folder.

After this clone or download the repository then run   

    $ npm install
To start the script run

    $ node webserver.js

Remember to change the steamid to yours in index.html

Alternatively you can use [this](https://drive.google.com/file/d/0B7TPRw2sPljES3J5bTBmSERhMHc/view?usp=sharing) executable file if you don't want to install Nodejs

After this open up Open Broadcaster and create a new CLR browser element.
You can find it here: [CLR Browser](https://obsproject.com/forum/resources/clr-browser-source-plugin.22/)

Put http://localhost:3000 in the URL and 250 for width and 131 for height.  
Now the script should work, and your viewers will be able to see your score without you having to press tab.

## Changing the colors

It's possible to change the colors of the box, to do so goto the CLR Browser element in Open Broadcaster and navigate to the css tab.
In here you can change the properties of the different elements like this:

    .content {
        background: #cb60b3;
        background: -moz-linear-gradient(top, #cb60b3 0%, #ad1283 50%, #de47ac 100%);
        background: -webkit-linear-gradient(top, #cb60b3 0%,#ad1283 50%,#de47ac 100%);
        background: linear-gradient(to bottom, #cb60b3 0%,#ad1283 50%,#de47ac 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cb60b3', endColorstr='#de47ac',GradientType=0 );
    }
    .text-color {
        color: blue;
    }
    .border {
        border-color: #fff;
    }
    
[Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/) is a really cool to for creating sweet css gradients
