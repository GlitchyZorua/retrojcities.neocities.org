fetch('searchEngines.json')
  .then(response => response.json())
  .then(data => {
  const searchEngines = data.searchEngines;
  const searchEngineSelect = document.getElementById('searchEngineSelect');

  if (searchEngineSelect) {
    searchEngines.forEach(engine => {
      const option = document.createElement('option');
      option.value = engine.url;
      option.text = engine.name;
      option.disabled = engine.disabled;
      searchEngineSelect.appendChild(option);
    });
  } else {
    console.error('Search engine dropdown element not found');
  }
})
  .catch(error => {
    console.error('Error loading search engines:', error);
  });