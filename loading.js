// loading.js

const loadingBar = document.querySelector('.progress');
const resources = ['bgmenu.png','bg1.png','bg2.png','bg3.png','bg4.png','overbg1.png','overbg2.png','overbg3.png','overbg4.png','player.png','enemy.png','amparpisang.mp3','apuse.mp3','flobamorea.mp3','ibupertiwi.mp3','indonesiapusaka.mp3','kerosene.mp3','kincir.mp3','lathi.mp3','yamko.mp3','coinpick.wav','enemydeath.wav','fail.mp3','fire (2).mp3','fire.mp3','hit.wav','win.mp3']; // List of resources to preload
let loadedResources = 0;

function loadResource(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function updateLoadingBar() {
  loadedResources++;
  const progress = (loadedResources / resources.length) * 100;
  loadingBar.style.width = `${progress}%`;

  if (loadedResources === resources.length) {
    // All resources are loaded, redirect to index.html only if not already redirected
    if (!sessionStorage.getItem('redirected')) {
      sessionStorage.setItem('redirected', 'true');
      window.location.href = 'index.html';
    }
  }
}

function preloadResources() {
  resources.forEach(resource => {
    loadResource(resource)
      .then(() => updateLoadingBar())
      .catch(error => console.error(`Error loading ${resource}: ${error}`));
  });
}

preloadResources();
