import { startLogger, startLoggerBad, startLoggerBetter } from "./logger";
import { GameManager, gameManager, games } from "./store";

// Bad approach -------------------------------
// startLoggerBad();
// setInterval(() => {
//   games.push({
//     id: Math.random().toString(),
//     whitePlayerName: "Piku",
//     blackPlayerName: "Kodu",
//     moves: [],
//   });
// }, 5000);

// Better Approach ----------------------------
// startLoggerBetter();
// setInterval(() => {
//   gameManager.addGame(Math.random().toString());
// }, 5000);

// Best Approach ----------------------------
startLogger();
setInterval(() => {
  GameManager.getInstance().addGame({
    id: Math.random().toString(),
    whitePlayerName: "Piku",
    blackPlayerName: "Kodu",
    moves: [],
  });
}, 5000);
