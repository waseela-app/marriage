function notification(clicked){

    const element = document.getElementById(clicked);
    
    if (element.classList.contains('active-notification')){
        element.classList.remove("active-notification");
    }
    else{
        const data = document.querySelectorAll('.notification');
        data.forEach( item => {
            item.classList.remove("active-notification");
        });
        element.classList.add("active-notification");
    }
};

function mobileMenu(){
    const element = document.querySelector('.mobile-menu');
    element.classList.toggle("active-mobile-menu");
};