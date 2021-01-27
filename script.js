function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  ball = {
    x: width / 2,
    y: height / 2,
    vx: -1,
    vy: 1,
    speed: 1
  };
  fcolor = "white"
  score = 0;
  hits = 0;
}

function draw() {
  fill(0);
  rect(0, 0, width, height);
  fill(fcolor);
  rect(55, mouseY - 75, 40, 140);
  circle(ball.x, ball.y, 30);
  ball.x += ball.vx * ball.speed;
  ball.y += ball.vy * ball.speed;
  if (ball.y < 15 || ball.y > height - 15) ball.vy *= -1 + random(-1, 1) / 10, hits++;
  if ((ball.y > mouseY - 180 && ball.y < mouseY + 180 && ball.x < 115 && ball.x > 65) || ball.x > width - 115) {
    ball.vx *= -1 + random(-1, 1) / 10
    hits++;
  }
  rect(width - 90, ball.y - 70 + cos(frameCount / 99 + ball.y * ball.x / 2e5) * 60, 40, 140);
  textFont("Helvetica")
  textSize(30);
  text("SCORE: " + round(score) + ", SPEED: " + round(ball.speed * 5) / 10 + " px/f, HITS: " + hits, width / 2 - 236, 30)
  if (ball.x < 0) fcolor = 'red';
  if (fcolor !== 'red') score += .1, ball.speed += 0.03;
}