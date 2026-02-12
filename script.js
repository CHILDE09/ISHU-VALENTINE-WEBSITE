function slideTo(page, direction = "left") {
  const container = document.querySelector(".container");
  const distance = direction === "left" ? -400 : 400;

  gsap.to(container, {
    x: distance,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      window.location.href = page;
    }
  });
}

function slideTo(page, direction = "left") {
  const container = document.querySelector(".container");
  const distance = direction === "left" ? -400 : 400;

  gsap.to(container, {
    x: distance,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      window.location.href = page;
    }
  });
}

// page entry animation (SAFE)
window.addEventListener("load", () => {
  gsap.fromTo(
    ".container",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  );
});
function showQR() {
  document.getElementById("qrSection").style.display = "block";
}
function showQR() {
  document.getElementById("qrSection").style.display = "block";
}
