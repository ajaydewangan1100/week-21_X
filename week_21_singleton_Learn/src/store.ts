// Define the Game interface for our chess game
interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}
// Bad approach -------------------------------
// Initialize an empty array to store our game data
export const games: Game[] = [];

export class GameManager {
  // Better Approach ----------------------------
  // private games: Game[] = [];

  // addMove(gameID: string, move: string) {
  //   console.log(`Adding move ${move}`);
  //   const game = this.games.find((g) => g.id === gameID);
  //   game?.moves.push(move);
  // }

  // addGame(gameID: string) {
  //   const game = {
  //     id: gameID,
  //     whitePlayerName: "ABC",
  //     blackPlayerName: "XYZ",
  //     moves: [],
  //   };
  //   this.games.push(game);
  // }

  // export const gameManager = new GameManager();

  // Best approach -------------------------Singleton-------------------------
  private static instance: GameManager;
  private games: Game[] = [];

  private constructor() {
    // Private constructor ensures that a new instance cannot be created from outside
  }

  public static getInstance() {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGames() {
    return this.games;
  }

  public addMove(gameID: string, move: string) {
    const game = this.games.find((g) => g.id === gameID);
    if (game) {
      game?.moves.push(move);
    }
  }

  public logState() {
    console.log(this.games);
  }
}
