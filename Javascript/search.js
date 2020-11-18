function search_item() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('items'); 
    if(input){
        document.querySelector('h2').style.display = "none";
        document.querySelector('.noitems').style.display = "none";
        document.querySelector('.mySlide fade').style.display = "none";
    }
    else{
        document.querySelector('h2').style.display = "block";
        document.querySelector('.noitems').style.display = "block";
    }

    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 