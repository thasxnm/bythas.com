document.addEventListener("DOMContentLoaded", function () {

  // ========== HEATMAP GENERATION ==========
  const heatmap = document.getElementById("heatmap");

  if (heatmap) {
      const data = [
          [1, 4, 3, 4, 5, 6, 7, 8, 9, 10, 4, 6, 8, 3, 2, 7, 5, 8, 6, 3],
          [4, 10, 7, 8, 9, 4, 3, 6, 7, 5, 2, 4, 6, 7, 9, 8, 6, 4, 5, 3]
      ];

      data.forEach(row => {
          row.forEach(value => {
              const cell = document.createElement("div");
              cell.classList.add("cell");

              if (value <= 3) cell.classList.add("low");
              else if (value <= 6) cell.classList.add("medium");
              else if (value <= 8) cell.classList.add("high");
              else if (value <= 9) cell.classList.add("very-high");
              else cell.classList.add("critical");

              heatmap.appendChild(cell);
          });
      });
  }

  // ========== TYPEWRITER EFFECT ==========
  const outputElem = document.getElementById("Typewriter");
  if (outputElem) {
      let i = 0;
      const txt = 'Welcome to my site!';
      const speed = 100;

      function typeWriter() {
          if (i < txt.length) {
              outputElem.innerHTML += txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
          }
      }
      typeWriter();
  }

  // ========== MODAL HANDLING ==========
  document.querySelectorAll(".open-modal").forEach(button => {
      button.addEventListener("click", function (event) {
          event.preventDefault(); 
          let modalId = this.getAttribute("data-modal");
          let modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = "flex";
          } else {
              console.error(`Modal with ID '${modalId}' not found.`);
          }
      });
  });

  document.querySelectorAll(".close").forEach(closeBtn => {
      closeBtn.addEventListener("click", function () {
          let modal = this.closest(".modal");
          if (modal) {
              modal.style.display = "none";
          }
      });
  });

  // ========== MENU TOGGLE ==========
  const menuContainer = document.querySelector('.menu-container');
  const nav = document.querySelector('.nav');

  menuContainer.addEventListener("click", function () {
      this.classList.toggle('active');
      nav.classList.toggle('active');
  });

  // ========== IMAGE FILTER FUNCTION ==========
  function filterSelection(category) {
      const columns = document.querySelectorAll(".column");
      columns.forEach(column => {
          column.classList.remove("show");
          if (category === "all" || column.classList.contains(category)) {
              column.classList.add("show");
          }
      });
  }

  filterSelection("all");

  const btnContainer = document.getElementById("myBtnContainer");
  if (btnContainer) {
      const btns = btnContainer.getElementsByClassName("filter-btn");
      for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function () {
              const current = document.querySelector(".filter-btn.active");
              if (current) {
                  current.classList.remove("active");
              }
              this.classList.add("active");
              filterSelection(this.getAttribute("data-filter"));
          });
      }
  }

});
