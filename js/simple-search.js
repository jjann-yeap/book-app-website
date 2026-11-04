(() => {
const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    subject: "romance",
    description:
      "A spirited young woman and a proud gentleman discover how first impressions can obscure understanding, affection, and happiness.",
    image: "img/books/pride-prejudice.jpg",
    gutenbergId: 1342,
    year: 1813,
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    subject: "mystery",
    description:
      "Twelve celebrated cases featuring the brilliant detective Sherlock Holmes and his steadfast companion Dr. Watson.",
    image: "img/books/sherlock.jpg",
    gutenbergId: 1661,
    year: 1892,
  },
  {
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    subject: "adventure",
    description:
      "Jim Hawkins sets sail with a mysterious map, encountering mutiny, buried gold, and the unforgettable Long John Silver.",
    image: "img/books/treasure.jpg",
    gutenbergId: 120,
    year: 1883,
  },
  {
    title: "The Time Machine",
    author: "H. G. Wells",
    subject: "fiction",
    description:
      "A Victorian scientist travels into a distant future where humanity has evolved into two very different species.",
    image: "img/books/time.jpg",
    gutenbergId: 35,
    year: 1895,
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    subject: "fiction",
    description:
      "The four March sisters grow from childhood into adulthood, navigating ambition, hardship, love, and family.",
    image: "img/books/little-women.jpg",
    gutenbergId: 37106,
    year: 1868,
  },
  {
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    subject: "children",
    description:
      "Dorothy follows the yellow brick road with three unusual friends in search of courage, wisdom, heart, and home.",
    image: "img/books/oz.jpg",
    gutenbergId: 55,
    year: 1900,
  },
  {
    title: "A Room with a View",
    author: "E. M. Forster",
    subject: "romance",
    description:
      "A young Englishwoman questions the rules of Edwardian society during a life-changing trip to Italy.",
    image: "img/books/room.jpg",
    gutenbergId: 2641,
    year: 1908,
  },
  {
    title: "Twelve Years a Slave",
    author: "Solomon Northup",
    subject: "biography",
    description:
      "Solomon Northup recounts his kidnapping and enslavement, and his struggle to regain his freedom.",
    image: "img/books/12years-slave.jpg",
    gutenbergId: 202,
    year: 1853,
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    subject: "children",
    description:
      "A lonely girl discovers a hidden garden and helps bring new life to the people around her.",
    image: "img/books/secret-garden.jpg",
    gutenbergId: 113,
    year: 1911,
  },
  {
    title: "A Study in Scarlet",
    author: "Arthur Conan Doyle",
    subject: "mystery",
    description:
      "Sherlock Holmes and Dr. Watson begin their partnership while investigating a baffling murder.",
    image: "img/books/scarlet.jpg",
    gutenbergId: 244,
    year: 1887,
  },
  {
    title: "Middlemarch",
    author: "George Eliot",
    subject: "romance",
    description:
      "A portrait of life in a provincial English town, following Dorothea Brooke and the ambitions of its interconnected residents.",
    image: "img/books/middlemarch.jpg",
    gutenbergId: 145,
    year: 1871,
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    subject: "romance",
    description:
      "An independent young woman seeks love and belonging while protecting her convictions and sense of self.",
    image: "img/books/jane-eyre.jpg",
    gutenbergId: 23077,
    year: 1847,
  },
  {
    title: "The Blue Castle",
    author: "L. M. Montgomery",
    subject: "romance",
    description:
      "After a life-changing diagnosis, Valancy Stirling sets out to live freely and discover love on her own terms.",
    image: "img/books/blue-castle.jpg",
    gutenbergId: 67979,
    year: 1926,
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    subject: "romance",
    description:
      "The Dashwood sisters face financial uncertainty and the trials of love in very different ways.",
    image: "img/books/sense.jpg",
    gutenbergId: 161,
    year: 1811,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    subject: "romance",
    description:
      "A haunting tale of the intense bond between Catherine Earnshaw and Heathcliff on the Yorkshire moors.",
    image: "img/books/wuthering.jpg",
    gutenbergId: 768,
    year: 1847,
  },
  {
    title: "Emma",
    author: "Jane Austen",
    subject: "romance",
    description:
      "Confident Emma Woodhouse plays matchmaker for her neighbors while learning to understand her own heart.",
    image: "img/books/emma.jpg",
    gutenbergId: 158,
    year: 1815,
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    subject: "romance",
    description:
      "A sweeping Russian novel of love, family, and society, following Anna Karenina and Konstantin Levin.",
    image: "img/books/anna-karenina.jpg",
    gutenbergId: 1399,
    year: 1878,
  },
  {
    title: "Persuasion",
    author: "Jane Austen",
    subject: "romance",
    description:
      "Years after being persuaded to refuse him, Anne Elliot meets Captain Wentworth again and considers a second chance.",
    image: "img/books/persuasion.jpg",
    gutenbergId: 105,
    year: 1817,
  },
  {
    title: "Northanger Abbey",
    author: "Jane Austen",
    subject: "romance",
    description:
      "Catherine Morland's love of Gothic novels shapes her expectations as she encounters society and romance.",
    image: "img/books/northanger.jpg",
    gutenbergId: 121,
    year: 1817,
  },
  {
    title: "Mansfield Park",
    author: "Jane Austen",
    subject: "romance",
    description:
      "Fanny Price grows up among her wealthy relatives and must navigate questions of loyalty, love, and integrity.",
    image: "img/books/mansfield.jpg",
    gutenbergId: 141,
    year: 1814,
  },
  {
    title: "The Woman in White",
    author: "Wilkie Collins",
    subject: "mystery",
    description:
      "A mysterious encounter draws Walter Hartright into a suspenseful story of identity, secrets, and inheritance.",
    image: "img/books/woman-white.jpg",
    gutenbergId: 583,
    year: 1859,
  },
  {
    title: "The Age of Innocence",
    author: "Edith Wharton",
    subject: "romance",
    description:
      "Newland Archer is torn between the expectations of New York society and his feelings for the unconventional Countess Olenska.",
    image: "img/books/age-innocence.jpg",
    gutenbergId: 541,
    year: 1920,
  },
  {
    title: "The Return of the Native",
    author: "Thomas Hardy",
    subject: "fiction",
    description:
      "Lives and ambitions collide on Egdon Heath in Thomas Hardy's novel of love, fate, and rural England.",
    image: "img/books/return-native.jpg",
    gutenbergId: 26264,
    year: 1878,
  },
  {
    title: "Ivanhoe",
    author: "Walter Scott",
    subject: "adventure",
    description:
      "A knight returns to England during the reign of Richard the Lionheart, amid tournaments, rivalries, and rebellion.",
    image: "img/books/ivanhoe.jpg",
    gutenbergId: 82,
    year: 1819,
  },
  {
    title: "Henrietta Temple",
    author: "Benjamin Disraeli",
    subject: "romance",
    description:
      "A young officer's passion for Henrietta Temple is tested by ambition, family expectations, and financial trouble.",
    image: "img/books/henrietta.jpg",
    gutenbergId: 19771,
    year: 1837,
  },
  {
    title: "Our Mutual Friend",
    author: "Charles Dickens",
    subject: "fiction",
    description:
      "A fortune built on a river of refuse links a wide cast of Londoners in a story of money, class, and kindness.",
    image: "img/books/mutual-friend.jpg",
    gutenbergId: 883,
    year: 1865,
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    subject: "romance",
    description:
      "Two young lovers from feuding Verona families risk everything for a life together.",
    image: "img/books/romeo-juliet.jpg",
    gutenbergId: 1513,
    year: 1597,
  },
  {
    title: "The Sorrows of Young Werther",
    author: "Johann Wolfgang von Goethe",
    subject: "romance",
    description:
      "In a series of letters, Werther describes his intense feelings and unrequited love for Charlotte.",
    image: "img/books/young-werther.jpg",
    gutenbergId: 2527,
    year: 1774,
  },
  {
    title: "Moby Dick; or, The Whale",
    author: "Herman Melville",
    subject: "adventure",
    description:
      "Ishmael joins Captain Ahab's voyage aboard the Pequod, where the pursuit of a white whale consumes the crew.",
    image: "img/books/moby-dick.jpg",
    gutenbergId: 2701,
    year: 1851,
  },
  {
    title: "History of the Britons (Historia Brittonum)",
    author: "Nennius",
    subject: "history",
    description:
      "A medieval account of Britain traditionally attributed to Nennius, including early Welsh and British history.",
    image: "img/books/recovered-history-briton.jpg",
    gutenbergId: 1972,
    year: 829,
  },
];

const searchPage = document.querySelector("#search-result");
if (!(searchPage instanceof HTMLElement)) {
  return;
}

const input = document.querySelector("#search-input");
const title = searchPage.querySelector("#results-title");
const summary = searchPage.querySelector("#results-summary");
const list = searchPage.querySelector("#results-list");
const emptyState = searchPage.querySelector("#no-results");
const sort = searchPage.querySelector("#sort-results");
const filters = searchPage.querySelectorAll('input[name="subject"]');
const initialQuery = new URLSearchParams(window.location.search)
  .get("query")
  ?.trim() ?? "";

if (!(input instanceof HTMLInputElement)
  || !(title instanceof HTMLElement)
  || !(summary instanceof HTMLElement)
  || !(list instanceof HTMLElement)
  || !(emptyState instanceof HTMLElement)) {
  throw new Error("Search results page is missing required search elements.");
}

input.value = initialQuery;

function createResultCard(book) {
  const card = document.createElement("article");
  card.className = "result-card";

  const cover = document.createElement("img");
  cover.src = book.image;
  cover.alt = `Cover of ${book.title}`;

  const copy = document.createElement("div");
  copy.className = "result-copy";

  const subject = document.createElement("span");
  subject.className = "result-subject";
  subject.textContent = book.subject;

  const heading = document.createElement("h2");
  heading.textContent = book.title;

  const author = document.createElement("p");
  author.className = "result-author";
  author.textContent = book.author;

  const description = document.createElement("p");
  description.className = "result-description";
  description.textContent = book.description;

  const metadata = document.createElement("div");
  metadata.className = "result-meta";

  const language = document.createElement("span");
  language.textContent = "English";

  const year = document.createElement("span");
  year.textContent = `First published ${book.year}`;
  metadata.append(language, year);

  copy.append(subject, heading, author, description, metadata);

  const actions = document.createElement("div");
  actions.className = "result-actions";

  const readLink = document.createElement("a");
  readLink.className = "primary-action";
  readLink.href = book.gutenbergId
    ? `https://www.gutenberg.org/ebooks/${book.gutenbergId}`
    : `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(book.title)}`;
  readLink.textContent = "Read now";

  const readingListButton = document.createElement("button");
  readingListButton.type = "button";
  readingListButton.textContent = "+ Reading List";
  actions.append(readLink, readingListButton);

  card.append(cover, copy, actions);
  return card;
}

function searchBooks(query, selectedSubject) {
  const terms = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);

  return books
    .map((book, index) => {
      const searchableText = [
        book.title,
        book.author,
        book.subject,
        book.description,
        book.year,
      ].join(" ").toLocaleLowerCase();
      const matchesQuery = terms.every((term) => searchableText.includes(term));
      const matchesSubject = selectedSubject === "all"
        || book.subject === selectedSubject;

      return { book, index, matchesQuery, matchesSubject };
    })
    .filter((result) => result.matchesQuery && result.matchesSubject);
}

function updateResults() {
  const rawQuery = input.value.trim();
  const selectedSubject = searchPage.querySelector(
    'input[name="subject"]:checked',
  )?.value ?? "all";

  const results = searchBooks(rawQuery, selectedSubject);

  if (sort instanceof HTMLSelectElement) {
    results.sort((first, second) => {
      if (sort.value === "title") {
        return first.book.title.localeCompare(second.book.title);
      }

      if (sort.value === "author") {
        return first.book.author.localeCompare(second.book.author)
          || first.book.title.localeCompare(second.book.title);
      }

      return first.index - second.index;
    });
  }

  list.replaceChildren(...results.map(({ book }) => createResultCard(book)));
  title.textContent = rawQuery ? `Results for “${rawQuery}”` : "Search results";
  summary.textContent = `${results.length} ${results.length === 1 ? "book" : "books"} found${rawQuery ? ` for “${rawQuery}”` : ""}.`;
  emptyState.hidden = results.length !== 0;
  list.hidden = results.length === 0;
}

input.addEventListener("input", updateResults);
filters.forEach((filter) => filter.addEventListener("change", updateResults));
sort?.addEventListener("change", updateResults);
updateResults();
})();
