const Sorts = require('./sorts.js');

class Visuals {

  constructor(ctx) {
    this.nums = [];
    this.ctx = ctx;
    this.colorMap = {
      1: 'rgba(255, 51, 51,',
      2: 'rgba(255, 102, 51,',
      3: 'rgba(255, 153, 51,',
      4: 'rgba(255, 204, 51,',
      5: 'rgba(255, 255, 51,',
      6: 'rgba(204, 255, 51,',
      7: 'rgba(153, 255, 51,',
      8: 'rgba(102, 255, 51,',
      9: 'rgba(51, 255, 51,',
      10: 'rgba(51, 255, 102,',
      11: 'rgba(51, 255, 153,',
      12: 'rgba(51, 255, 204,',
      13: 'rgba(51, 255, 255,',
      14: 'rgba(51, 204, 255,',
      15: 'rgba(51, 153, 255,',
      16: 'rgba(51, 102, 255,',
      17: 'rgba(51, 51, 255,',
      18: 'rgba(102, 51, 255,',
      19: 'rgba(153, 51, 255,',
      20: 'rgba(204, 51, 255,',
      21: 'rgba(255, 51, 255,',
      22: 'rgba(255, 51, 204,',
      23: 'rgba(255, 51, 153,',
      24: 'rgba(255, 51, 119,',
      25: 'rgba(255, 51, 102,',
      26: 'rgba(255, 51, 51,'
    };

      this.popArray();
      this.shuffleArray(this.nums);
      this.draw();
      // this.goDraw(Sorts.selectionSort);
      // this.goDraw(Sorts.mergeSortBottomUp, 10);

  }


  shuffleArray(array = this.nums) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
      this.ctx.clearRect(0, 0, 520, 75);
      this.draw();
  }

  popArray() {

    const keys = Object.keys(this.colorMap).map(num => parseInt(num));

    for(let j = 0; j < 26; j++) {
      for(let i = 0; i < 20; i++) {

        this.nums.push(keys[j]);
      }
    }
    return this.nums;
  }

  draw() {
    this.nums.forEach((num, idx)=> {

      let gradient = this.ctx.createLinearGradient(0, 0, 0, 75);
      gradient.addColorStop(0, `${this.colorMap[num]} .9)`);
      gradient.addColorStop(.25, `${this.colorMap[num]} .75)`);
      gradient.addColorStop(.5, `${this.colorMap[num]} .5)`);
      gradient.addColorStop(.75, `${this.colorMap[num]} .25)`);
      gradient.addColorStop(1, `${this.colorMap[num]} .1)`);
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(idx, 0, 1, 75);


    });

  }

  goDraw(sorter, time) {
    let fps, fpsInterval, startTime, now, then, elapsed;
    const sort = sorter(this.nums);

    const animate = () => {
      requestAnimationFrame(animate);

      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {

        then = now - (elapsed % fpsInterval);
        this.draw();
        sort.next();
      }
    };
      fpsInterval = 1000 / time;
      then = Date.now();
      startTime = then;

      animate();

  }



}

module.exports = Visuals;
