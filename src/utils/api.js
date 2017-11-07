const API_ID = "f7200652"
const APP_KEY = "790082535a9cbac04c9a8eeccc73b15f"

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}