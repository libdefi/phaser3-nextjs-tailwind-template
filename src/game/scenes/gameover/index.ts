import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super({ key: "gameover" });
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2, "Game Over", {
      fontSize: "64px",
      color: "#fff",
    }).setOrigin(0.5);

    this.input.on("pointerdown", () => {
      this.scene.start("breakout");
    });
  }
}
