var crsr = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blurr.style.left = dets.x - 200 + "px"
    blurr.style.top = dets.y - 200 + "px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "150px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers:true,
        start: "top -10%",
        end: "top -10%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "150px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers:true,
        start: "top -25%",
        end: "top -75%",
        scrub:2
    }

})