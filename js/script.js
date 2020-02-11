var imagesUrls = [];
var currentImageIndex = 0;
//work with car
window.alert(car1.isTurnOn);
car1.start();
window.alert(car1.isTurnOn);



// find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImg = document.getElementById('slide-img');

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
imagesUrls.push('https://wallbox.ru/resize/800x480/wallpapers/main/201434/9dd7430cb151980.jpg');
imagesUrls.push('http://hdwallpaperg.com/wp-content/uploads/2015/04/Bristol-Cars-Wallpaper.jpg');
imagesUrls.push('https://europeluxurycarrental.ru/sites/default/files/images/cars/ferrari-oakley-front-white.jpg');
imagesUrls.push('https://i.pinimg.com/736x/bf/6f/47/bf6f4772d35c0cde7fb0ebfc7bc51321--automotive-design-true-gentleman.jpg');


slideImg.src = imagesUrls[currentImageIndex]; 
showPrevBtn.disabled = true; 

//function definition
function onShowPrevBtnClick(e) {
    currentImageIndex --;
    slideImg.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0 ) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick(e) {
    currentImageIndex ++;
    slideImg.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    if (currentImageIndex === (imagesUrls.length - 1) ) {
        showNextBtn.disabled = true;
    }
}