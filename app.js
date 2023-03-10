const background = document.querySelector('.background');
window.addEventListener('load',()=> {
    document.body.setAttribute('data-attribute', 'launched');
    document.body.addEventListener('animationend', ()=>{
        document.body.setAttribute('data-attribute', 'none')
    }, {once: true})
    document.body.style.setProperty('height', window.innerHeight + 'px');
    document.body.style.setProperty('width', window.innerWidth + 'px');
    background.style.setProperty('width', window.innerWidth + 'px');
    background.style.setProperty('height', window.innerHeight + 'px');
})
window.addEventListener('resize',()=> {
    document.body.style.setProperty('height', window.innerHeight + 'px');
    document.body.style.setProperty('width', window.innerWidth + 'px');
    background.style.setProperty('width', window.innerWidth + 'px');
    background.style.setProperty('height', window.innerHeight + 'px');
})

let TL = gsap.timeline({repeat:-1});
    TL.to("#coffee-cup-right, #coffee-cup-left", 0, {x: origin,y:origin, rotate: origin, transformBox: 'view-box', transformOrigin: 'center'})
    .to('#head, #monocle', {delay:.6,y: -28, duration: .4, ease: "back.in(1.7)", yoyoEase: true})
    .to("#tube", {rotate: 12,duration: .35 ,transformBox: "view-box",ease: "back.out(4)", transformOrigin: "bottom"})
    .to("#mustache", {y: -28, duration: .3,delay: -.4, ease: "back.out(1.7)", yoyoEase: true})
    .to("#bow-tie", {y: -28, duration: .3,delay: -.2, ease: "back.out(1.7)", yoyoEase: true})
    .to("#body, #left-arm, #coffee-cup-right, #coffee-cup-left, #right-hand", {y: -28, duration: .3, stagger: 0.1,ease: "back.out(4)"}, "-=0.2")
    .to("#plate", {y: -28, duration: .3,ease: "back.out(4)"}, "-=0.49")
    .to("#coffee-cup-right, #coffee-cup-left", {y: -45, duration: 0.3 , stagger: 0.03, ease:"back.out(4)"},"-=.49")
    .to("#coffee-cup-right, #coffee-cup-left", {y: -28, duration: 0.3 , stagger: 0.05, ease:"back.out(1.4)"}, "-=.3")
    .to("#coffee-cup-inside", 0.25, {y:10, repeat: 1, yoyo: true}, "-=0.65")
    .to("#right-arm, #left-hand", {y: -28, duration: .2,delay: -.16, ease: "power3.in", yoyoEase: true, stagger: 0.1}, "-=0.45")
    .to("#eye", .1, {scaleY: 0.7, transformOrigin: "center", stagger:-.2})
    .to("#eye", .1, {scaleY: 1, transformOrigin: "center", stagger:-.2})
    .to("#mustache", .1, {delay:.7, rotate:-10,repeat: 1,yoyo: true, transformOrigin: "center"})
    .to("#mustache", .1, { rotate:10,repeat: 1,yoyo: true, transformOrigin: "center"})
    .to("#mustache", .8, {y: 630, ease: "bounce.out",delay: .2, transformBox: "fill-box"})
    .to("#mustache", .4, {x:'random(360,-360)'}, '-=.6')
    .to("#eye", .2, {scale: 1.1})
    .to("#eye", .1, {scaleY: 0,delay: .3, yoyo: true, repeat: 3})
    .to("#head", .8, {y: 600,delay: .3, ease: "bounce.out"})
    .to("#head", .4, {x:'random(360,-360, 60)'}, '-=.5')
    .to("#tube", .2, {rotate:-40, y:-10}, '-=.8')
    .to("#body", .8, {y: 160, ease: "bounce.out", rotate: 'random([-70, 70])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#body", .4, {x:'random(360,-360, 60)'}, '-=.5')
    .to("#left-arm", .8, {y: 320, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#left-arm", .4, {x:'random(360,-360, 60)'}, '-=.5')
    .to("#right-arm", .8, {y: 355, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#right-arm", .4, {x:'random(360,-360, 60)'}, '-=.5')
    .to("#left-hand", .8, {y: 185, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#left-hand", .4, {x:'random(360,-360, 60)'}, '-=.5')
    .to("#right-hand", .8, {y: 550, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#right-hand", .4, {x:'random(360,-360, 60)'}, '-=.5')
    .to("#plate", .8, {y: 640, ease: "bounce.out",transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#plate", .4, {rotate:'random([360,0,-360])',x:'random(-30,30,1)'}, '-=.5')
    .to("#coffee-cup-right", .8, {y: 670, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#coffee-cup-right", .4, {x:'random(360,-360, 20)'}, '-=.5')
    .to("#coffee-cup-left", .8, {y: 669, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#coffee-cup-left", .4, {x:'random(360,-360, 20)'}, '-=.5')
    .to("#bow-tie", .8, {y: 555, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#bow-tie", .4, {x:'random(360,-360, 20)', rotate: 'random(360,-360,1)'}, '-=.5')
    .to("#monocle", .8, {y:645, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
    .to("#monocle", .4, { rotate: 'random(360,-360,60)'}, '-=.5')
    .to("#weely>*", .8, {delay: 1.5, ease: 'back.out(2)',x: origin,y:origin, rotate: origin, transformBox: 'view-box', transformOrigin: 'center'})
    .to("#coffee-cup-right, #coffee-cup-left", .5, {delay: -.8,x: origin,y:origin, rotate: origin, transformBox: 'view-box', transformOrigin: 'center'})
    .to("#eye", .5, {scale:1});
