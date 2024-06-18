document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        document.getElementById("demo").style.display = "none";
    }
}

let active = false;

function openNav(){
    document.getElementById("menuBar").src = active?
    "menu.png": "close.png";
    document.getElementById("slidenav").style.height = active?
    "0%": "100%";
   
    active = !active;
}