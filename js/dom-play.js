// alert('It's working!');

// let actors = document.querySelectorAll(".hamlet");

// console.log(actors);

function myAlert(){
    alert("I'm clicked!");
}

let spans = document.querySelectorAll("#play span");

console.log(spans);

for (const mySpan of spans){
    mySpan.addEventListener("click", function (ev){
        highlightActor(mySpan.dataset.actor);
    });
    // alert(mySpan.dataset.actor);
}

function highlightActor(actor){
    for (const mySpan of spans){
        if(actor == mySpan.dataset.actor){// current actor, highlight
            mySpan.style.backgroundColor='yellow';
        }else{// not urrent actor, remove highlight
            mySpan.style.backgroundColor='gray';
        }
    }

    // alert("The current actor is: " + actor);
}


function highlight (el){

    if(el.style.backgroundColor == 'yellow'){
        el.style.backgroundColor = 'purple';

    }else{
        el.style.backgroundColor='yellow';
    }


}