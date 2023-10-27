const URL = "https://rickandmortyapi.com/api/character/?page=";

export async function get(page, g) {
  await fetch(`${URL}${page}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      g(data.results);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

export function parse(element) {
  const obj = {
    name: element.name,
    status: element.status,
    species: element.species,
  };

  //console.log(obj);
  return obj;
}
