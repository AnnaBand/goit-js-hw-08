import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
const player = new VimeoPlayer(video);
const localStorageKey = 'videoplayer-current-time';

const saveCurrentTimeToLocalStorage = throttle((currentTime) => {
  localStorage.setItem(localStorageKey, currentTime);
}, 1000);

player.on('timeupdate', () => {
  const currentTime = player.currentTime();
  saveCurrentTimeToLocalStorage(currentTime);
});

try {
  const storedTime = parseFloat(localStorage.getItem(localStorageKey)) || 0;
  player.setCurrentTime(storedTime);
} catch (error) {
  console.error('Error:', error);
}