var answer = null;

function showAnswer(){
    console.log(answer)
}

function mobileMenu(){
    const element = document.querySelector('.mobile-menu');
    element.classList.toggle("active-mobile-menu");
};

function mobileProfile(){
    const element = document.querySelector('.messages-profile-area');
    element.classList.toggle("active-mobile-menu");
};

function mobileChats(){
    const element = document.querySelector('.messages-chats-area');
    element.classList.toggle("active-mobile-menu");
};

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

function slidRight(){

    const element = document.querySelector('.active-slid');
    const story = document.querySelector('.active-story');
    element.classList.remove('active-slid');
    story.classList.remove('active-story');

    if(element.id == 3){
        document.getElementById('2').classList.add('active-slid')
        document.getElementById('story-2').classList.add('active-story')
    }
    else if(element.id == 2){
        document.getElementById('1').classList.add('active-slid');
        document.getElementById('story-1').classList.add('active-story');
    }
    else{
        document.getElementById('1').classList.add('active-slid');
        document.getElementById('story-1').classList.add('active-story');
    }
}

function slidLeft(){

    const element = document.querySelector('.active-slid');
    const story = document.querySelector('.active-story');
    element.classList.remove('active-slid');
    story.classList.remove('active-story');

    if(element.id == 1){
        document.getElementById('2').classList.add('active-slid')
        document.getElementById('story-2').classList.add('active-story')
    }
    else if(element.id == 2){
        document.getElementById('3').classList.add('active-slid');
        document.getElementById('story-3').classList.add('active-story');
    }
    else{
        document.getElementById('3').classList.add('active-slid');
        document.getElementById('story-3').classList.add('active-story');
    }
}

document.onclick = function(e){

    if (e.target.id == 'answer'){
        answer = e.target.value;
        const data = document.querySelectorAll('#answer');
        data.forEach( item => {
            item.classList.remove("active-answer");
        });
        e.target.classList.add('active-answer')
    }
    
    if (!e.target.classList.contains('fa-bars') && !e.target.classList.contains('mobile-menu')){
        const element = document.querySelector('.mobile-menu');
        element.classList.remove("active-mobile-menu");
    }
    
    if (e.target.id !== "mobile-profile" && !e.target.classList.contains('messages-profile-area')){
        const element = document.querySelector('.messages-profile-area');
        element.classList.remove("active-mobile-menu");
    }

    if (e.target.id !== "mobile-chats" && !e.target.classList.contains('messages-chats-area')){
        const element = document.querySelector('.messages-chats-area');
        element.classList.remove("active-mobile-menu");
    }
    
    if (e.target.id !== 'icon'){
        if(document.getElementById('alert') || document.getElementById('messages') || document.getElementById('logout')){
            document.getElementById('alert').classList.remove("active-notification");
            document.getElementById('messages').classList.remove("active-notification");
            document.getElementById('logout').classList.remove("active-notification");
        }
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