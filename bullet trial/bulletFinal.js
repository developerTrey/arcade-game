const ship = document.getElementById("ship");
const enemy = document.getElementById("enemy");
ship.style.left = "375px";
let shipPosition = parseInt(ship.style.left);

enemy.style.left = "375px";
let enemyPositionX = parseInt(enemy.style.left);

enemy.style.bottom = "420px"
let enemyPositionY = parseInt(enemy.style.bottom);

const enemies = ["red", "green", "cyan", "orange", "purple", "white", "brown", "grey", "yellow", "blue"];

let enemyDirection = 0;

const enemyMoves = setInterval(function (){
    
    if(parseInt(enemy.style.left) >= 700){
        enemyDirection = 0;
    }

    if(parseInt(enemy.style.left) <= 0) {
        enemyDirection = 1;
    }
    if(enemyDirection){
        enemy.style.left = parseInt(enemy.style.left)+ 15+ "px";
    }else {
        enemy.style.left = parseInt(enemy.style.left)- 15+ "px";
    }
    enemyPositionX = parseInt(enemy.style.left);
    console.log("enemy position:" + enemyPositionX);
}, 100)


document.addEventListener("keydown", function(event) {
    console.log(event.keyCode);
    if(event.keyCode == 37){
        ship.style.left = (parseInt(ship.style.left) -10) + "px";
        console.log(ship.style.left);
        shipPosition = parseInt(ship.style.left);

    }
    if(event.keyCode == 39){
        ship.style.left = (parseInt(ship.style.left) +10) + "px";
        console.log(ship.style.left);
        shipPosition = parseInt(ship.style.left);
    }
    
}) 

document.addEventListener("keyup", function(event) {
if(event.keyCode == 38){
    const bullet = document.createElement("div");
    bullet.id = "blt" + Math.floor(Math.random() * 1000);
    bullet.style.backgroundColor = "yellow";
    bullet.style.width = "3px";
    bullet.style.height = "15px";
    bullet.style.left = (shipPosition + 25) + "px";
    bullet.style.bottom = "35px";
    bullet.style.position = "absolute";
    bullet.style.display = "block";

    field.append(bullet);
    const myInterval = setInterval(function (){
        bullet.style.bottom = (parseInt(bullet.style.bottom) +10) + "px";
        console.log("bullet:" +bullet.style.bottom);
        if(parseInt(bullet.style.bottom) >= 450){
            clearInterval(myInterval);
            console.log("cleared");
            bullet.remove();
        }
        if(parseInt(bullet.style.bottom) >= (450-30) && parseInt(bullet.style.left) >= (enemyPositionX) && parseInt(bullet.style.left) <= (enemyPositionX + 50)) {
            clearInterval(myInterval);
            console.log("destroyed");
            bullet.remove();
            enemy.style.backgroundColor = enemies[Math.floor(Math.random() * 10)];
        }


    }, 100);

    console.log("ship: "+ shipPosition);
}

});
