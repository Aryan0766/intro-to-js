// ---------- GLOBAL VARIABLES ----------
let canvasWidth = 600;
let canvasHeight = 500;

let skyColor;
let mountainColor;
let grassColor;
let houseColor;
let roofColor;
let doorColor;
let sunColor;

let houseX = 400;
let houseY = 300;
let houseWidth = 140;
let houseHeight = 100;

let sunX = 100;
let sunY = 80;
let sunSize = 70;
let sunAngle = 0;
let sunRotationSpeed = 0.02;

function setup () {
  createCanvas(canvasWidth, canvasHeight);
  // colors must be assigned inside setup() because color() needs p5 to be running
  skyColor = color("lightblue");
  mountainColor = color(120, 120, 140);
  grassColor = color("green");
  houseColor = color("orange");
  roofColor = color("black");
  doorColor = color(60, 40, 30);
  sunColor = color(255, 210, 0);
}

function draw () {
  background(skyColor);
  noStroke(); // resets the stroke left over from the sun's rays last frame

  // Mountain (triangle)
  fill(mountainColor);
  triangle(300, 120, 50, 300, 550, 300);

  // Grass (rectangle)
  fill(grassColor);
  rect(0, 300, canvasWidth, 100);

  // House body (rectangle)
  fill(houseColor);
  rect(houseX - houseWidth / 2, houseY, houseWidth, houseHeight);

  // Roof (triangle)
  fill(roofColor);
  triangle(
    houseX - houseWidth / 2 - 10, houseY,
    houseX + houseWidth / 2 + 10, houseY,
    houseX, houseY - 60
  );

  // Door (rectangle)
  fill(doorColor);
  rect(houseX - 15, houseY + 40, 30, 60);

  // Rotating sun (drawn last, since there's no pop() to undo the transform)
  translate(sunX, sunY);
  rotate(sunAngle);

  // Rays (lines)
  stroke(sunColor);
  strokeWeight(4);
  for (let i = 0; i < 8; i++) {
    line(sunSize / 2 + 5, 0, sunSize / 2 + 25, 0);
    rotate(TWO_PI / 8);
  }

  // Sun body (ellipse)
  noStroke();
  fill(sunColor);
  ellipse(0, 0, sunSize, sunSize);

  sunAngle += sunRotationSpeed;
}