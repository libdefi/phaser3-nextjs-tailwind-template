import { Scene } from 'phaser';

export function createRestartButton(scene: Scene, width: number, height: number): void {
  const buttonWidth = 200;
  const buttonHeight = 50;
  const buttonX = width / 2 - buttonWidth / 2;
  const buttonY = height / 2 + 50;

  // Create a graphics object for the button background
  const buttonBackground = scene.add.graphics();
  buttonBackground.fillStyle(0x0000ff, 1);  // Blue background
  buttonBackground.fillRoundedRect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

  // Create text for the button
  const buttonText = scene.add.text(width / 2, height / 2 + 75, "Restart", {
    fontSize: "32px",
    color: "#fff",
  }).setOrigin(0.5).setInteractive();

  // Set up the button interaction
  buttonText.on("pointerdown", () => {
    scene.scene.start("breakout");
  });

  // Ensure the button background and text are interactive
  buttonBackground.setInteractive(new Phaser.Geom.Rectangle(buttonX, buttonY, buttonWidth, buttonHeight), Phaser.Geom.Rectangle.Contains);

  buttonBackground.on("pointerdown", () => {
    scene.scene.start("breakout");
  });
}
