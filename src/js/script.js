const imagesArr = Array.from(document.querySelectorAll('.slider .container .pics img'));
const prevBtn = document.querySelector('.slider .container .btn-prev');
const nextBtn = document.querySelector('.slider .container .btn-next');
const dot0 = document.querySelector('#dot-0');
const dot1 = document.querySelector('#dot-1');
const dot2 = document.querySelector('#dot-2');
const dots = Array.from(document.querySelectorAll('.dot-cont .dot'));
const setting = document.querySelector('.slider .toggle button');
const picContainer = document.querySelector('.slider .container .pics .pic-cont');

nextBtn.addEventListener('click', fadeInListener);
prevBtn.addEventListener('click', fadeInListener);

dot0.addEventListener('click', dotHandler);
dot1.addEventListener('click', dotHandler);
dot2.addEventListener('click', dotHandler);

setting.addEventListener('click', settingToggle);

function settingToggle(event) {
    if (setting.innerText === 'Slide in') {
        setting.innerText = 'Fade in';

        picContainer.classList.add('fade-in-position');
        picContainer.style.transform = `translateX(0px)`;

        nextBtn.removeEventListener('click', slideInListener);
        prevBtn.removeEventListener('click', slideInListener);
        nextBtn.addEventListener('click', fadeInListener);
        prevBtn.addEventListener('click', fadeInListener);
    } else {
        setting.innerText = 'Slide in';

        picContainer.classList.remove('fade-in-position');

        nextBtn.removeEventListener('click', fadeInListener);
        prevBtn.removeEventListener('click', fadeInListener);
        nextBtn.addEventListener('click', slideInListener);
        prevBtn.addEventListener('click', slideInListener);
    }
}

function fadeInListener(event) {
    const curIndex = getCurrentIndexRemoveClass(imagesArr);
    if (event.target.id === 'next') {
        const newIndex = (curIndex + 1) % imagesArr.length;
        imagesArr[newIndex].classList.add('current');

        moveActiveDot(newIndex);
    } else {
        const newIndex = curIndex - 1 < 0 ? imagesArr.length - 1 : curIndex - 1;
        imagesArr[newIndex].classList.add('current');

        moveActiveDot(newIndex);
    }
}

function slideInListener(event) {
    const ind = getCurrentIndexRemoveClass(imagesArr);

    if (event.target.id === 'next') {
        const newIndex = (ind + 1) % imagesArr.length;
        picContainer.style.transform = `translateX(-${newIndex * 80}vw)`;
        imagesArr[newIndex].classList.add('current');

        moveActiveDot(newIndex);
    } else {
        const newIndex = ind - 1 < 0 ? imagesArr.length - 1 : ind - 1;
        picContainer.style.transform = `translateX(-${newIndex * 80}vw)`;
        imagesArr[newIndex].classList.add('current');

        moveActiveDot(newIndex);
    }
}

function dotHandler(event) {
    const curr = dots.filter(dot => dot.classList.contains('current-dot'));
    curr[0].classList.remove('current-dot');
    event.target.classList.add('current-dot');
    getCurrentIndexRemoveClass(imagesArr);

    imagesArr[event.target.id[4]].classList.add('current');
    if (setting.innerText === 'Slide in') picContainer.style.transform = `translateX(-${event.target.id[4] * 80}vw)`;
}

function moveActiveDot(newIndex) {
    const curr = dots.filter(dot => dot.classList.contains('current-dot'));
    curr[0].classList.remove('current-dot');
    dots[newIndex].classList.add('current-dot');
}

function getCurrentIndexRemoveClass(arr) {
    const curr = arr.filter(image => image.classList.contains('current'));
    index = arr.indexOf(curr[0]); // filter returns 1-element array
    curr[0].classList.remove('current');
    return index;
}
