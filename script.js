let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav div ul li a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      let activeLink = document.querySelector(`nav div ul li a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

const texts = ["Welcome!", "Hello!", "Enjoy Your Stay!", "To HealthLife"];
let index = 0;
let charIndex = 0;
const speed = 100;
const delay = 1000;
const textElement = document.getElementById("typingText");

function typeText() {
  if (charIndex < texts[index].length) {
    textElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(eraseText, delay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, speed / 2);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, speed);
  }
}

typeText();

document.querySelector(".btn-explore").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
