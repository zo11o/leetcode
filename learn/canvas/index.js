window.onload = function() {
  ;(function canvas() {
    var oCanvas = document.getElementsByTagName('canvas')[0];
    var ctx = oCanvas.getContext("2d")

    var colorArr = ["#E08031", "#199475", "#99CC99", "#09C", "#096"]
    var x, y, r, xr, yr, d
    var loveArr = [];
    var w = window.innerWidth;
    var h = window.innerHeight;
    oCanvas.width = w;
    oCanvas.height = h;

    function random(min,max) {
      return Math.random()*(max-min)+min;
    }

    function Love () {

    }

    Love.prototype = {
      init: function () {
        // 基础定义
        this.r = random(10,15);
        this.x = random(this.r, w - this.r);
        this.y = random(this.r, h - this.r);
        this.color = colorArr[Math.floor(random(0,5))];
        // 设置球的移动速率
        this.xr = random(-5, 5);
        this.yr = random(-5, 5);
      },
      draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
      },
      move: function () {
        this.x += this.xr;
        this.y += this.yr;
        (this.x + this.r >= w || this.x - this.r <= 0) ? this.xr = -this.xr : null;
        (this.y + this.r >= w || this.y - this.r <= 0) ? this.yr = -this.yr : null;
        this.draw();
      },
    };

    function create () {
      var bubble = new Love();
      bubble.init();
      bubble.draw();
      loveArr.push(bubble);
    }

    for (var i = 0; i < 50; i++) {
      create();
    }

    var time = setInterval(() => {
      ctx.clearRect(0, 0, w, h); // 清空画布
      for ( var i = 0; i < loveArr.length; i ++ ) {
        loveArr[i].move();
      }
    }, 1000/60);

    oCanvas.onclick = function () {
      clearInterval(time)
    }

  })()
}
