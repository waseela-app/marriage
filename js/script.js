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

document.onclick = function(e){

    if (!e.target.classList.contains('fa-bars') && !e.target.classList.contains('mobile-menu')){
        const element = document.querySelector('.mobile-menu');
        element.classList.remove("active-mobile-menu");
    }
    
    if (e.target.id !== 'icon'){
        document.getElementById('alert').classList.remove("active-notification");
        document.getElementById('messages').classList.remove("active-notification");
        document.getElementById('logout').classList.remove("active-notification");
    }
    
    if (e.target.classList.contains('questions-area') || e.target.closest('.questions-area') !== null){
        if (e.target.classList.contains('active-question') || e.target.closest('.questions-area').classList.contains('active-question')){
            const data = document.querySelectorAll('.questions-area');
            data.forEach( item => {
                item.classList.remove("active-question");
            });
        }
        else{
            const data = document.querySelectorAll('.questions-area');
            data.forEach( item => {
                item.classList.remove("active-question");
            });
            
            if (e.target.classList.contains('questions-area')){
                e.target.classList.add("active-question")
            }
            else {
                e.target.closest('.questions-area').classList.add("active-question")
            }
        }
    }
}