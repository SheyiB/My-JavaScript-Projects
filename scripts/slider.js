imgarray = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg']

let n = 0;
//document.querySelector("img").src = "media/images/"+imgarray[2]; 
// for (img in imgarray){   
//     imgarray[img];
// }

document.querySelector(".right").addEventListener('click',increase);
document.querySelector(".left").addEventListener('click',decrease);

function increase(){
    document.querySelector("img").classList.add("transleave");
        
   n++;
   if (n > 6){
        console.log(`the value of n is ${n} and it has reached its maximum`);
        n = 0 ;        
    }
   //console.log(`the value of n in increase is ${n}`);
   document.querySelector("img").src = "media/images/"+imgarray[n];

   
   document.querySelector("img").classList.add("trans");  
   document.querySelector("img").classList.remove("transleave");
    //console.log(n)
}

function decrease(){

    n--;
    if (n < 0){
        console.log(`the value of n is ${n} it has reached its minimum`);
        n = 6;
    }
    document.querySelector("img").src = "media/images/"+imgarray[n];
    //console.log(`the value of n in decrease is ${n}`);

}

//setInterval(increase,3000);