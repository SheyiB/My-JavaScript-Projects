const amount = document.querySelector("#amount"),
    thousand = document.querySelector("#thousand"),
    fhundred = document.querySelector("#fhundred"),
    thundred = document.querySelector("#thundred"),
    hundred = document.querySelector("#hundred"),
    fifty = document.querySelector("#fifty"),
    twenty = document.querySelector("#twenty"),
    ten = document.querySelector("#ten"),
    five = document.querySelector("#five"),
    action = document.querySelector("#action"),
    form = document.querySelector("#form");

const amount2 = document.querySelector("#amount2"),
    thousand2 = document.querySelector("#thousand2"),
    fhundred2 = document.querySelector("#fhundred2"),
    thundred2 = document.querySelector("#thundred2"),
    hundred2 = document.querySelector("#hundred2"),
    fifty2 = document.querySelector("#fifty2"),
    twenty2 = document.querySelector("#twenty2"),
    ten2 = document.querySelector("#ten2"),
    five2 = document.querySelector("#five2"),
    action2 = document.querySelector("#action2"),
    form2 = document.querySelector("#form2");


const funAction=(e)=>{
    e.preventDefault();
    cls();
    segment(+amount.value);   
}



function cls(){
    thousand.value = "";
    fhundred.value = "";
    thundred.value = "";
    hundred.value = "";
    fifty.value = "";
    twenty.value = "";
    ten.value = "";
    five.value = "";
}

function cls2(){
    thousand2.value = "";
    fhundred2.value = "";
    thundred2.value = "";
    hundred2.value = "";
    fifty2.value = "";
    twenty2.value = "";
    ten2.value = "";
    five2.value = "";
}

function segment(amt){
    
    //let rem = new Number(0);
    //const amt = amount.value;
    if(amt >= 1000){
        thousand.value = Math.floor(amt/1000);
        rem = amt%1000;  
        
    }

    else if(amt >=500){
        fhundred.value = Math.floor(amt/500);
        rem = amt%500;    
    }

    else if(amt >= 200){
        thundred.value = Math.floor(amt/200);
        rem = amt%200;    
    }

    else if(amt >= 100){
        hundred.value = Math.floor(amt/100);
        rem = amt%100;    
    }

    else if(amt >= 50){
        fifty.value = Math.floor(amt/50);
        rem = amt%50;    
    }

    else if(amt >= 20){
        twenty.value = Math.floor(amt/20);
        rem = amt%20;    
    }

    else if(amt >= 10){
        ten.value = Math.floor(amt/10);
        rem = amt%10;    
    }

    else if(amt >= 5){
        five.value = Math.floor(amt/5);
        rem = amt%5;    
    }

if (rem == 0) return 1;
else segment(rem);
}

    


const funAction2=(e)=>{
    e.preventDefault();
    
    addItems();

}

function addItems(){
   const tot = (+thousand2.value *1000) + (+fhundred2.value *500)+ (+thundred2.value *200) + (+hundred2.value *100) + (+fifty2.value * 50) + 
   (+twenty2.value * 20) + (+ten2.value *10) + (+five2.value *5) ;

  // console.log(tot);

   amount2.value = tot;

}

action.onclick = funAction;
action2.onclick = funAction2;