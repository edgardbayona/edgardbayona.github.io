(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

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

  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      alert("On mobile, use the browser scroll to navigate.\nIf you want a real slide-out menu, tell me and I’ll add it.");
    });
  }
})();
