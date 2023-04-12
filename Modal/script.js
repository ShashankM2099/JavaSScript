"use strict";
// Modal JS
//Manipulating classes with JavaScript
//getting the modal button classes for the pop-up window
//Using classList to add/remove CSS styles
const modal = document.querySelector(".modal");

//for the overlay class
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");

// to select multiple classes with the same name: use querySelectorAll()
const buttonOpenModal = document.querySelectorAll(".show-modal");

//log each buttons text content to the console
for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener("click", function () {
    console.log();
    modal.classList.remove("hidden"); // to remove classes: to remove more: add commas
    overlay.classList.remove("hidden");
  });
}
//implementing the hidden to a function
const closeModal = function () {
  modal.classList.add("hidden"); // to add classes: to add more: add commas
  overlay.classList.add("hidden");
};
//adding an event listener to the closeBtn, and adding the implemented function
buttonCloseModal.addEventListener("click", closeModal);

//adding an eventListener to overlay so when clicked on the overlay should close
overlay.addEventListener("click", function () {
  modal.classList.add("hidden"); // to add classes: to add more: add commas
  overlay.classList.add("hidden");
});

//document addinglistener to close by esc key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("remove")) {
      closeModal();
    }
  }
});
