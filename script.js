document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("base--concepts-image--container");
          entry.target.classList.add("stats--firsthalf")
          entry.target.classList.add("stats--secondhalf")
        }
      });
    });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
 
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".small--animation");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("small--feature--holder--animation")
        }
      });
    });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".battle--animation");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("battle--one--animation")
        }
      });
    });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  //battle arrow image changing
  const rightArrow = document.querySelector(".arrow-right-btn")
  const leftArrow = document.querySelector(".arrow-left--btn")

  const imageTwo = document.querySelector(".battle-car-two")
  const imageOne = document.querySelector(".battle-car-one")

  rightArrow.addEventListener("click",function(){
    imageOne.style.display = "none"
    imageTwo.style.display = "block"
  })

  leftArrow.addEventListener("click",function(){
    imageOne.style.display = "block"
    imageTwo.style.display = "none"
  })

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".card--animation-both");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-card")
        }
      });
    });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });