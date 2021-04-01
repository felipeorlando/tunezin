export const searchFetcher = (searchCategory) => (
  fetch(`http://localhost:3001/api/${searchCategory}`, { method: 'GET' })
    .then((res) => res.json())
)
