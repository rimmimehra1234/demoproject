const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




//   gsap.to(".page1 .part1 p",{
//     x:-100,
//     duration:2,
//     delay:1,
//   })
var tl1= gsap.timeline();


 
    

tl1.from("nav",{
   y:-100,
   opacity : 0,
   duration : 1,
   
})
gsap.from(".page1 .center .left h1",{
     y:300,
    opacity:0,
    duration: 1,
    delay:1

})
gsap.from(".page1 .center .left p",{
    y:300,
    opacity:0,
    duration: 1,
    delay:1
    
})

function page2animation(){
    gsap.from(".leftpage2" , {
        y : 50,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".leftpage2",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page2animation()


function page2addanimation(){
    gsap.from(".rightpage2 .box" , {
        y : 50,
        duration: 1,
        opacity: 0,
        scale: 1,
        scrollTrigger: {
            trigger: ".leftpage2",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page2addanimation()


function page3animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3 ",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })
    
    tl3.from(".page3 h2" , {
        y : 50,
        duration: 1,
        opacity: 0,
        
    })
    tl3.from(".page3 h1" , {
   
        y : 50,
        duration: 1,
        opacity: 0,
        
    }) 
   
}

page3animation()

function page4animation(){
    gsap.from(".page3part1" , {
   
        y : 50,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page3part1",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page4animation()


function page5animation(){
    gsap.from(".page4part1" , {
           
        y : 50,
        duration: 1,
        opacity: 0,
        scale:1,
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page5animation()


function page5rightanimation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4 ",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })
    
    tl3.from(".page4 .page4part2 h1" , {
        y : 50,
        duration: 1,
        opacity: 0,
        
    })
    tl3.from(".page4 .page4part2 ul" , {
   
        y : 50,
        duration: 1,
        opacity: 0,
        
    }) 
   


tl3.from(".page4 .page4part2 button" , {
   
    y : 50,
    duration: 1,
    opacity: 0,
    
}) 

}

page5rightanimation()

function page6upperanimation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5 ",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })
    
    tl3.from(".page5 h1" , {
        y : 50,
        duration: 1,
        opacity: 0,
        
    })
    tl3.from(".page5 h3" , {
   
        y : 50,
        duration: 1,
        opacity: 0,
        
    }) 
}

page6upperanimation()















function page6imganimation(){
    gsap.from(".page5box" , {
           
        y : 50,
        duration: 1,
        opacity: 0,
        scale:1,
        scrollTrigger: {
            trigger: ".page5box",
            scroller: ".main",
            // markers: true,
            start: "top 40%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page6imganimation()


function page6img2animation(){
    gsap.from(".page5box2" , {
           
        y : 50,
        duration: 1,
        opacity: 0,
        scale:1,
        scrollTrigger: {
            trigger: ".page5box2",
            scroller: ".main",
            // markers: true,
            start: "top 40%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page6img2animation()