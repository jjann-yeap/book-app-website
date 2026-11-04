const filterForm = document.querySelector(".filter-form");
const catalogGrid = document.querySelector(".catalog-grid");
const resultCount = document.querySelector(".filter-result-count");
const paginationSummary = document.querySelector(".pagination > span");

if (!(filterForm instanceof HTMLFormElement)
  || !(catalogGrid instanceof HTMLElement)
  || !(resultCount instanceof HTMLElement)
  || !(paginationSummary instanceof HTMLElement)) {
  throw new Error("Browse by subject page is missing required filter elements.");
}

const bookCards = [...catalogGrid.querySelectorAll(".catalog-card")];
const titleInput = filterForm.elements.namedItem("query");
const authorInput = filterForm.elements.namedItem("author");
const languageSelect = filterForm.elements.namedItem("language");

if (!(titleInput instanceof HTMLInputElement)
  || !(authorInput instanceof HTMLInputElement)
  || !(languageSelect instanceof HTMLSelectElement)) {
  throw new Error("Browse by subject filter controls are missing.");
}

function updateBookFilters() {
  const titleQuery = titleInput.value.trim().toLocaleLowerCase();
  const authorQuery = authorInput.value.trim().toLocaleLowerCase();
  const selectedLanguage = languageSelect.value.toLocaleLowerCase();
  let visibleCount = 0;

  for (const card of bookCards) {
    const title = card.querySelector("h3")?.textContent?.trim().toLocaleLowerCase() ?? "";
    const author = card.querySelector("p")?.textContent?.trim().toLocaleLowerCase() ?? "";
    const language = (card.dataset.language ?? catalogGrid.dataset.language ?? "")
      .toLocaleLowerCase();
    const matches = title.includes(titleQuery)
      && author.includes(authorQuery)
      && language === selectedLanguage;

    card.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  resultCount.textContent = visibleCount === 0
    ? "No books match your filters."
    : `Showing ${visibleCount} of ${bookCards.length} books.`;
  paginationSummary.textContent = visibleCount === 0
    ? "Showing 0 results"
    : `Showing 1–${visibleCount} of ${visibleCount} results`;
}

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateBookFilters();
});

filterForm.addEventListener("reset", () => {
  window.setTimeout(updateBookFilters, 0);
});

titleInput.addEventListener("input", updateBookFilters);
authorInput.addEventListener("input", updateBookFilters);
languageSelect.addEventListener("change", updateBookFilters);

updateBookFilters();
