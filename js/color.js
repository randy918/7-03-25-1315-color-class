import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/modules/index-all.js";

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
  getRGB: function () {
    return this.hHSL + "deg, " + this.sHSL + "%, " + this.lHSL + "%, ";
  },
};

// console.log(colorRGB);

const a = {};
const b = function () {};
const c = [];

// console.log(Object.getPrototypeOf(c));

// Call extend as a method of the '_' object
_.extend(colorRGB, colorHSL);

console.log(colorHSL);
