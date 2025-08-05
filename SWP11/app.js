const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Theme toggler elements
const themeToggler = document.getElementById("theme-toggler");
const body = document.body;

async function searchWikipeida(query) {
  const encodedQuery = encodeURIComponent(query);
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`;

  const reponse = await fetch(endpoint);

  if (!reponse.ok) {
    throw new Error("Faild to fetch search results form wikipedia API.");
  }

  const json = await reponse.json();
  return json;
}

function displayResults(results) {
  // Remove the loading spinner
  searchResults.innerHTML = "";

  results.forEach((result) => {
    const url = `https://en.wikipedia.org/?curid=${results.pageid}`;
    const titleLink = `<a href="${url}" target="_blank" rel="noopener">${result.title} </a>`;
    const urlLink = `<a href="${url} class="result-link" target="_blank" rel="noopener">${url}</a>`;

    const resultItme = document.createElement("div");
    resultItme.className = "result-item";
    resultItme.innerHTML = `
        <h3 class="result-title">${titleLink}</h3>
        ${urlLink}
        <p class="result-snippet">${result.snippet}</p>
        `;

    searchResults.appendChild(resultItme);
  });
}