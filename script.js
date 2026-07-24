const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const progress = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function closeMenu() {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

let frame = 0;
function updateScroll() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = pageHeight > 0 ? Math.min((window.scrollY / pageHeight) * 100, 100) : 0;
  progress.style.setProperty("--progress", `${percent}%`);
  header.classList.toggle("scrolled", window.scrollY > 28);

  if (!reduceMotion) {
    document.querySelectorAll("[data-parallax]").forEach((element) => {
      const rect = element.parentElement.getBoundingClientRect();
      const speed = Number(element.dataset.speed || 0.08);
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      element.style.setProperty("--offset", `${offset}px`);
    });
  }
  frame = 0;
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(updateScroll);
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
updateScroll();

if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}
