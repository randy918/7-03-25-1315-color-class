import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/modules/index-all.js";

// import { getYear } from "./myfunctions.js";

console.log("hello");

const colorRGB = {
  rRGB: 0,
  gRGB: 0,
  bRGB: 0, // A comma was missing here

  getRGB: function () {
    return this.rRGB + ", " + this.gRGB + ", " + this.bRGB;
  },
};

const colorHSL = {
  hHSL: 0,
  sHSL: 0,
  lHSL: 0, // A comma was missing here, causing a syntax error
  getHSL: function () {
    return this.hHSL + "deg, " + this.sHSL + "%, " + this.lHSL + "%, ";
  },
};

const color = {
  kind: 0,

  rRGB: 0,
  gRGB: 0,
  bRGB: 0,

  hHSL: 0,
  sHSL: 0,
  lHSL: 0,

  getHSL: function () {
    return this.hHSL + "deg, " + this.sHSL + "%, " + this.lHSL + "%, ";
  },

  getRGB: function () {
    return this.rRGB + ", " + this.gRGB + ", " + this.bRGB;
  },
};


//! ████████████████████████████████████ COLOR

class Color {
  constructor(kind, rRGB, gRGB, bRGB, hHSL, sHSL, lHSL) {
    if (!Number.isFinite(rRGB) || rRGB < 0)
      throw new Error('Invalid rRGB: $rRGB');
      
    if (!Number.isFinite(gRGB) || gRGB < 0)
      throw new Error('Invalid gRGB: $gRGB');
      
    if (!Number.isFinite(bRGB) || bRGB < 0)
      throw new Error('Invalid bRGB: $bRGB');
      
    if (!Number.isFinite(hHSL) || hHSL < 0)
      throw new Error('Invalid hHSL: $hHSL');
      
    if (!Number.isFinite(sHSL) || sHSL < 0)
      throw new Error('Invalid sHSL: $sHSL');
      
    if (!Number.isFinite(lHSL) || lHSL < 0)
      throw new Error('Invalid lHSL: $lHSL');
      
    this.kind = kind;

    this.rRGB = rRGB;
    this.gRGB = gRGB;
    this.bRGB = bRGB;

    this.hHSL = hHSL;
    this.sHSL = sHSL;
    this.lHSL = lHSL;
  }


  //  getHSL: function () {
  //     return this.hHSL + "deg, " + this.sHSL + "%, " + this.lHSL + "%, ";
  //   }

  //   getRGB: function () {
  //     return this.rRGB + ", " + this.gRGB + ", " + this.bRGB;
  //   }
}

let myColor = new Color(0, 255, 0, 0, 0, 100, 50);
myColor.kind = 1;
console.log(myColor.kind);

//! ████████████████████████████████████ TRIANGLE


class Triangle {

constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0)
      throw new Error('Invalid a: ' + a);
      
    if (!Number.isFinite(b) || b <= 0)
      throw new Error('Invalid b: ' + b);
      
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  sayHi() {
    return 'Hello';
  }

  // getArea() {
  //   return (this.a * this.b) / 2;
  // }

  getHype() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
  }





}




// const myTri = new Triangle();
// myTri.a = 33;
// myTri.b = 44;
// myTri.getArea();
// myTri.getHype();
// console.log(myTri.getArea());
// console.log(myTri.getHype());





























