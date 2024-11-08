const movable = document.getElementById('movable')
const target = document.getElementById('target')
let posx = 0
let posy = 0
const movimento = 10

movable.addEventListener('click', function() { 
    if(movable.style.backgroundColor == "blue") {
        movable.style.backgroundColor = "green"
    } else {
        movable.style.backgroundColor = "blue"
    }
})


target.addEventListener('click', function() { 
    if(target.style.backgroundColor == "red") {
        target.style.backgroundColor = "purple"
    } else {
        target.style.backgroundColor = "red"
    }
})


document.addEventListener('keydown',(event) => {
    if(event.key ==='w'){
        posy -= movimento
        if(posy < 0){
            posy = 0
        }
    }
    else if(event.key ==='s'){
        posy += movimento
        if(posy > 350){
            posy = 350
        }
    }
    else if(event.key ==='a'){
        posx -= movimento
        if(posx < 0){
            posx = 0
        }
    }
    else if(event.key ==='d'){
        posx += movimento
        if(posx > 550){
            posx = 550
        }
    }
   
 
    movable.style.top = posy +'px'  
    movable.style.left = posx +'px'

    if(colisaoDetectada(movable, target )){

        target.style.backgroundColor = "black"

        if(target.style.backgroundColor == "black") {
            target.style.backgroundColor = "green"
        } else {
            target.style.backgroundColor = "black"
        }


       }
    });


    function colisaoDetectada(el1, el2){


    const movable = el1.getBoundingClientRect();
    const target = el2.getBoundingClientRect();



    if(movable.top >= target.bottom){
        return false;
    }
    else if(movable.bottom <= target.top){
        return false;
    }
    else if(movable.left >= target.right){
        return false;
    }
    else if(movable.right <= target.left){
        return false;
    }
    return true;
     
    }