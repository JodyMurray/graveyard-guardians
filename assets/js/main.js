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
            size: 50,
            origin: "center",
        }),
        color(255, 230, 0),
    
    ]);

    // How to play button (similar to Start button)
    const howToPlayButton = add([
        pos(width() / 2, height() / 1.5),
        origin("center"),
        layer("ui"),
        {
            value: "How to play",
        },
        {
            clickAction: () => {
                go("how to play"); // Switch to the how to play scene when how to play button is clicked
                
            },
        },
        text("How To Play", {
            size: 50,
            origin: "center",
        }),
        color(255, 230, 0),
    
    ]);

    // Handle mouse clicks on the buttons
    mouseClick(() => {
        if (startButton.isHovered()) {
            startButton.clickAction();
        } else if (howToPlayButton.isHovered()) {
            howToPlayButton.clickAction();
        }
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

