var currentMoney = 650;
var currentLifes = 100;

function display(game, towerArray) {
    this.towerArray = towerArray;
    this.width = 300;
    this.height = 600;
    this.startX = 900;
    this.startY = 0;
    this.centerFontX = 925;
    this.centerFontY = 50;

    this.scoreWidth = 250;
    this.scoreHeight = 40;
    this.scoreStartX = 925;
    this.scoreStartY = 70;

    this.lifeWidth = 250;
    this.lifeHeight = 40;
    this.lifeStartX = 925;
    this.lifeStartY = 120;

    this.towerWidth = 250;
    this.towerHeight = 240;
    this.towerStartX = 925;
    this.towerStartY = 170;

    this.buttonWidth = 250;
    this.buttonHeight = 50;
    this.buttonStartX = 925;
    this.buttonStartY = 540;

    this.descriptionBoxWidth = 250;
    this.descriptionBoxHeight = 110;
    this.descriptionBoxStartX = 925;
    this.descriptionBoxStartY = 420;

    this.game = game;
    this.ctx = game.ctx;
}

display.prototype.draw = function () {
    var ctx = this.ctx;
    var x = this.startX;
    var y = this.startY;
    var w = this.width;
    var h = this.height;
    // ctx.strokeStyle = "green";
    // ctx.rect(x,y,w,h);
    // ctx.stroke();
    ctx.fillStyle = "#42f5b9";
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "black";
    ctx.font = '48px Bahnschrift SemiBold';
    ctx.fillText("B", this.centerFontX, this.centerFontY);
    ctx.font = '44px Bahnschrift Light';
    ctx.fillText("OBA", this.centerFontX + 30, this.centerFontY);
    ctx.font = '48px Bahnschrift SemiBold';
    ctx.fillText("B", this.centerFontX + 115, this.centerFontY);
    ctx.font = '44px Bahnschrift Light';
    ctx.fillText("LAST", this.centerFontX + 145, this.centerFontY);
    this.generateScoreBoard();
    this.generateLifeBoard();
    this.generateTowerBoard();
    this.generateStartButton();
    this.generateDescriptionBox();
}

display.prototype.generateScoreBoard = function () {
    var ctx = this.ctx;
    var x = this.scoreStartX;
    var y = this.scoreStartY;
    var w = this.scoreWidth;
    var h = this.scoreHeight;
    ctx.fillStyle = "#3ac9a6";
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "black";
    ctx.font = '28px Bahnschrift Light';
    ctx.fillText("Money: " + currentMoney, this.scoreStartX + 20, this.scoreStartY + 30  );
}

display.prototype.generateLifeBoard = function () {
    var ctx = this.ctx;
    var x = this.lifeStartX;
    var y = this.lifeStartY;
    var w = this.lifeWidth;
    var h = this.lifeHeight;
    ctx.fillStyle = "#3ac9a6";
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "black";
    ctx.font = '28px Bahnschrift Light';
    ctx.fillText("Lives: " + currentLifes, this.lifeStartX + 20, this.lifeStartY + 30  );
}

display.prototype.generateTowerBoard = function () {
    var ctx = this.ctx;
    var x = this.towerStartX;
    var y = this.towerStartY;
    var w = this.towerWidth;
    var h = this.towerHeight;
    ctx.fillStyle = "#3ac9a6";
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "black";
    ctx.font = '20px Bahnschrift Light';
    ctx.fillText("Boba Tower Store", this.towerStartX + 40, this.towerStartY + 25);
    for(var i = 0; i < 3; i++) {
        for(var j=0; j < 3; j++) {
        this.ctx.drawImage(this.towerArray[i][j], this.towerStartX + 20 + 70 * i, this.towerStartY + 30 + 70 * j);
        }
    }
}

display.prototype.generateStartButton = function() {
    var ctx = this.ctx;
    var x = this.buttonStartX;
    var y = this.buttonStartY;
    var w = this.buttonWidth;
    var h = this.buttonHeight;
    ctx.fillStyle = "#ff4747";
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "black";
    ctx.font = '30px Bahnschrift Light';
    ctx.fillText("S", this.buttonStartX + 35, this.buttonStartY + 40  );
    ctx.font = '26px Bahnschrift Light';
    ctx.fillText("TART", this.buttonStartX + 55, this.buttonStartY + 40  );
    ctx.font = '30px Bahnschrift Light';
    ctx.fillText("R", this.buttonStartX + 120, this.buttonStartY + 40  );
    ctx.font = '26px Bahnschrift Light';
    ctx.fillText("OUND", this.buttonStartX + 140, this.buttonStartY + 40  );
}

display.prototype.generateDescriptionBox = function() {
    var ctx = this.ctx;
    var x = this.descriptionBoxStartX;
    var y = this.descriptionBoxStartY;
    var w = this.descriptionBoxWidth;
    var h = this.descriptionBoxHeight;
    ctx.fillStyle = "#ff4747";
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "black";
    ctx.font = '16px Bahnschrift SemiBold';
    ctx.fillText("Name: Kobe", this.descriptionBoxStartX + 15, this.descriptionBoxStartY + 20);
    ctx.fillText("Cost: 200", this.descriptionBoxStartX + 140, this.descriptionBoxStartY + 20);

    var txt = 'Description: The Kobe tower \ncan shoot 3 bobas \nevery second.';
    var lineX = this.descriptionBoxStartX + 15;
    var lineY = this.descriptionBoxStartY + 40;
    var lineheight = 15;
    var lines = txt.split('\n');

    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], lineX, lineY + (i*lineheight) );
    }

    var purchaseX = this.descriptionBoxStartX + 20;
    var purchaseY = this.descriptionBoxStartY + 80;
    var purchaseW = this.descriptionBoxWidth - 50;
    var purchaseH = this.descriptionBoxHeight - 85;
    ctx.fillStyle = "#56fc53";
    ctx.fillRect(purchaseX,purchaseY,purchaseW,purchaseH);

    ctx.fillStyle = "black";
    ctx.font = '20px Bahnschrift Light';
    ctx.fillText("Purchase Tower", purchaseX + 25, purchaseY + 20  );
}

display.prototype.update = function () {
}