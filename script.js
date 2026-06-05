document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;

  // Remove
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Find
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    if (currentPage === linkPath) {
      link.classList.add('active');

      // Activate dropdown
      const dropdownWrap = link.closest('.nav-dropdown-wrap');

      if (dropdownWrap) {
        const dropdownTrigger = dropdownWrap.querySelector(
          '.nav-dropdown-toggle, .nav-link'
        );

        if (dropdownTrigger && dropdownTrigger !== link) {
          dropdownTrigger.classList.add('active');
        }
      }
    }
  });
});

// activelink
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get current file name only (MOST RELIABLE)
  let currentPage = window.location.pathname.split("/").pop();

  // Fix empty path (home)
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (!linkHref) return;

    // Extract only file name from href
    const linkPage = linkHref.split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});