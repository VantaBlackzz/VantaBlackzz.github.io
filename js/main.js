gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.gsap-container',
    content: '.gsap-content',
    smooth: .5,
    effects: true,
})
