const container = document.querySelector('.container');
const lightDarkBtn = document.querySelector('.light-dark-btn');
const navbar = document.querySelector('.navbar');
const lightDarkText = document.querySelector('.light-dark-text');
const createFbPosts = document.querySelector('.create-fb-posts');
const videoPhotoFeelings = document.querySelector('.video-photo-feelings');
const createRoom = document.querySelector('.create-room');

let dark = true;
let light = false;

lightDarkBtn.addEventListener('click', function(){
    navbar.classList.toggle('bg-white');
    navbar.classList.toggle('nav-gray-bg');
    container.classList.toggle('bg-gray-100');
    container.classList.toggle('container-gray-bg');
    createFbPosts.classList.toggle('bg-white');
    createFbPosts.classList.toggle('nav-gray-bg');
    createFbPosts.classList.toggle('border');
    videoPhotoFeelings.classList.toggle('border-gray-200');
    videoPhotoFeelings.classList.toggle('border-gray-700');
    createRoom.classList.toggle('nav-gray-bg');
    createRoom.classList.toggle('border');
    lightDarkBtn.classList.toggle('dark-btn-bg');
    lightDarkBtn.classList.toggle('light-btn-bg');

    if(dark){
        lightDarkText.textContent = "Light";
        lightDarkText.classList.remove("text-white");
        dark = false;
        light = true;
    }else if(light){
        lightDarkText.textContent = "Dark";
        lightDarkText.classList.add("text-white");
        dark = true;
        light = false;
    }
})
