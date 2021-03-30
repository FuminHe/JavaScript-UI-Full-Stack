const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

// define the ball object
class Ball {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.dx = (Math.random() - 0.5) * 10;
    this.dy = (Math.random() - 0.5) * 10;
    this.radius = (Math.random() + 0.2) * 30;

    this.color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  draw() {
    const { x, y, radius, color } = this;

    c.beginPath();
    c.fillStyle = color;
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fill();
    c.stroke();
  }

  update() {
    const { radius } = this;

    // bottom bound / floor
    if (this.y + radius >= canvas.height) {
      this.dy *= -0.9;
      this.y = canvas.height - radius;
      this.dx *= 0.98;
    }
    // top bound / ceiling
    if (this.y - radius <= 0) {
      this.dy *= -0.9;
      this.y = radius;
      this.dx *= 0.98;
    }

    // left bound
    if (this.x - radius <= 0) {
      this.dx *= -0.9;
      this.x = radius;
    }
    // right bound
    if (this.x + radius >= canvas.width) {
      this.dx *= -0.9;
      this.x = canvas.width - radius;
    }

    // reset insignificant amounts to 0
    if (this.dx < 0.01 && this.dx > -0.01) {
      this.dx = 0;
    }
    if (this.dy < 0.01 && this.dy > -0.01) {
      this.dy = 0;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// 300 balls
let balls = [];
for (let i = 0; i < 300; i++) {
  let ball = new Ball();
  balls.push(ball);
}

// https://medium.com/dev-compendium/creating-a-bouncing-ball-animation-using-javascript-and-canvas-1076a09482e0
function bouncingBalls() {
  // requestAnimationFrame => keep calling bouncingBalls()
  requestAnimationFrame(bouncingBalls);
  c.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach((ball) => {
    ball.update();
  });

  balls.forEach((ball) => {
    ball.draw();
  });
}

bouncingBalls();
