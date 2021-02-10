//https://www.algoexpert.io/questions/Tournament%20Winner

// console.log(competitions)
// console.log(results)
//0 away
//1 home
// 	[ [ 'HTML', 'C#' ], [ 'C#', 'Python' ], [ 'Python', 'HTML' ] ]
// [ 0, 0, 1 ]

//my solution:
// 0(n) | 0(k) - n is number of competitions and k number of teams
function tournamentWinner(competitions, results) {
  let len = results.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (!competitions[i]) continue;
    const winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
    if (winner in map) {
      map[winner] += 3;
    } else {
      map[winner] = 3;
    }
  }
  let max = -Infinity;
  let saveKey = null;
  for (let key in map) {
    const val = map[key];
    if (val > max) {
      saveKey = key;
      max = val;
    }
  }
  return saveKey;
}

// algoexpert solution:
// 0(n) | 0(k) - n is number of competitions and k number of teams
const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}
