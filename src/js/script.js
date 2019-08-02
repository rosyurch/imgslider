const imagesArr = Array.from(document.querySelectorAll('.slider .container .pics > img'));
const prevBtn = document.querySelector('.slider .container .btn-prev');
const nextBtn = document.querySelector('.slider .container .btn-next');
const dot0 = document.querySelector('#dot-0');
const dot1 = document.querySelector('#dot-1');
const dot2 = document.querySelector('#dot-2');
const dots = Array.from(document.querySelectorAll('.dot-cont .dot'));
const setting = document.querySelector('.slider .toggle p');

let classesToAdd = ['current'];

nextBtn.addEventListener('click', event => {
    let curIndex = getCurrentIndexRemoveClass(imagesArr);
    console.log(imagesArr[curIndex]);
    newCurIndex = (curIndex + 1) % imagesArr.length;
    if (setting.innerText === 'Slide in') imagesArr[curIndex].classList.add('slide-out');
    if (imagesArr[newCurIndex].classList.contains('slide-out')) imagesArr[newCurIndex].classList.remove('slide-out');

    imagesArr[newCurIndex].classList.add(...classesToAdd);

    const curr = dots.filter(dot => dot.classList.contains('current-dot'));
    curr[0].classList.remove('current-dot');
    dots[newCurIndex].classList.add('current-dot');
});

prevBtn.addEventListener('click', event => {
    let curIndex = getCurrentIndexRemoveClass(imagesArr);
    console.log(imagesArr[curIndex]);
    newCurIndex = curIndex ? curIndex - 1 : imagesArr.length - 1;
    imagesArr[newCurIndex].classList.add(...classesToAdd);

    const curr = dots.filter(dot => dot.classList.contains('current-dot'));
    curr[0].classList.remove('current-dot');
    dots[newCurIndex].classList.add('current-dot');
});

dot0.addEventListener('click', dotHandler);
dot1.addEventListener('click', dotHandler);
dot2.addEventListener('click', dotHandler);

setting.addEventListener('click', settingToggle);

function settingToggle(event) {
    if (event.target.innerText === 'Fade in') {
        event.target.innerText = 'Slide in';
        classesToAdd.push('move', 'slide-in');
    } else {
        event.target.innerText = 'Fade in';
        classesToAdd.pop();
        classesToAdd.pop();
        imagesArr.forEach(img => img.classList.remove('move', 'slide-in', 'slide-out'));
    }
}

function dotHandler(event) {
    const curr = dots.filter(dot => dot.classList.contains('current-dot'));
    curr[0].classList.remove('current-dot');
    event.target.classList.add('current-dot');
    getCurrentIndexRemoveClass(imagesArr);
    imagesArr[parseInt(event.target.id[4], 10)].classList.add(...classesToAdd);
}

// function hide(arr, index) {
//     arr[index].classList.add('hide');
// }

// function unhide(arr, index) {
//     arr[index].classList.remove('hide');
// }

function getCurrentIndexRemoveClass(arr) {
    const curr = arr.filter(image => image.classList.contains('current'));
    index = arr.indexOf(curr[0]); // filter returns 1-element array
    curr[0].classList.remove(...classesToAdd);
    // if (setting.innerText === 'Slide in') curr[0].classList.add('hide');
    return index;
}
