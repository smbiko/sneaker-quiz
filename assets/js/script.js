// MODAL
// Modal created using tutorial - https://www.youtube.com/watch?v=XH5OW46yO8I

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open Modal
openModal.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

// Close Modal
closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});





// array of questions, where correctAnswer has value of the index of the correct answer in the array of options.

let quizData = [
  {
    question: " What is the name of the sneaker presented on the picture?",
    image: "../images/airjordan4-frontleft.png",
    correctAnswerPosition: 0,
    options: ["Jordans 14", "Jordans 11", "Jordans 1"]
  },
]

// Select elements from the DOM

const section = document.querySelector(".sneaker-showcase")
const sneaker= document.querySelector(".sneaker");
const body = document.querySelector("body");

//Previous rotation value
let prev = 0;
//Calculation
let calc = 0;
//Drag sensitivity 
const sensitivity =2;

//Get the X Postion when the mouse is clicked down
section.addEventListener("mousedown", function (e) {
  //get mouse X position
  const x = e.clientX;

  /* Rotate the book on mousemove */
  section.addEventListener("mousemove", rotate);
  function rotate(e) {
    calc = (e.clientX - x)/ sensitivity;

    sneaker.style.transform = `
    rotateY(${calc + prev}deg)`;
    
    /* Change Cursor To Grabbing Icon */
    body.style.cursor = "grabbing";
  }

  // Save rotation value for next click event 
  prev += calc;

  //Remove the Event And Cursor Icon on Mouse Release
  window.addEventListener("mouseup", function () {
    //remove event listener
    section.removeEventListener("mousemove", rotate);
    //Reset cursor icon
    body.style.cursor = "default";
  });

});

// DOM Elements
