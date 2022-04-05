const listscore = [
  { name: 'Name', score: 70 },
  { name: 'Name', score: 60 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 40 },
  { name: 'Name', score: 30 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 10 },
];

const displayScores = () => {
  const scoreBoardContainer = document.querySelector('#scores');
  scoreBoardContainer.innerHTML = '';
  listscore.forEach((user) => {
    scoreBoardContainer.innerHTML += `<li>
        <p>${user.name}: ${user.score}</p>
        </li>`;
  });
};

exports.displayScores = displayScores;