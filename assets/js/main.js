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

    // How to play button (similar to Start button)
    // ...

    // Handle mouse clicks on the buttons
    mouseClick(() => {
        if (startButton.isHovered()) {
            startButton.clickAction();
        }
        // Handle clicks for other buttons (if any)
        // ...
    });
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

go("home");
