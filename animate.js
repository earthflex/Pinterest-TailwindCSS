gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll('.mask');

masks.forEach(mask => {
    let image = mask.querySelector('img');
    console.log(image.count)
    let tl = gsap.timeline({
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
            ease: "power2.inOut",
        },
    });
    tl.from(image, {
        scale: 1.2,
        delay: -.8,
        stagger: {
            each: .8,
            ease: "power2.inOut",
        },
        ease: Power2.out
    });
})
