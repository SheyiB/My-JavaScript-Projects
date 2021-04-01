let fnum = document.querySelector("#fnum");
let snum = document.querySelector("#snum");
let result = document.querySelector("#result");
let mul = document.querySelector("#mul");
let dvd = document.querySelector("#dvd");
let adds = document.querySelector("#adds");
let subs = document.querySelector("#subs");

function displaymult(){
    result.textContent = fnum.value * snum.value
}

function displaydvd(){
    result.textContent = fnum.value/snum.value
}

function displayadd(){
    result.textContent = +fnum.value + +snum.value
}

function displaysubs() {
    result.textContent = fnum.value - snum.value
}


mul.onclick = displaymult;
dvd.onclick = displaydvd;
adds.onclick = displayadd;
subs.onclick = displaysubs



