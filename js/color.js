// import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/modules/index-all.js";

// import { getYear } from "./myfunctions.js";

document.addEventListener("DOMContentLoaded", function () {
console.log("hello");

 const reloadButton = document.getElementById("reload-button");
  if (reloadButton) {
    reloadButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from navigating
      location.reload();
    });
  }
  

function random(min, max) {
    // 2.0, accepts single value for 1-x
    if (max === undefined) {
        max = min;
        min = 1;
    }
    const randomNumber = min - 1 + Math.ceil(Math.random() * (max + 1 - min));
    return randomNumber;
}

//! ████████████████████████████████████ COLOR 2

function getRgb(r,g,b) {
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
return rgbColor;

}

function getBrightRGB() {
    const r = random(86, 255);
    const g = random(86, 255);
    const b = random(86, 255);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    if (isTooGray(r, g, b)) {
        return getBrightRGB(); // Recursively call until a bright color is found
    }
    return rgbColor;
}

function getBrightRGB2() {
    const r = random(86, 255);
    const g = random(86, 255);
    const b = random(86, 255);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    if (isTooGray(r, g, b)) {
        return getBrightRGB(); // Recursively call until a bright color is found
    }
    return rgbColor;
}

function getVividHSL() {
    const h = random(0, 360);
    const s = random(80, 100);
    const l = random(40, 60);
    const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    return hslColor;;
    // if (isTooGray(r1, g1, b1)) {
    //     return getBrightRGB(); // Recursively call until a bright color is found
    return hslColor;
}

function isTooGray(r, g, b, threshold = 20) {
    // const max = Math.max(r, g, b);
    // const min = Math.min(r, g, b);
    // return max - min <= threshold;
}

function rgbToHsl(r, g, b)  {

r *= 255;
g *= 255;
b *= 255;

const max = Math.max(r, g, b);
const min = Math.min(r, g, b);

let h = 0, s = 0, l = (max + min) / 2;

if (max === min) {
    h = s = 0; // achromatic

} else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
    }
    h = h /6;
}

return {h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100),};

}

function rgbToHsb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0,
        s = 0,
        v = max; // In HSB/HSV, Value/Brightness is the max component

    const d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max !== min) {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = h / 6;
    }

    return { h: Math.round(h * 360),
             s: Math.round(s * 100),
             b: Math.round(v * 100) };
}

function hslToRgb(h, s, l) {

let r, g, b;

s /= 100;
l /= 100;

if (s === 0) {
    r = g = b = l; // achromatic
} else {
    const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h / 360 + 1 / 3);
    g = hue2rgb(p, q, h / 360);
    b = hue2rgb(p, q, h / 360 - 1 / 3);
}

return `rgb(${r}, ${g}, ${b})`;
}

function getContrastingTextColor(rgbColor) {
    const rgb = rgbColor.match(/\d+/g).map(Number);
    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]);
    return luminance > 149 ? 'black' : 'white';
}

//! █████████████ h1Test getBrightRGB BACKGROUND

const h1Test = getBrightRGB();

const textColor = getContrastingTextColor(h1Test);

const h1Elements1 = document.querySelectorAll(".rgbBright");
h1Elements1.forEach((h1) => {
    h1.style.backgroundColor = h1Test;
        h1.style.color = getContrastingTextColor(h1Test);

    h1.textContent = h1Test
});

//! █████████████ rgbBright getBrightRGB

const rgbBright = getBrightRGB();
console.log(rgbBright);

const h1Elements3 = document.querySelectorAll(".container__title");
h1Elements3.forEach((h1) => {
    h1.style.color = rgbBright;
});

//! ███████████████████████████ h2Test
const h2Test = getVividHSL();
console.log(h2Test);
const h1Elements2 = document.querySelectorAll(".h2Test");
h1Elements2.forEach((h2) => {
    h2.style.backgroundColor = h2Test;
    h2.textContent = h2Test;
});

//! █████████████████████████████ rgbExample
const rgbExample = getRgb(150, 150, 150);

const elements4 = document.querySelectorAll(".rgbExample");
elements4.forEach((element) => {
    element.style.backgroundColor = rgbExample;
    element.style.color = getContrastingTextColor(rgbExample);
    
    element.textContent = rgbExample;
});

})