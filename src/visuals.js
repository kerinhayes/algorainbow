const Sorts = require('./sorts.js');

class Visuals {

  constructor(ctx) {
    this.nums = [];
    this.ctx = ctx;
    this.colorMap = {
      1: 'rgb(255, 51, 51)',
      2: 'rgb(255, 102, 51)',
      3: 'rgb(255, 153, 51)',
      4: 'rgb(255, 204, 51)',
      5: 'rgb(255, 255, 51)',
      6: 'rgb(204, 255, 51)',
      7: 'rgb(153, 255, 51)',
      8: 'rgb(102, 255, 51)',
      9: 'rgb(51, 255, 51)',
      10: 'rgb(51, 255, 102)',
      11: 'rgb(51, 255, 153)',
      12: 'rgb(51, 255, 204)',
      13: 'rgb(51, 255, 255)',
      14: 'rgb(51, 204, 255)',
      15: 'rgb(51, 153, 255)',
      16: 'rgb(51, 102, 255)',
      17: 'rgb(51, 51, 255)',
      18: 'rgb(102, 51, 255)',
      19: 'rgb(153, 51, 255)',
      20: 'rgb(204, 51, 255)',
      21: 'rgb(255, 51, 255)',
      22: 'rgb(255, 51, 204)',
      23: 'rgb(255, 51, 153)',
      24: 'rgb(255, 51, 119)',
      25: 'rgb(255, 51, 102)',
      26: 'rgb(255, 51, 51)'
    };

      this.popArray();
      this.shuffle = this.shuffleArray(this.nums);
      this.draw();
      this.goDraw();



  }


  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
      this.ctx.fillStyle = this.colorMap[num];
      this.ctx.fillRect(idx, 0, 1, 500);
    });

  }

  goDraw() {

    const sort = Sorts.selectionSort(this.shuffle);

    const animate = () => {
      requestAnimationFrame(animate);
      this.draw();
      sort.next();
    };
      animate();

  }



}

module.exports = Visuals;
