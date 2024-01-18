gsap.registerPlugin(ScrollTrigger);
function smoothScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();

function cursorEffect() {
  var page1Content = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x - 600,
      y: dets.y - 50,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from(".para , .para , .para , .para , .para ", {
    y: 120,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#pagetwo",
      start: "30% 60%",
      end: "30% 57%",
      scrub: 3,
    },
  });
}
page2Animation();

function page3Animation() {
  gsap.from("#page3 h4 , #page3 h2 , #page3 h2", {
    y: 120,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".top",
      start: "30% 60%",
      end: "30% 57%",
      scrub: 3,
    },
  });
}
page3Animation();

function page4Animation() {
  gsap.from(".para4 , .para4 , .para4 , .para4 ", {
    y: 120,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page4",
      start: "30% 60%",
      end: "30% 57%",
      scrub: 3,
    },
  });
}
page4Animation();

function page5Animation() {
  gsap.from(".para5 , .para5 , .para5  ", {
    y: 120,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page5",
      start: "30% 60%",
      end: "30% 57%",
      scrub: 3,
    },
  });
}
page5Animation();

function page4BallAnimation() {
  var video4 = document.querySelector("#page4");
  var cursor4 = document.querySelector(".cursor4");

  video4.addEventListener("mousemove", function (det) {
    gsap.to(cursor4, {
      x: det.x - 550,
      y: det.y - 250,
    });
    video4.addEventListener("mouseenter", function () {
      gsap.to(cursor4, {
        scale: 1,
        opacity: 1,
      });
    });
    video4.addEventListener("mouseleave", function () {
      gsap.to(cursor4, {
        scale: 0,
        opacity: 0,
      });
    });
  });
}

page4BallAnimation();

function corousel() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });
}
corousel();

var tl = gsap.timeline();
tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader h3", {
  opacity: 0,
  x: -40,

  duration: 1,
  stagger: 0.1,
});
tl.to("#loader", {
  opacity: 0,
});
tl.to("#loader", {
  display: "none",
});
tl.from(".page1-content h1 span", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});

function page7Animation() {
  gsap.from("#page7 p , #page7 h3 ", {
    y: 120,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page7",
      start: "30% 60%",
      end: "30% 57%",
      scrub: 3,
    },
  });
}
page7Animation();

gsap.from(".left , .right", {
  y: -100,
  opacity: 0,
  duration: 0.3,


  scrollTrigger: {
    trigger: "#page8",
    start: "30% 60%",
    end: "30% 57%",
    scrub: 3,
  },
});
gsap.from("#page8 .fbottom h1 span", {
  y: -10,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,

  scrollTrigger: {
    trigger: "#page8",
    start: "30% 60%",
    end: "30% 57%",
    scrub: 3,
  },
});
