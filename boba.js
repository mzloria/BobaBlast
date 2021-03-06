function boba(game, startX, startY, name, target, damage, speed, ricochetLevel
    , pierceLevel, homingLevel, poisonLevel, laserLevel, freezeLevel, paralyzeLevel, explosiveLevel) {
    this.collidedBeforeList = [];
    this.target = target;
    this.bobaDamage = damage;
    this.name = "BOBA";
    this.freezeLvl = freezeLevel; // ADDRESSED UPGRADES
    this.poisonLvl = poisonLevel; // ADDRESSED UPGRADES
    this.paralysisLvl = paralyzeLevel; // ADDRESSED UPGRADES
    this.burnLvl = explosiveLevel; // KINDA
    this.ricochetLvl = ricochetLevel;
    this.pierceLvl = pierceLevel;
    this.freezeProbAdder = 0;
    this.poisonProbAdder = 0;
    this.burnProbAdder = 0;
    this.paralysisProbAdder = 0;
    this.freezeTimeAdder = 0;
    this.poisonTimeAdder = 0;
    this.paralysisTimeAdder = 0;
    this.burnTimeAdder = 0;
    this.ricochetCount = 0;
    this.pierceCount = 0;
    // this.isFreeze = false;
    if(name ==='blue') {
        this.isFreeze = true;
        // this.freezeLvl = 1;
    }
    // ADDED THIS FOR UPGRADES
    // if (freezeLevel > 0) {
    //     this.isFreeze = true;
    // }
    // END
    // this.isPoison = false;
    if(name ==='green') {
        this.isPoison = true;
        // this.poisonLvl = 1;
    }
    // ADDED THIS FOR UPGRADES
    // if(poisonLevel == 1) {
    //     // this.isPoison = true;
    // }
    // END
    // this.isParalyze = false;
    // this.isElectric = false;
    if(name ==='purple') {
        this.isElectric = true;
        // this.isParalyze = true;
        // this.paralysisLvl = 1;
    }
    // ADDED THIS FOR UGPRADES
    // if (paralyzeLevel == 1) {
    //     this.isParalyze = true;
    // }
    // END
    // this.isExplosive = false;
    if(name ==='red') {
        this.isExplosive = true;
        // this.burnLvl = 1;
    }
    // // ADDED THIS FOR UPGRADES
    // if(explosiveLevel == 1) {
    //     this.isExplosive = true;
    // }
    if (explosiveLevel > 0) {
        // this.isExplosive = true;
        this.burnLvl = explosiveLevel;
    }
    if (paralyzeLevel > 0) {
        // this.isExplosive = true;
        this.paralysisLvl = paralyzeLevel;
    }
    if (freezeLevel > 0) {
        // this.isExplosive = true;
        this.freezeLvl = freezeLevel;
    }
    if (poisonLevel > 0) {
        this.poisonLvl = poisonLevel;
    }
    // END
    this.isHoming = false;
    // if(name ==='gold') {
    //     this.isHoming = true;
    // }
    // ADDED THIS FOR UPGRADES
    if(homingLevel == 1) {
        this.isHoming = true;
    }
    // END
    this.isLaser = false;
    // if (name === 'laser') {
    //     this.isLaser = true;
    // }
    // ADDED THIS FOR UPGRADES
    if (laserLevel == 1) {
        this.isLaser = true;
    }
    // END
    // this.isPierce = false;
    // if (name === 'pierce') {
    //     this.isPierce = true;
    //     this.pierceCount = 1;
    // }
    // // ADDED THIS FOR UPGRADES
    // if (this.pierceLvl === 1) {
    //     this.isPierce = true;
    //     this.pierceCount = 1;
    // }
    // // END
    // this.isRicochet = false;
    // if (name === 'ricochet') {
    //     this.isRicochet = true;
    //     this.ricochetLvl = 1;
    //     this.ricochetCount = 1;
    // }
    // // ADDED THIS FOR UPGRADES
    // if (this.ricochetLvl === 1) {
    //     this.isRicochet = true;
    //     this.ricochetLvl = 1;
    //     this.ricochetCount = 1;
    // }
    // END
    if (this.freezeLvl == 2) {
        // this.isFreeze = true;
        this.freezeProbAdder = .5;
        this.freezeTimeAdder = 3000/1000;
    } else if (this.freezeLvl == 3) {
        // this.isFreeze = true;
        this.freezeProbAdder = .8;
        this.freezeTimeAdder = 5000/1000;
    }
    if (this.poisonLvl == 2) {
        // this.isPoison = true;
        this.poisonProbAdder = .5;
        this.poisonTimeAdder = 3000/1000;
    } else if (this.poisonLvl == 3) {
        // this.isPoison = true;
        this.poisonProbAdder = .8;
        this.poisonTimeAdder = 5000/1000;
    } 
    if (this.burnLvl == 2) {

        this.burnProbAdder = 5;
        this.burnTimeAdder = 500/1000;
    } else if (this.burnLvl == 3) {
        this.burnProbAdder = 8;
        this.burnTimeAdder = 1000/1000;
    } 

    if (this.paralysisLvl == 2) {
        // this.isParalyze = true;
        this.paralysisProbAdder = .5;
        this.paralysisTimeAdder = 500/1000;
    } else if (this.paralysisLvl == 3) {
        // this.isParalyze = true;
        this.paralysisProbAdder = .8;
        this.paralysisTimeAdder = 1000/1000;
    } 

    if (this.ricochetLvl == 1) {
        this.ricochetCount = 1;
    }else if (this.ricochetLvl == 2) {
        // this.isRicochet = true;
        this.ricochetCount = 3;
    } else if (this.ricochetLvl == 3) {
        // this.isRicochet = true;
        this.ricochetCount = 5;
    } 

    if (this.pierceLvl == -1) {
        this.pierceCount = Number.MAX_VALUE;
    } else if (this.pierceLvl == 1) {
        this.pierceCount = 1;
    } else if (this.pierceLvl == 2) {
        this.pierceCount = 3;
    } else if (this.pierceLvl == 3) {
        this.pierceCount = 5;
    } 

    /*
        this.isFire = false;
    if(name ==='poop') {
        this.isFire = true;
    }*/
    this.animation = new Animation(AM.getAsset("./img/boba.png"), 0, 0, 20, 20, 1, 0.1, 1, true, 1);
    if (this.freezeLvl > 0) {
        this.animation = new Animation(AM.getAsset("./img/bobaB.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
        this.animation.offsetX = - 8;
        this.animation.offsetY = - 8;
    } 
    if (this.paralysisLvl > 0) {
        this.animation = new Animation(AM.getAsset("./img/bobaP.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
        this.animation.offsetX = - 8;
        this.animation.offsetY = - 8;
    } 
    if (this.burnLvl > 0) {
        this.animation = new Animation(AM.getAsset("./img/bobaR.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
        this.animation.offsetX = - 8;
        this.animation.offsetY = - 8;
    } 
    if (this.poisonLvl > 0) {
        this.animation = new Animation(AM.getAsset("./img/bobaG.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
        this.animation.offsetX = - 8;
        this.animation.offsetY = - 8;
    } 
    this.x = startX;
    this.y = startY;
    this.isBoba = true;
    // if (this.isHoming) {
    //     this.destinationX = target.centerX;
    //     this.destinationY = target.centerY;
    //     this.backward = false;
    //     this.upward = false;
    //     this.yDiff = this.destinationY - startY;
    //     this.xDiff = this.destinationX - startX;
    //     if(this.xDiff === 0) {
    //         this.slope = undefined;
    //     } else {
    //         this.slope = this.yDiff / this.xDiff;
    //     }
    //     if(this.xDiff < 0) {
    //         this.backward = true;
    //     }
    //     if(this.yDiff < 0) {
    //         this.upward = true;
    //     }
    //     if(this.backward && this.upward) {
    //         this.slope = -1 * this.slope;
    //     } else if (this.backward) {
    //         this.slope = -1 * this.slope;
    //     }
    // } else {
    //     this.destinationX = destinationX;
    //     this.destinationY = destinationY;
    //     this.backward = false;
    //     this.upward = false;
    //     this.yDiff = destinationY - startY;
    //     this.xDiff = destinationX - startX;
    //     if(this.xDiff === 0) {
    //         this.slope = undefined;
    //     } else {
    //         this.slope = this.yDiff / this.xDiff;
    //     }
    //     if(this.xDiff < 0) {
    //         this.backward = true;
    //     }
    //     if(this.yDiff < 0) {
    //         this.upward = true;
    //     }
    //     if(this.backward && this.upward) {
    //         this.slope = -1 * this.slope;
    //     } else if (this.backward) {
    //         this.slope = -1 * this.slope;
    //     }
    // }
    // this.destinationX = destinationX;
    // this.destinationY = destinationY;
    var dir = direction({'x':this.target.centerX - 10, 'y':this.target.centerY - 13}, this);
    // console.log(dir)
    this.velocity = dir;
    // console.log(dir)
    // this.velocity.x = dir.x;
    // this.velocity.y = dir.y;

    //var speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
    // console.log(speed)
    // if (speed > this.speed) {
        // var ratio = this.speed / speed;
        // this.velocity.x *= ratio;
        // this.velocity.y *= ratio;
    // }
    this.width = 28;
    this.height = 28;
    this.speed = speed;
    this.game = game;
    this.ctx = game.ctx;
    // this.noCollision = true;
    this.boxes = false;
    this.boundingbox = new BoundingBox(this.x + 6, this.y + 13, this.width -21, this.height - 23);
}

boba.prototype.collidedBefore = function(enemy) {
    for (var i = 0; i < this.collidedBeforeList.length; i++) {
        if (enemy == this.collidedBeforeList[i]) {
            return true;
        }
    }
    return false;
}

boba.prototype.draw = function () {
    if(this.game.running) {
        // if(this.noCollision) {
            // console.log("a")
            if (this.boxes) {
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.x, this.y, this.animation.frameWidth, this.animation.frameHeight);
                this.ctx.strokeStyle = "green";
                this.ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
            }
            this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
        // }
    }
}

boba.prototype.update = function () {
    if(this.game.running) {
        // if ((this.pierceCount == -1 && this.pierceLvl != 0 && this.ricochetLvl != 0 && this.ricochetCount == -1)
        // || (this.pierceCount == -1 && this.pierceLvl!= 0 && this.ricochetLvl == 0)
        // || (this.ricochetCount == -1 && this.ricochetLvl!= 0 && this.pierceLvl == 0) ) {
        //     this.removeFromWorld = true;
        // } 
        // if (this.pierceCount == -1 && this.pierceLvl > 0) {
        //     this.removeFromWorld = true;
        // }
        if (this.freezeLvl > 0) {
            this.animation = new Animation(AM.getAsset("./img/bobaB.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
            this.animation.offsetX = - 8;
            this.animation.offsetY = - 8;
        } 
        if (this.paralysisLvl > 0) {
            this.animation = new Animation(AM.getAsset("./img/bobaP.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
            this.animation.offsetX = - 8;
            this.animation.offsetY = - 8;
        } 
        if (this.burnLvl > 0) {
            this.animation = new Animation(AM.getAsset("./img/bobaR.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
            this.animation.offsetX = - 8;
            this.animation.offsetY = - 8;
        } 
        if (this.poisonLvl > 0) {
            this.animation = new Animation(AM.getAsset("./img/bobaG.png"), 0, 0, 34, 34, 1, 0.1, 1, true, 1);
            this.animation.offsetX = - 8;
            this.animation.offsetY = - 8;
        } 
        if (this.isHoming) {
            if (this.target.hp <= 0) {
                this.removeFromWorld = true;
            }
            // this.destinationX = this.target.centerX;
            // this.destinationY = this.target.centerY;
            this.velocity = direction({'x':this.target.centerX -10, 'y':this.target.centerY - 13}, this);
            // this.velocity.x = dir.x;
            // this.velocity.y = dir.y;
        
            // var speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
            // // if (speed > this.speed) {
            //     var ratio = this.speed / speed;
            //     this.velocity.x *= ratio;
            //     this.velocity.y *= ratio;
            // }
            // this.destinationX = this.target.centerX - 10;
            // this.destinationY = this.target.centerY - 13;
            // this.backward = false;
            // this.upward = false;
            // this.yDiff = this.destinationY - this.y;
            // this.xDiff = this.destinationX - this.x;
            // if(this.xDiff === 0) {
            //     this.slope = undefined;
            // } else {
            //     this.slope = this.yDiff / this.xDiff;
            // }
            // if(this.xDiff < 0) {
            //     this.backward = true;
            // }
            // if(this.yDiff < 0) {
            //     this.upward = true;
            // }
            // if(this.backward && this.upward) {
            //     this.slope = -1 * this.slope;
            // } else if (this.backward) {
            //     this.slope = -1 * this.slope;
            // }
        }
        // Remove Boba if It Goes Out of Range
        // if(this.backward && this.x < this.destinationX) {
        //     this.removeFromWorld = true;
        // } else if (!this.backward && this.x > this.destinationX) {
        //     this.removeFromWorld = true;
        // }
        if (this.x < 0 || this.y < 0 || this.x > 1200 ||  this.y > 600) {
            this.removeFromWorld = true;
        }
        // if(!this.backward && this.slope !== undefined) {
        //     if(Math.abs(this.slope) <= 10) {
        //         this.x += this.game.clockTick * this.speed;
        //     } else {
        //         this.x += this.game.clockTick * this.speed / 10;
        //     }
        //     // this.boundingbox.x += this.game.clockTick * this.speed;
        // } else if (this.slope !== undefined)  {
        //     if(Math.abs(this.slope) <= 10) {
        //         this.x -= this.game.clockTick * this.speed;
        //     } else {
        //         this.x -= this.game.clockTick * this.speed / 10;
        //     }
        //     // this.boundingbox.x -= this.game.clockTick * this.speed;
        // }
        // if(this.slope === undefined)  {
        //     this.y += this.game.clockTick * this.speed;
        //     // this.boundingbox.y += this.game.clockTick * this.speed;
        // }
        // else {
        //     if(Math.abs(this.slope) <= 10) {
        //         this.y += this.slope * this.game.clockTick * this.speed;
        //     } else {
        //         this.y += this.slope / 10 * this.game.clockTick * this.speed;
        //     }
        //     // this.boundingbox.y += this.slope * this.game.clockTick * this.speed;
        // }
        // this.velocity.x += this.action.direction.x;
        // this.velocity.y += this.action.direction.y;
        // console.log(this.velocity)
        this.x += this.velocity.x * this.game.clockTick * this.speed;
        this.y += this.velocity.y * this.game.clockTick * this.speed;
        this.boundingbox = new BoundingBox(this.x + 6, this.y + 13, this.width -21, this.height - 23);
    }
}
