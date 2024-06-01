import Phaser from "phaser";
import { Breakout } from "../breakout";
import { GameOver } from "../gameover";

const StartGame = (parentElementId: string): Phaser.Game => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: parentElementId,
    scene: [Breakout, GameOver],
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 }, // ここで x: 0 を追加します
        debug: false,
      },
    },
  };

  return new Phaser.Game(config);
};

export default StartGame;
