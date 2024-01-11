import gsap from "gsap";

// label selection

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les éléments avec la classe "label"
  var labels = document.querySelectorAll(".label");

  // Parcourez chaque label et ajoutez un gestionnaire d'événements de clic
  labels.forEach(function (label) {
    label.addEventListener("click", function () {
      // Basculez l'état du label lors du clic
      label.classList.toggle("label-selected");
    });
  });
});

// nav animation
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".link a");
  const activeLinkBars = document.querySelectorAll(".active-link-bar");

  links.forEach((link, index) => {
    const section = document.querySelector(link.getAttribute("href"));
    const trigger = section.id === "spotlight" ? "top" : "center";

    gsap.to(activeLinkBars[index], {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true, // Remove this line if you don't want markers for debugging
      },
      width: () => link.offsetWidth,
      left: () => link.offsetLeft,
      ease: "power1.inOut",
    });
  });

  // Set initial position of the bar under "à la une"
  gsap.set(activeLinkBars[0], {
    width: links[0].offsetWidth,
    left: links[0].offsetLeft,
  });
});
