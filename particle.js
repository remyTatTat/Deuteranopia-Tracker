
class Particle {

  constructor(x, y, radius, r, g, b) {

    this.x = x
    this.y = y
    this.radius = radius

    this.r = r
    this.g = g
    this.b = b

    this.isReddish = false
    this.isGreenish = false

    if ( ((r > 100 && g < 80 && b < 80) || (r > 200 && g < 130 && b < 90))
          && (r > b && r > g) ){
      this.r *= .4
      this.g *= 1.2
      this.b *= 1.8
      this.isReddish = true
    }
    if ( ((g > 50 && r < 200 && b < 150) || (g > 200 && r < 130 && b < 90))
          && (g > b && g > r) ){
      this.r = 255 - (r * 0.3)
      this.g = 231 - (g * 0.3)
      this.b = 0 + (b * 0.2)
      this.isGreenish = true
    }

    this.xOffset = random(0, 1000)
    this.yOffset = random(0, 1000)

  }

  showAndTell() {

    push()
    if (this.isReddish || this.isGreenish) {
      strokeWeight(1)
      stroke(color(this.r, this.g, this.b))
      this.radius *= 0.75
      fill(color(this.r, this.g, this.b))
    } else {
      fill(color(this.r * 0.5, this.g * 0.5, this.b * 0.5))
    }
    ellipse(this.x, this.y, this.radius)
    pop()

    // var x = map(noise(this.xOffset), 0, 1, -1, 1)
    // var y = map(noise(this.yOffset), 0, 1, -1, 1)

    /*if (this.isReddish || this.isGreenish) {

      this.x += x
      this.y += y

      if (this.x <= -(this.radius/2)) {
        this.x = width + this.radius/2
      } else if (this.x >= width + (this.radius/2)) {
        this.x = -(this.radius/2)
      }
      if (this.y <= -(this.radius/2)) {
        this.y = height + this.radius/2
      } else if (this.y >= height + (this.radius/2)) {
        this.y = -(this.radius/2)
      }

    }

    this.xOffset += 0.01
    this.yOffset += 0.01*/

  }

}

/*class Particle {

  constructor(x, y) {

    this.xOffset = random(0, 1000)
    this.yOffset = random(0, 1000)

    this.xc = x
    this.yc = y

    this.x = constrain(this.xc, 0, width)
    this.y = constrain(this.yc, 0, height)
    this.radius = 10

    this.rc = Math.floor(random(0, 255))
    this.gc = Math.floor(random(0, 255))
    this.bc = Math.floor(random(0, 255))

    this.r = constrain(this.rc, 0, 255)
    this.g = constrain(this.gc, 0, 255)
    this.b = constrain(this.bc, 0, 255)

  }

  showAndTell() {

    push()
    strokeWeight(2)
    stroke(255)
    // fill(this.r, this.g, this.b)
    var location = (x + y * capture.width) * 4;
    fill(capture.pixels[location], capture.pixels[location+1], capture.pixels[location+2]);
    ellipse(this.x, this.y, this.radius)
    pop()

    if (true) {
      var rz = random(-1, 1)
      var gz = random(-1, 1)
      var bz = random(-1, 1)

      var x = map(noise(this.xOffset), 0, 1, -1, 1)
      var y = map(noise(this.yOffset), 0, 1, -1, 1)

      this.x += x
      this.y += y

      /*var y2 = Math.floor(y)
      if (y2 == 0) {
        if (sign == 0) {
          y2 = -1
        } else if (sign == 1) {
          y2 = 1
        }
      }

      //console.log("X: " + this.x)
      //console.log("Y: " + this.y)
      // onsole.log("R: " + this.r + " G: " + this.g + " B: " + this.b)

      if (rz < 0) {
        this.r-=3
      } else {
        this.r+=3
      }
      if (gz < 0) {
        this.g-=3
      } else {
        this.g+=3
      }
      if (bz < 0) {
        this.b-=3
      } else {
        this.b+=3
      }

      if (this.x <= -(this.radius/2)) {
        this.x = width + this.radius/2
      } else if (this.x >= width + (this.radius/2)) {
        this.x = -(this.radius/2)
      }
      if (this.y <= -(this.radius/2)) {
        this.y = height + this.radius/2
      } else if (this.y >= height + (this.radius/2)) {
        this.y = -(this.radius/2)
      }

      /*if (this.r >= 255) {
        this.r = 254
      } else if (this.r <= 0) {
        this.r = 1
      }

      if (this.g >= 255) {
        this.g = 254
      } else if (this.r <= 0) {
        this.g = 1
      }

      if (this.b >= 255) {
        this.b = 254
      } else if (this.r <= 0) {
        this.b = 1
      }

      this.xOffset += 0.01
      this.yOffset += 0.01
    }

  }

}*/
