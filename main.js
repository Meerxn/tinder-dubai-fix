var nope = document.querySelector('*[aria-label^="Nope"]');
 var yes = document.querySelector('*[aria-label^="Like"]');
 var yesCounter = 0 ; 
// Need to make black list 
// Ell has two profiles so need to index correctly 
// also use backboard class as that has bio which sometimes has numbers too. 

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
