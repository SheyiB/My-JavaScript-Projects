const form = document.querySelector("form"),
todo_text = document.querySelector("#todo_text"),
card_title = document.querySelector('.card_title'),
card = document.querySelector('.card'),
time = document.querySelector('div#todos ul li:nth-child(2)')




form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(todo_text.value == ""){
        alert("Enter a TEXT!");
    }
    else{

        const cardi = card.cloneNode(true);
        cardi.firstElementChild.textContent = todo_text.value;
        console.log(cardi);
        
        card.parentElement.appendChild(cardi);

        todo_text.value="";
       
    }

})
