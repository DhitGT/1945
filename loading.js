// loading.js

const loadingBar = document.querySelector('.progress');
const resources = [
  { type: 'img', url: 'bgmenu.png' },
  { type: 'img', url: 'bg1.png' },
  { type: 'img', url: 'bg2.png' },
  { type: 'img', url: 'bg3.png' },
  { type: 'img', url: 'bg4.png' },
  { type: 'img', url: 'overbg1.png' },
  { type: 'img', url: 'overbg2.png' },
  { type: 'img', url: 'overbg3.png' },
  { type: 'img', url: 'overbg4.png' },
  { type: 'img', url: 'player.png' },
  { type: 'img', url: 'enemy.png' },
  { type: 'bgm', url: 'amparpisang.mp3' },
  { type: 'bgm', url: 'apuse.mp3' },
  { type: 'bgm', url: 'flobamorea.mp3' },
  { type: 'bgm', url: 'ibupertiwi.mp3' },
  { type: 'bgm', url: 'indonesiapusaka.mp3' },
  { type: 'bgm', url: 'kerosene.mp3' },
  { type: 'bgm', url: 'kincir.mp3' },
  { type: 'bgm', url: 'lathi.mp3' },
  { type: 'bgm', url: 'yamko.mp3' },
  { type: 'sfx', url: 'coinpick.wav' },
  { type: 'sfx', url: 'enemydeath.wav' },
  { type: 'sfx', url: 'fail.mp3' },
  { type: 'sfx', url: 'fire (2).mp3' },
  { type: 'sfx', url: 'fire.mp3' },
  { type: 'sfx', url: 'hit.wav' },
  { type: 'sfx', url: 'win.mp3' }
];

let loadedResources = 0;

function loadResource(type, url) {
  const resourceUrl = `https://www.dheep.site/assets/${type}/${url}`;
  
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', resourceUrl);
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
    loadResource(resource.type, resource.url)
      .then(() => updateLoadingBar())
      .catch(error => console.error(`Error loading ${resource.url}: ${error}`));
  });
}

preloadResources();
