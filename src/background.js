class Background {
  constructor(ctx) {
    this.ctx = ctx;

    this.draw();
  }


  draw() {

    this.ctx.fillStyle = 'rgba(204, 204, 255, 1)';
    this.ctx.fillRect(0, 0, 900, 900);
  }
}

module.exports = Background;
