import Phaser from "phaser";
import { Breakout } from "../breakout";
import { GameOver } from "../gameover";
import { GameClear } from "../gameclear";

const StartGame = (parentElementId: string): Phaser.Game => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: parentElementId,
    scene: [Breakout, GameOver, GameClear],
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 },
        debug: false,
      },
    },
  };

  return new Phaser.Game(config);
};

export default StartGame;
