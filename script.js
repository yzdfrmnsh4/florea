document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const testimonialCards = document.querySelectorAll(".testi-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selected = btn.getAttribute("data-filter");
      testimonialCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (selected === "all" || category === selected) {
          card.classList.remove("hidden-testi");
        } else {
          card.classList.add("hidden-testi");
        }
      });
    });
  });
});
