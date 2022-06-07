//Setup canvas
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//Sprite setup
class sprite {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

//Setup gameboard
var sprites = [];

var game = {
  clear: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  update: function () {
    this.clear();
    for (var i = 0; i < sprites.length; i++) {
      sprites[i].update();
    }
  }
};

sprites.push(new sprite(0, 0, 20, 40, "red"));

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    sprites[0].x += 10;
    game.update();
  } else if (e.key === "ArrowLeft") {
    sprites[0].x -= 10;
    game.update();
  }
});
