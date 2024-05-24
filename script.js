var tl = gsap.timeline();

function Animation() {
  tl.to("#nav", {
    backgroundColor: "black",
    height: "10vw",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      start: "top top",
      end: "bottom top",
      markers: false,
      scrub: 2,
    },
  });

  tl.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "1% -15%",
      end: "10% -15%",
      markers: false,
      scrub: 4,
    },
  });

  tl.from("#about-us img ,#about-us-in",{
    y:100,
    opacity:0,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "Top 40%",
      end: "top 30%",
      markers: false,
      scrub: 2,
    },
  });
  
  tl.from(".card0",{
    scale:0.8,
    opacity:0,
    scrollTrigger: {
      trigger: ".card0",
      scroller: "body",
      start: "top 90%",
      end: "top 70%",
      markers:false,
      scrub: 2,
    },
  });
  tl.from("#colon1",{
    y:-70,
    x:-70,
    duration: 1,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "Top 37%",
      end: "top 37%",
      markers:false,
      scrub: 4,   }
  });

  tl.from("#colon2",{
    y:70,
    x:70,
    duration: 1,
    scrollTrigger: {
      trigger: "#colon2",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      markers:false,
      scrub: 4,   }
  });
}

Animation();

function cursorFollower() {
  var crsr = document.getElementById("cursor");
  var crsr_blur = document.getElementById("cursor-blur");
  var h5all = document.querySelectorAll("#nav h5");
  var ispan = document.querySelectorAll("span");

  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.pageX + 30 + "px";
    crsr.style.top = dets.pageY + 30 + "px";
    crsr_blur.style.left = dets.pageX + "px";
    crsr_blur.style.top = dets.pageY + "px";
  });

  h5all.forEach(function (elem) {
    elem.addEventListener("mouseenter", () => {
      crsr.style.transform = "scale(3)";
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", () => {
      crsr.style.transform = "scale(1)";
      crsr.style.border = "1px solid #95c11e";
      crsr.style.backgroundColor = "#95c11e";
    });
  });

  ispan.forEach(function (val) {
    console.log(val);
    val.addEventListener("mouseenter", () => {
      crsr.style.display = "none";
    });
  });
  ispan.forEach(function (val) {
    console.log(val);
    val.addEventListener("mouseleave", () => {
      crsr.style.display = "block";
      crsr.style.transform = "scale(1)";
      crsr.style.border = "1px solid #95c11e";
      crsr.style.backgroundColor = "#95c11e";
    });
  });
}

cursorFollower();


