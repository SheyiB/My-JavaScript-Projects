document.querySelector(".add").addEventListener('click',adder)
document.querySelector(".low").addEventListener('click',lower)

function adder(){
    +document.querySelector(".cntr h1").textContent++
}

function lower(){
    +document.querySelector(".cntr h1").textContent--
}