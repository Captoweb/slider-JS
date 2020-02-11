var sliderFactory = {
    createNewSlider: function() {
        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            showPrevBtn: null, //document.querySelector('.show-prev-btn'),
            showNextBtn: null, //document.querySelector('.show-next-btn'),
            slideImg: null, //document.querySelector('.slide-img'),
        
            start: function(elId) {
                var that = this;
        
                var elSelector = '#' + elId;
                var el = document.querySelector(elSelector);
        
                this.showPrevBtn = el.querySelector('.show-prev-btn'),
                this.showNextBtn = el.querySelector('.show-next-btn'),
                this.slideImg = el.querySelector('.slide-img'),
            
        
                this.showPrevBtn.addEventListener('click', function(e) {
                    that.onShowPrevBtnClick(e);
                });
        
                this.showNextBtn.addEventListener('click', function(e) {
                    that.onShowNextBtnClick(e);
                });
        
                // create images array
                this.imagesUrls.push('https://wallbox.ru/resize/800x480/wallpapers/main/201434/9dd7430cb151980.jpg');
                this.imagesUrls.push('http://hdwallpaperg.com/wp-content/uploads/2015/04/Bristol-Cars-Wallpaper.jpg');
                this.imagesUrls.push('https://europeluxurycarrental.ru/sites/default/files/images/cars/ferrari-oakley-front-white.jpg');
                this.imagesUrls.push('https://need4speed.ws/sites/default/files/styles/225x120/public/wallpaper/other/80732/fisker-wallpaper-80732-1833053.png?itok=nei5W7hg');
                this.slideImg.src = this.imagesUrls[this.currentImageIndex]; 
                this.showPrevBtn.disabled = true; 
            },
        
            onShowPrevBtnClick: function(e) {
                this.currentImageIndex --;
                this.slideImg.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;
            
                if (this.currentImageIndex === 0 ) {
                    this.showPrevBtn.disabled = true;
                }
            },
        
            onShowNextBtnClick: function(e) {
                this.currentImageIndex ++;
                this.slideImg.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;
            
                if (this.currentImageIndex === (this.imagesUrls.length - 1) ) {
                    this.showNextBtn.disabled = true;
                }
            }
            
        };
    
        return newSlider;
    }
}
