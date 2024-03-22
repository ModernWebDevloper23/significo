// gsap.registerplugin(ScrollTrigger)
function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
};
function homePageAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.landing__page',
            start: 'top top',
            end: "bottom top",
            pin: true,
            scrub: 1,
        }
    });

    tl.to(".home", {
        "--clip": '0%',
    }, 'a');
    tl.to(".marquee", {
        scale: '1',
    }, 'a')

    document.querySelectorAll('.marqueeitem-1').forEach((el) => {
        tl.to(el, {
            x: '150px',
        }, 'b')
    })
    document.querySelectorAll('.marqueeitem-2').forEach((el) => {
        tl.to(el, {
            x: '-150px',
        }, 'b')
    })
    let clutter = '';
    document.querySelector('.header').textContent.trim().split('').forEach((el) => {
        clutter += `<span>${el}</span>`;
    })
    document.querySelector('.header').innerHTML = clutter;
    tl.from('.header span', {
        opacity: 0,
        stagger: 0.01,
    }, 'a')
}
function cardPageAnimation() {
    document.querySelectorAll('.carditem').forEach((elem) => {
        gsap.to(elem, {
            backgroundColor: 'black',
            color: '#aedee0',
            width: '36vw',
            scrollTrigger: {
                trigger: elem,
                start: '420% 50%',
                end: '470% 50%',
                scrub: 1,
                // markers: true,
            }
        })
    })
    let craftsh1 = document.querySelector('.craftsh1');
    let splitedCraftsh1 = craftsh1.textContent.trim().split('');
    let clutter2 = '';
    splitedCraftsh1.forEach(elem => {
        clutter2 += `<span>${elem}</span>`
    })
    craftsh1.innerHTML = clutter2;
    gsap.from('.craftsh1 span', {
        opacity: 0,
        stagger: 0.01,
        scrollTrigger: {
            trigger: '.craftsh1',
            start: '330% 50%',
            end: '380% 50%',
        }
    })
}
function sliderAnimation() {
    gsap.to('.slide', {
        translateX: '-200%',
        scrollTrigger: {
            trigger: '.slides',
            start: '100% top',
            end: '200%  top',
            scrub: 1,
        }
    })
    let clutter3 = '';
    Array.from(document.querySelector('.realh1').textContent.trim().split('')).forEach(el => {
        clutter3 += `<span>${el}</span>`;
    })
    document.querySelector('.realh1').innerHTML = clutter3;
    gsap.from('.realh1 span', {
        opacity: 0,
        stagger: 0.01,
        y: '100px',
        scrollTrigger: {
            trigger: '.slides',
            start: '60% top',
            end: '160% top',
        }
    })

}
function teamPageAnimation() {
    document.querySelectorAll('.line-up-item').forEach(el => {
        el.addEventListener('mousemove', (dets) => {
            gsap.to(el.querySelector('.maskerOfTeam'), {
                height: '100%',
                duration: 0.2,
            })
            // gsap.to(this.querySelector('.picture'), {
            //     opacity: 1,
            //     duration: 0.1,
            //     scale: 1,
            // })
        })
        el.addEventListener('mouseout', () => {
            gsap.to(el.querySelector(".maskerOfTeam"), {
                height: '0%',
                duration: 0.2,
            })
            // gsap.to(this.querySelector('.picture'), {
            //     opacity: 0,
            //     duration: 0.01,
            //     scale: 0.7,
            // })
        })
    })
    document.querySelectorAll('.line-up-item').forEach(el => {
        el.addEventListener('mousemove', (dets) => {
            el.querySelector('.picture').style.opacity = 1;
            el.querySelector('.picture').style.scale = 1.3;
            gsap.to(el.querySelector(".picture"), {
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                duration: 0.3,
            })
        })
        el.addEventListener('mouseout', () => {
            el.querySelector('.picture').style.opacity = 0;
            el.querySelector('.picture').style.scale = 0.7;
        })
    })


}
function honourPageAnimation() {
    let clutter4 = '';
    let contentP = document.querySelector('.pinky').textContent.trim().split('')
    Array.from(contentP).forEach(e => {
        clutter4 += `<span>${e}</span>`;
    })
    document.querySelector(".pinky").innerHTML = clutter4;
    gsap.from('.pinky span', {
        opacity: 0.3,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.honours',
            start: 'top 80%',
            end: '90% 80%',
            scrub: true,
        }
    })
    let clutter5 = '';
    let contentPurpy = document.querySelector('.purpy').textContent.trim().split('')
    Array.from(contentPurpy).forEach(e => {
        clutter5 += `<span>${e}</span>`;
    })
    document.querySelector(".purpy").innerHTML = clutter5;
    gsap.from('.purpy span', {
        opacity: 0.3,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.honours',
            start: '90% 80%',
            end: '170% 80%',
            scrub: true,
        }
    })


}
function backgroundColorAnimation() {
    let color = getComputedStyle(document.documentElement).getPropertyValue('--text');

    document.querySelectorAll('.section')
        .forEach((e) => {
            gsap.to(e, {
                scrollTrigger: {
                    trigger: e,
                    start: 'top -50%',
                    end: 'bottom -50%',
                    onEnter: function () {
                        document.body.setAttribute("theme", e.dataset.color)
                        document.querySelectorAll('.logo-svg path').forEach(elem => {
                            elem.setAttribute('fill', color);
                        })
                    },
                    onEnterBack: function () {
                        document.body.setAttribute("theme", e.dataset.color)
                        document.querySelectorAll('.logo-svg path').forEach(el => {
                            el.setAttribute('fill', color);
                        })
                    }
                }
            })
        })

}
function navbarAnimation() {
    let initialPosition = 0;
    window.addEventListener('scroll', function (dets) {
        if (window.scrollY > initialPosition) {
            document.querySelector('.desktop_nav').style.opacity = 0;
            initialPosition = window.scrollY;
        }
        else {
            document.querySelector('.desktop_nav').style.opacity = 1;
            initialPosition = window.scrollY;
        }
    })


}
// window.addEventListener('load', () => {
//     document.querySelector('.main').style.display = 'block';
// })








navbarAnimation()
backgroundColorAnimation()
teamPageAnimation()
sliderAnimation()
cardPageAnimation()
homePageAnimation()
honourPageAnimation()
loco()