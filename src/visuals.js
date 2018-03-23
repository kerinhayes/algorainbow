const Sorts = require('./sorts.js');

class Visuals {

  constructor(ctx) {
    this.nums = [];
    this.ctx = ctx;
    this.colorMap = {
      1: 'rgba(255, 51, 51, .75)',
      2: 'rgba(255, 102, 51, .75)',
      3: 'rgba(255, 153, 51, .75)',
      4: 'rgba(255, 204, 51, .75)',
      5: 'rgba(255, 255, 51, .75)',
      6: 'rgba(204, 255, 51, .75)',
      7: 'rgba(153, 255, 51, .75)',
      8: 'rgba(102, 255, 51, .75)',
      9: 'rgba(51, 255, 51, .75)',
      10: 'rgba(51, 255, 102, .75)',
      11: 'rgba(51, 255, 153, .75)',
      12: 'rgba(51, 255, 204, .75)',
      13: 'rgba(51, 255, 255, .75)',
      14: 'rgba(51, 204, 255, .75)',
      15: 'rgba(51, 153, 255, .75)',
      16: 'rgba(51, 102, 255, .75)',
      17: 'rgba(51, 51, 255, .75)',
      18: 'rgba(102, 51, 255, .75)',
      19: 'rgba(153, 51, 255, .75)',
      20: 'rgba(204, 51, 255, .75)',
      21: 'rgba(255, 51, 255, .75)',
      22: 'rgba(255, 51, 204, .75)',
      23: 'rgba(255, 51, 153, .75)',
      24: 'rgba(255, 51, 119, .75)',
      25: 'rgba(255, 51, 102, .75)',
      26: 'rgba(255, 51, 51, .75)'
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
      this.ctx.clearRect(idx, 0, 1, 520);
      this.ctx.fillStyle = this.colorMap[num];
      this.ctx.fillRect(idx, 0, 1, 520);


    });

  }

  goDraw() {

    const sort = Sorts.mergeSortBottomUp(this.shuffle);

    const animate = () => {
      requestAnimationFrame(animate);
      this.draw();
      sort.next();
    };
      animate();

  }



}

module.exports = Visuals;
