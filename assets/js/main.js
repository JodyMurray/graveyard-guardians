// Initialize kaboom context
kaboom({
  width: 900,
  height: 600,
  canvas: document.getElementById("game-canvas"),
});

// Define the home page scene
scene("home", () => {
  // Display background image
  add([sprite("background-home"), layer("bg")]);

  // Display title
  const title = add([
    text("Graveyard Guardians", 30),
    pos(width() / 28, height() / 2 - 280),
    layer("ui"),
    {
      value: "Graveyard Guardians",
    },
  ]);

  // Start button
  const startButton = add([
    rect(120, 40),
    pos(width() / 2, height() / 2),
    origin("center"),
    layer("ui"),
    {
      value: "Start",
    },
    {
      clickAction: () => {
        go("game"); // Switch to the game scene when Start button is clicked
      },
    },
    text("Start", {
      size: 24,
      color: rgb(0, 0, 0), // Set text color to black
      origin: "center",
    }),
  ]);

  const instructionsButton = add([
    rect(180, 40),
    pos(width() / 2, height() / 2 + 60),
    origin("center"),
    layer("ui"),
    {
      value: "Instructions",
    },
    {
      clickAction: () => {
        go("instructions");
      },
    },
    text("Instructions", {
      size: 24,
      color: rgb(0, 0, 0),
      origin: "center",
    }),
  ]);

  // Handle mouse clicks on the buttons
  mouseClick(() => {
    const { x, y } = mousePos();
    if (
      x > startButton.pos.x - startButton.width / 2 &&
      x < startButton.pos.x + startButton.width / 2 &&
      y > startButton.pos.y - startButton.height / 2 &&
      y < startButton.pos.y + startButton.height / 2
    ) {
      startButton.clickAction();
    } else if (
      x > instructionsButton.pos.x - instructionsButton.width / 2 &&
      x < instructionsButton.pos.x + instructionsButton.width / 2 &&
      y > instructionsButton.pos.y - instructionsButton.height / 2 &&
      y < instructionsButton.pos.y + instructionsButton.height / 2
    ) {
      instructionsButton.clickAction();
    }
  });
});

// How to play button (similar to Start button)
// ...
scene("instructions", () => {
  add([sprite("window"), layer("bg")]);
  // Display instructions
  add([
    text("Instructions", 30),
    pos(width() / 2, height() / 4),
    origin("center"),
    layer("ui"),
    color(rgb(255, 255, 255)),
  ]);
  

  const instructionText = [
    "Welcome to Graveyard Guardians!",
    "Instructions:",
    "- Use the arrow keys to move your character.",
    "- Use the space key to shoot.",
    "- Avoid the enemies and obstacles.",
    "- Survive as long as you can!",
  ];

  // Add each line of the instructions
  instructionText.forEach((instructionText, index) => {
    add([
      text(instructionText, {
        size: 24,
        color: rgb(0, 0, 0),
        scale: (width() / 900, height() / 600),
      }),
      pos(width() / 2, height() / 4 + 40 * (index + 2)),
      origin("center"),
      layer("ui"),
    ]);
  });

  // Back button
  const backButton = add([
    rect(120, 40),
    pos(width() / 2, height() - 60),
    origin("center"),
    layer("ui"),
    {
      value: "Back",
    },
    {
      clickAction: () => {
        go("home"); // Switch to the home scene when the Back button is clicked
      },
    },
    text("Back", {
      size: 24,
      color: rgb(0, 0, 0),
      origin: "center",
    }),
    onClick(() => {
      go("home"); // Switch to the home scene when the Back button is clicked
    }),
  ]);
});

// Handle mouse clicks on the buttons
mouseClick(() => {
  if (startButton.isHovered()) {
    startButton.clickAction();
  }
});

// Define the game scene
scene("game", () => {
  // Your game logic goes here
});

// Load assets and start the home page scene
loadSprite("background-home", "/public/background-images/home_page.png", {
  sliceX: 1,
  sliceY: 1,
});

loadSprite("window", "/public/background-images/window.jpg", {
  sliceX: 1,
  sliceY: 1,
});

go("home");
