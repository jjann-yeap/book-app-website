const menuButton = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuButton instanceof HTMLButtonElement && primaryNavigation instanceof HTMLElement) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    primaryNavigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia("(min-width: 821px)").addEventListener("change", closeMenu);
}
