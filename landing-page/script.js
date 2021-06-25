// let email2 = document.querySelector(".email-2");
// let enterEmail = document.getElementById('enter-email');
// let submitSubscriptionInfo = document.getElementsByClassName('sub-btn');


// NAV BAR WITH NEW NAV BAR

const menu = document.querySelector('.fi-menu');
const exitMenu = document.querySelector('.fl-x');
const webViewNav = document.querySelector('nav')
const mobileViewNav = document.querySelector('.newnav')

let menuClose = false;


menu.addEventListener("click", () => {

  
if (menu.value==!menuClose){
    webViewNav.style.display = "none";
    mobileViewNav.style.display = "block";
    
    menuOpen = true
}

else{
    // webViewNav.style.display = "content";
    mobileViewNav.style.display = "none";
    
    menuOpen = false
}

}); 
// exitMenu.addEventListener('click', show())


// function show(){
//         if(menuOpen){
//             webViewNav.style.display = "block";
//             mobileViewNav.style.display = "block";
//         }
//         else{
//             webViewNav.style.display = "block";
//             mobileViewNav.style.display = "none";
//         }
//     }

