const slider2Forward = () => {
    const slides = document.querySelectorAll('.slide2');
    const slideActive = slides[2];
    const copyOfActiveSlide = slides[2].cloneNode(true);
    const slideContainer = document.querySelector('.slides2');

    slideContainer.insertBefore(slides[2], slideContainer.children[0]);
    slideContainer.appendChild(copyOfActiveSlide);
    slideActive.classList.remove('active');

    setTimeout(() => {
        slides[1].classList.add('active')
        copyOfActiveSlide.style.width = '0';

        setTimeout(() => {
            copyOfActiveSlide.remove();
            // console.log(slides);
        }, 501)
    }, 1)
}

const slider2Back = () => {
    const slides = document.querySelectorAll('.slide2');
    const slideActive = slides[0];
    const slideActiving = slides[2];
    const copyOfActiveSlide = slides[0].cloneNode(true);
    const slideContainer = document.querySelector('.slides2');

    copyOfActiveSlide.style.transitionDuration = '0';
    copyOfActiveSlide.style.width = '0';
    slideContainer.appendChild(copyOfActiveSlide);

    setTimeout(() => {
        copyOfActiveSlide.removeAttribute('style');

        setTimeout(() => {
            copyOfActiveSlide.classList.add('active');
            slideActiving.classList.remove('active');

            setTimeout(() => {
                slideActive.remove();
            }, 503);
        }, 1);
    }, 1)
}

const sloganCar = () => {
    const carActive = document.querySelector('.slide2.active').getAttribute("data-index");
    const slogan = document.querySelector(`.slide2-text-container .slogan${carActive}`);
    slogan.classList.add('active');
    let nameCar = slogan.firstElementChild;
    displayEachWord(nameCar, 70)
}

const logicForModelSlider = () => {
    const navBtns = document.querySelectorAll('.slider2-navigation-btn .btn')
    navBtns.forEach(btn => {
        let check = true;
        btn.onclick = e => {
            e.stopPropagation();
            while (check == true) {
                check = false;
                const sloganActive = document.querySelector(`.text-container.active`);
                sloganActive?.classList?.remove('active');
                if (btn?.classList?.contains('btn-left')) {
                    slider2Back();
                } else {
                    slider2Forward();
                }
                setTimeout(() => {
                    check = true;
                    sloganCar();
                }, 650);
            }
        }
    });

    //Create
    const navCreateBtns = document.querySelectorAll('.content-create-nav__choose-name')
    navCreateBtns.forEach(btnCreate => {
        btnCreate.onclick = e => {
            e.stopPropagation();
            navCreate(btnCreate)
        }
    })
}

logicForModelSlider();

  