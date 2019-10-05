const colorMap = {
  green: '#00ff00',
  red: '#ff0000',
  blue: '#0000ff'
}

class Light {
  constructor (color = colorMap.red) {
    this.color = color
  }

  sleep (duration) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, duration)
    })
  }

  async run () {
    this.changeColor(this.color)
    await this.sleep(1000)
    this.changeColor(colorMap.green)
    await this.sleep(3000)
    this.changeColor(colorMap.blue)
    await this.sleep(2000)
    this.run()
  }

  changeColor (color) {
    var dom = document.querySelector('.light')
    dom.style = `background-color: ${color}`
  }
}

var light = new Light(colorMap.red)
console.log(light)
light.run()
