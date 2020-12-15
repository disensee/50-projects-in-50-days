const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;


//run blurring function every 30ms
let int = setInterval(blurring, 30);

function blurring () {
    load++;

    //stop running blurring function when load value hits 100
    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }