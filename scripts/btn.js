document.querySelector('.btn').addEventListener('click', changeBg)

function changeBg(){
    const arrColorCodes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let color = '#';
    for(i=0; i<6 ; i++){
        color += arrColorCodes[Math.floor(Math.random()*16)];
        
    }
    document.body.style.backgroundColor = color
    console.log(color);
}

setInterval(changeBg, 1000)