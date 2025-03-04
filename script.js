document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.querySelector('model-viewer');
    const contentContainer = document.getElementById('content-container');
    const loader = document.getElementById('loader');

    // Use the scene-graph-ready event to ensure the model is fully loaded
    modelViewer.updateComplete
    .then(() => {
      console.log('Model update complete – hiding loader');
      loader.style.display = 'none';
      contentContainer.style.display = 'block';
    })
    // Fallback: if an error occurs, also reveal the content
    modelViewer.addEventListener('error', (err) => {
      console.error('Model loading error:', err);
      loader.style.display = 'none';
      contentContainer.style.display = 'block';
    });
  });