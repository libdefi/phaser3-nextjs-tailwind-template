import { Scene } from "phaser";
import { createRestartButton } from "../../utils/createRestartButton";

export class GameClear extends Scene {
  constructor() {
    super({ key: "gameclear" });
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2, "Game Clear", {
      fontSize: "64px",
      color: "#fff",
    }).setOrigin(0.5);

    createRestartButton(this, width, height);
  }
}
