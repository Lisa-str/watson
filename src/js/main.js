import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

// article animation
var boxes = document.querySelectorAll(".article");

boxes.forEach((box) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      markers: true,
    },
    opacity: 0,
    y: 70,
    duration: 2,
  });
});
