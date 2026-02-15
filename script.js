(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Copy email
  const copyBtn = document.getElementById("copyBtn");
  const email = "info@edgardbayona.com";
  if (copyBtn) {
    copyBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
      } catch {
        window.location.href = "mailto:" + email;
      }
    });
  }

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.style.display = "flex";
    mobileMenu.setAttribute("aria-hidden", "false");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.style.display = "none";
    mobileMenu.setAttribute("aria-hidden", "true");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);

  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) closeMenu();
    });
  }

  document.querySelectorAll(".mLink").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
})();
