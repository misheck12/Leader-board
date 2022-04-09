import './style.css';
import { addScore, displayScoreList } from './score.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');
displayScoreList();

refresh.addEventListener('click', () => {
  displayScoreList();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  if (user !== '' && score !== '') {
    const data = {
      user,
      score,
    };
    addScore(data);
    form.reset();
  }
});
