// =========================
// Typing Animation
// =========================

const texts = [
  "Python Developer",
  "Data Analyst",
  "Power BI Learner",
  "MCA Student",
  "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {

    count++;

    index = 0;

    setTimeout(type, 1500);

  } else {

    setTimeout(type, 100);

  }

})();



// =========================
// Certificate Popup
// =========================

function openCertificate(image) {

  document.getElementById("certificatePopup").style.display = "flex";

  document.getElementById("popupImage").src = image;

}


function closeCertificate() {

  document.getElementById("certificatePopup").style.display = "none";

}



// Close popup when clicking outside image

window.onclick = function(event) {

  const popup = document.getElementById("certificatePopup");

  if (event.target === popup) {

    popup.style.display = "none";

  }

};




// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(

      this.getAttribute("href")

    ).scrollIntoView({

      behavior: "smooth"

    });

  });

});




// =========================
// Active Navbar
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 150) {

      current = section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});




// =========================
// Scroll Reveal Animation
// =========================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0)";

    }

  });

}, {

  threshold: 0.2

});


document.querySelectorAll(

".card,.skill,.project"

).forEach((el) => {

  el.style.opacity = "0";

  el.style.transform = "translateY(40px)";

  el.style.transition = "all .8s ease";

  observer.observe(el);

});




// =========================
// Logo Hover Effect
// =========================

const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {

  logo.style.transform = "scale(1.1)";

  logo.style.transition = ".3s";

});


logo.addEventListener("mouseout", () => {

  logo.style.transform = "scale(1)";

});
