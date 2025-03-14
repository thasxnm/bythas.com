const menuContainer = document.querySelector('.menu-container');
const nav = document.querySelector('.nav');

function toggleMenu(element) {
    element.classList.toggle('active'); 
    nav.classList.toggle('active'); 
}
// Sample Heatmap Data
const data = [
    [1, 4, 3, 4, 5, 6, 7, 8, 9, 10, 4, 6, 8, 3, 2, 7, 5, 8, 6, 3],
    [4, 10, 7, 8, 9, 4, 3, 6, 7, 5, 2, 4, 6, 7, 9, 8, 6, 4, 5, 3]
];

// Generate Heatmap
const heatmap = document.getElementById("heatmap");

data.forEach(row => {
    row.forEach(value => {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Assign colors based on value
        if (value <= 3) cell.classList.add("low");
        else if (value <= 6) cell.classList.add("medium");
        else if (value <= 8) cell.classList.add("high");
        else if (value <= 9) cell.classList.add("very-high");
        else cell.classList.add("critical");

        heatmap.appendChild(cell);
    });
});

var i = 0;
var txt = 'Welcome to my site!';
var speed = 100;
var outputElem = document.getElementById("Typewriter")

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Open Modal
  document.querySelectorAll(".open-modal").forEach(button => {
      button.addEventListener("click", function () {
          let modalId = this.getAttribute("data-modal");
          document.getElementById(modalId).style.display = "block";
      });
  });

  // Close Modal
  document.querySelectorAll(".close").forEach(closeBtn => {
      closeBtn.addEventListener("click", function () {
          let modalId = this.getAttribute("data-modal");
          document.getElementById(modalId).style.display = "none";
      });
  });

  // Close Modal When Clicking Outside
  window.addEventListener("click", function (event) {
      document.querySelectorAll(".modal").forEach(modal => {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      });
  });
});

