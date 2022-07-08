
var particles = []

function setup() {

  createCanvas(640, 480)
  noiseDetail(24)

  capture = createCapture(VIDEO);
  capture.hide();

  //strokeWeight(0.5)
  noStroke()

}

var intro
function preload() {
  intro = loadImage("images/deut.png")
}

var radius
function keyPressed() {
  if (keyCode == 49) {
    radius = 5
  } else if (keyCode == 50) {
    radius = 7
  } else if (keyCode == 51) {
    radius = 10
  } else if (keyCode == 52) {
    radius = 12
  } else if (keyCode == 53) {
    radius = 15
  } else if (keyCode == 54) {
    radius = 17
  }
  state = 1
}

var state = 0
function draw() {

  if (state == 0) {
    imageMode(CENTER)
    image(intro, width/2, height/2)
  }

  if (state != 0) {
    for (let i = 0; i < particles.length; i++) {
        particles.splice(i, 1)
    }

    capture.loadPixels()

    background(0, 200)

    capture.loadPixels();
    if (capture.pixels.length > 0) {

      for (var x = 0; x < capture.width; x += radius) {

        for (var y = 0; y < capture.height; y += radius) {

          var r = capture.pixels[location]
          var g = capture.pixels[location+1]
          var b = capture.pixels[location+2]

          var location = (x + y * capture.width) * 4
          //stroke( color(random(150, 255), random(150, 255), random(150, 255)))
          particles.push( new Particle(x, y, radius, r, g, b) )

        }
      }
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].showAndTell()
    }
  }

}
