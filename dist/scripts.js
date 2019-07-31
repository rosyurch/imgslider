const images = document.querySelectorAll('.slider .container .pics > img');
const prevBtn = document.querySelector('.slider .container .btn-prev');
const nextBtn = document.querySelector('.slider .container .btn-next');

imagesArr = Array.from(images);

nextBtn.addEventListener('click', event => {
    let curr = imagesArr.filter(image => image.classList.contains('current'));
    curIndex = imagesArr.indexOf(curr[0]);
    curr[0].classList.remove('current'); // filter returns 1-element array
    imagesArr[(curIndex + 1) % imagesArr.length].classList.add('current');
});

prevBtn.addEventListener('click', event => {
    let curr = imagesArr.filter(image => image.classList.contains('current'));
    curIndex = imagesArr.indexOf(curr[0]);
    curr[0].classList.remove('current');
    imagesArr[curIndex ? curIndex - 1 : imagesArr.length - 1].classList.add(
        'current'
    );
});
