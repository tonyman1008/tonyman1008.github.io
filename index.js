filesList = [
    'beach-2.png',
    'beach.png',
    'cal.png',
    'encode.png',
    'game.png',
    'openGL-1.png',
    'sci1.png',
    'sci2.png',
    'truck-1.png',
    'truck-2.png',
    'website.png',
    'xiaotou-1.png',
    'xiaotou-2.png',
    'thesis.png',
    'touring-1.png',
    'touring-2.png',
    'touring-3.png',
]
imagesPath = './images/portfolio/'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    on: {
        init: function () {
            console.log('swiper initialized');
            filesList.forEach(file => {
                path = imagesPath + file
                this.appendSlide(` <div class="swiper-slide h-100 d-flex justify-content-center"> \
                <img src="${path}" class="img-fluid h-100 w-auto " alt="photo"> </div>`)
            });
        },
    },
    loop: true,
    autoplay: {
        delay: 1500,
    },
    // pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //  scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

