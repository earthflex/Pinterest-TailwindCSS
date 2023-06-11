const logoBtn = document.getElementById('logo-brand');
const originalScale = 1;
const whileTapScale = 0.8;

logoBtn.addEventListener('mousedown', function () {
    gsap.to(this, {
        scale: whileTapScale,
        duration: 0.2,
        ease: "power4.out"
    });
});

logoBtn.addEventListener('mouseup', function () {
    gsap.to(this, {
        scale: originalScale,
        duration: 0.2,
        ease: "power4.out"
    });
});

logoBtn.addEventListener('mouseout', function () {
    gsap.to(this, {
        scale: originalScale,
        duration: 0.2,
        ease: "power4.out"
    });
});

const loadingAnimation = () => {
    const tl = gsap.timeline({
        onComplete: () => {
            maskAnimation();
        }
    });
    tl
        .from(
            "#loading-page svg",
            {
                scale: 0,
                duration: 1,
                ease: "elastic.out(1, 0.75)"
            },
            0
        )
        .to("#loading-page", {
            yPercent: -100,
            duration: 1,
            delay: .4,
            ease: "power2.inOut"
        })
};

gsap.registerPlugin(ScrollTrigger);

const maskAnimation = () => {
    const masks = document.querySelectorAll('.mask');

    masks.forEach(mask => {
        const image = mask.querySelector('img');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mask,
                toggleActions: "restart none none reset"
            }
        });

        tl.set(mask, { autoAlpha: 1 });
        tl.from(mask, {
            y: 80,
            stagger: {
                each: 1,
                ease: "power2.inOut"
            }
        });
        tl.from(image, {
            scale: 1.1,
            transformOrigin: 'top',
            stagger: {
                each: 0.3,
                ease: "power2.out"
            },
        }, '<0.2');
    });
};

loadingAnimation();
