document.addEventListener("DOMContentLoaded", function () {
  var contactButton = document.getElementById("contactbtn");
  var popupForm = document.getElementById("popupForm");
  var closePopupButton = document.getElementById("closePopup");

  popupForm.style.display = "none";

  contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    popupForm.style.display = "flex";
  });

  closePopupButton.addEventListener("click", function () {
    popupForm.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popupForm) {
      popupForm.style.display = "none";
    }
  });

  // Slider
  var slides = document.querySelectorAll(".slide img");
  var dots = document.querySelectorAll(".dot");
  var currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.parentElement.classList.remove("active");
      dots[i].classList.remove("active");
    });
    slides[index].parentElement.classList.add("active");
    dots[index].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projectBoxes = document.querySelectorAll(".project-box");
  const mainImage = document.getElementById("main-project-image");

  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      projectBoxes.forEach((box) => box.classList.remove("active"));

      box.classList.add("active");

      const newImage = box.getAttribute("data-image");
      mainImage.setAttribute("src", newImage);
    });
  });
});
