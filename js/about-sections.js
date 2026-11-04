const aboutNav = document.querySelector(".about-sidebar nav");
const aboutContent = document.querySelector(".about-content");

if (!(aboutNav instanceof HTMLElement) || !(aboutContent instanceof HTMLElement)) {
  throw new Error("About page is missing its section navigation or content.");
}

const sectionLinks = [...aboutNav.querySelectorAll("a[aria-controls]")];
const aboutSections = [...aboutContent.querySelectorAll(".about-card")];

if (sectionLinks.length === 0 || aboutSections.length === 0) {
  throw new Error("About page is missing section links or content.");
}

function showAboutSection(sectionId) {
  const selectedSection = aboutSections.find((section) => section.id === sectionId)
    ?? aboutSections[0];

  for (const section of aboutSections) {
    section.hidden = section !== selectedSection;
  }

  for (const link of sectionLinks) {
    const isActive = link.getAttribute("aria-controls") === selectedSection.id;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

for (const link of sectionLinks) {
  link.addEventListener("click", (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) {
      return;
    }

    event.preventDefault();
    const sectionId = link.getAttribute("aria-controls");
    const section = aboutSections.find((item) => item.id === sectionId);
    if (!section) return;

    history.pushState(null, "", link.hash);
    showAboutSection(section.id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function syncAboutSection() {
  showAboutSection(window.location.hash.slice(1));
}

window.addEventListener("popstate", syncAboutSection);
window.addEventListener("hashchange", syncAboutSection);
syncAboutSection();
