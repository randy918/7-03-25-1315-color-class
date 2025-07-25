// import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/modules/index-all.js";

// import { getYear } from "./myfunctions.js";
document.addEventListener("DOMContentLoaded", function () {



console.log("hello");

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


function getVividHSL() {
    const h = random(0, 360);
    const s = random(80, 100);
    const l = random(0, 80);
    const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    // if (isTooGray(r1, g1, b1)) {
    //     return getBrightRGB(); // Recursively call until a bright color is found
    return hslColor;
}


function isTooGray(r, g, b, threshold = 20) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    return max - min <= threshold;
}


function rgbToHsl(r, g, b)  {

r /= 255;
g /= 255;
b /= 255;

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
        if (t < 1 / 6) return p + (q - p) * 6 * t1;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l1 * s1;
    const p = 2 * l - q1;
    r = hue2rgb(p, q, h / 360 + 1 / 3);
    g = hue2rgb(p, q, h / 360);
    b = hue2rgb(p, q, h / 360 - 1 / 3);
}

return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
};


}

//! ██████████████████████████ GET BRIGHT RGB SINGLE

const h1Test = getBrightRGB();

const h1Elements1 = document.querySelectorAll(".h1Test");
h1Elements1.forEach((h1) => {
    h1.style.backgroundColor = h1Test;
});

console.log(getBrightRGB());

//! ███████████████████████████ GET VIVID HSL SINGLE
const h2Test = getVividHSL();

const h1Elements2 = document.querySelectorAll(".h2Test");
h1Elements2.forEach((h2) => {
    h2.style.backgroundColor = h2Test;
    h2.textContent = "Your desired text phrase";
});


//! █████████████████████████████ CONVERT RGB TO HSL

console.log(rgbToHsl (200, 200, 100));

console.log(rgbToHsb (200, 200, 100));

console.log(hslToRgb (160, 0, 50));

})