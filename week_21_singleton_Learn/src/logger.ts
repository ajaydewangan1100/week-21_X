// Goal of this file is to just log the state of server
import { GameManager, gameManager, games } from "./store";

// Bad approach -------------------------------
export const startLoggerBad = () => {
  setInterval(() => {
    console.log("GAMES : ", games);
  }, 5000);
};

// Better Approach ----------------------------

export const startLoggerBetter = () => {
  setInterval(() => {
    gameManager.log();
  }, 5000);
};

// Best Approach -----------------------------
export const startLogger = () => {
  setInterval(() => {
    GameManager.getInstance().logState();
  }, 5000);
};
