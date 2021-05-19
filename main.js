canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

let car1 = {
    width: 120,
    height: 70,
    image: "assets/car1.png",
    x : 10,
    y : 10
}

let car2 = {
    width: 120,
    height: 70,
    image: "assets/car2.png",
    x : 10,
    y : 100
}

let background = "assets/background.png";

function add() {
    var backgroundImage = new Image();
    backgroundImage.onload = function(){
        ctx.drawImage(backgroundImage , 0, 0 ,canvas.width, canvas.height);
    }
    backgroundImage.src = background;

    var car1Img = new Image();
    car1Img.onload = function(){
        ctx.drawImage(car1Img , car1.x , car1.y , car1.width, car1.height);
    }
    car1Img.src = car1.image;

    var car2Img = new Image();
    car2Img.onload = function(){
        ctx.drawImage(car2Img , car2.x , car2.y , car2.width, car2.height);
    }
    car2Img.src = car2.image;
}

window.addEventListener("keydown" , function(e){
    keypress = e.keyCode;
    console.log(keypress);

    if (keypress == 38) {
        console.log("Up arrow key");
        //car1_up();
    }
    if (keypress == 40) {
        console.log("Down arrow key");
        //car1_down();
    }
    if (keypress == 39) {
        console.log("Right arrow key");
        //car1_right();
    }
    if (keypress == 37){
        console.log("Left arrow key");
        //car1_left();
    }

    if (keypress == 87) {
        console.log("W key");
        //car2_up();
    }
    if (keypress == 83) {
        console.log("S key");
        //car2_down();
    }
    if (keypress == 68) {
        console.log("D key");
        //car2_right();
    }
    if (keypress == 65){
        console.log("A key");
        //car2_left();
    }

});