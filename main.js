var nope = document.querySelector('*[aria-label^="Nope"]');
 var yes = document.querySelector('*[aria-label^="Like"]');
 var yesCounter = 0 ; 


for ( i = 0 ; i < document.querySelectorAll(".Ell").length ; i++){
    if(document.querySelectorAll(".Ell")[i].innerHTML.includes("Ws")){
        nope.click();
        break;
    }
    else{
       
    yes.click();
    yesCounter++;
    break;
    }
}
