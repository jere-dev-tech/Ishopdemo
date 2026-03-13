let carousel = document.querySelector('.carousel');

let carouselInner = document.querySelector('.carousel-inner');

let prev = document.querySelector('.carousel-controls .prev');

let next = document.querySelector('.carousel-controls .next');

let slides =  document.querySelectorAll('.carousel-inner .carousel-item');

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000;

let time;

let mouseStartX = 0;
let isMouseDown = false;
let hasDragged = false;
let justDragged = false;
const minDragDistance = 50;
const dragThreshold = 5;

//Init carousel
carouselInner.style.minWidth = (totalSlides * 100) + '%';
restoreCarouselPositionFromStorage();
loadIndicators();
setActiveIndicatorByIndex(activeSlide);
setActiveSlideClass();
// Autoplay deshabilitado para el slider principal
loop(false);


//Carousel events



carouselInner.addEventListener('transitionend', function onCarouselTransitionEnd(){
    if(direction === -1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide++;
                carouselInner.append(carouselInner.firstElementChild);
            }
        }else{
            activeSlide++;
            carouselInner.append(carouselInner.firstElementChild);
        }
    }else if(direction === 1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide--;
                carouselInner.prepend(carouselInner.lastElementChild);
            }
        }else{
            activeSlide--;
            carouselInner.prepend(carouselInner.lastElementChild);
        }
    }

    carouselInner.style.transition = 'none';
    carouselInner.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump = 1;
        carouselInner.style.transition = 'all ease .5s';
    });
    updateIndicators();
});

document.querySelectorAll('.carousel-indicators span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        if (justDragged) return;
        let slideTo = parseInt(e.target.dataset.slideTo);
        let indicators = document.querySelectorAll('.carousel-indicators span');
        indicators.forEach((it,index)=>{
            if(it.classList.contains('active')){
                activeIndicator = index;
            }
        });
        setActiveIndicatorByIndex(slideTo);
        if(slideTo - activeIndicator > 1){
            jump = slideTo - activeIndicator;
            step = jump * step;
            slideToNext();
        }else if(slideTo - activeIndicator === 1){
            slideToNext();
        }else if(slideTo - activeIndicator < 0){

            if(Math.abs(slideTo - activeIndicator) > 1){
                jump = Math.abs(slideTo - activeIndicator);
                step = jump * step;
                slideToPrev();
            }
                slideToPrev();
        }
        step = 100 / totalSlides; 
    })
});

carousel.addEventListener('mouseover',()=>{
    loop(false);
})

carousel.addEventListener('mouseout',()=>{
    loop(true);
})

// Mouse drag support – entire hero (including images/links) is draggable
carousel.addEventListener('mousedown', (e) => {
    if (e.target.closest('.carousel-indicators')) return;
    e.preventDefault();
    mouseStartX = e.clientX;
    isMouseDown = true;
    hasDragged = false;
    loop(false);
});
carousel.addEventListener('click', (e) => {
    if (justDragged && e.target.closest('a')) {
        e.preventDefault();
        e.stopPropagation();
    }
}, true);

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown || !carousel) return;
    if (Math.abs(e.clientX - mouseStartX) > dragThreshold) {
        hasDragged = true;
        carousel.classList.add('is-dragging');
    }
});

document.addEventListener('mouseup', (e) => {
    if (!isMouseDown) return;
    if (hasDragged && Math.abs(e.clientX - mouseStartX) > minDragDistance) {
        if (e.clientX - mouseStartX > 0) {
            slideToPrev();
        } else {
            slideToNext();
        }
        justDragged = true;
        setTimeout(() => { justDragged = false; }, 100);
    }
    carousel.classList.remove('is-dragging');
    isMouseDown = false;
    hasDragged = false;
    setTimeout(() => loop(true), 600);
});

carousel.addEventListener('mouseleave', () => {
    if (isMouseDown) {
        carousel.classList.remove('is-dragging');
        isMouseDown = false;
        hasDragged = false;
        setTimeout(() => loop(true), 0);
    }
});

// Touch / swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50;

carousel.addEventListener('touchstart', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].clientX;
        loop(false);
    }
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                slideToNext();
            } else {
                slideToPrev();
            }
        }
        setTimeout(() => loop(true), 600);
    }
}, { passive: true });

//Carousel functions

function loadIndicators(){
    slides.forEach((slide,index)=>{
        if(index === 0){
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators(){
    if(activeSlide > (totalSlides - 1)){
        activeSlide = 0;
    }else if(activeSlide < 0){
        activeSlide = (totalSlides - 1);
    }
    document.querySelector('.carousel-indicators span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators span')[activeSlide].classList.add('active');
    setActiveSlideClass();

    // Restart iPhone floating product animation whenever its banner becomes active
    restartIphoneProductAnimationIfNeeded();

    // Persist current slide index for development so carousel stays on same banner after reload
    try {
        localStorage.setItem('currentBannerSlide', String(activeSlide));
    } catch (e) {
        // ignore storage errors (e.g. disabled cookies)
    }
}

function restartIphoneProductAnimationIfNeeded(){
    if (!slides || !slides.length) return;
    const currentSlideEl = slides[activeSlide];
    if (!currentSlideEl || !currentSlideEl.querySelector) return;
    const products = currentSlideEl.querySelectorAll('.iphone-floating-product, .iphone13-floating-product');
    if (!products.length) return;

    products.forEach((product) => {
        // Restart whatever CSS animation is defined for this element
        product.style.animation = 'none';
        // Force reflow to flush the style change
        void product.offsetWidth;
        product.style.animation = '';
    });
}

function restoreCarouselPositionFromStorage(){
    if (!carouselInner || !totalSlides) return;
    let savedIndex = null;
    try {
        const raw = localStorage.getItem('currentBannerSlide');
        if (raw !== null) {
            const parsed = parseInt(raw, 10);
            if (!Number.isNaN(parsed) && parsed >= 0 && parsed < totalSlides) {
                savedIndex = parsed;
            }
        }
    } catch (e) {
        savedIndex = null;
    }

    if (savedIndex === null || savedIndex === 0) {
        activeSlide = 0;
        return;
    }

    // Rotate the DOM so the saved slide becomes the first visible item
    for (let i = 0; i < savedIndex; i++) {
        if (carouselInner.firstElementChild) {
            carouselInner.append(carouselInner.firstElementChild);
        }
    }
    activeSlide = savedIndex;
}

function setActiveSlideClass(){
    if (!carouselInner) return;
    var items = carouselInner.querySelectorAll('.carousel-item');
    var visible = carouselInner.firstElementChild;
    items.forEach(function(el){ el.classList.remove('active'); });
    if (visible) visible.classList.add('active');
}

function setActiveIndicatorByIndex(index){
    const i = (index + totalSlides) % totalSlides;
    const indicators = document.querySelectorAll('.carousel-indicators span');
    if (!indicators.length) return;
    indicators.forEach(span => span.classList.remove('active'));
    if (indicators[i]) indicators[i].classList.add('active');
}

function slideToNext(){
    if(direction === 1){
        direction = -1;
        carouselInner.prepend(carouselInner.lastElementChild);
    };
    setActiveIndicatorByIndex(activeSlide + jump);
    carousel.style.justifyContent = 'flex-start';
    carouselInner.style.transform = `translateX(-${step}%)`;
};

function slideToPrev(){
    if(direction === -1){
        direction = 1;
        carouselInner.append(carouselInner.lastElementChild);
    };
    setActiveIndicatorByIndex(activeSlide - jump);
    carousel.style.justifyContent = 'flex-end'
    carouselInner.style.transform = `translateX(${step}%)`;
};

function loop(status){
    // Desactivar completamente el autoplay
    clearInterval(time);
}



