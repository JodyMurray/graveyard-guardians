<h1 align="center"><strong>Graveyard Guardians</strong></h1>

![Graveyard Guardians Home screen banner](./assets/images/home_screen_banner.png)

## Table of contents
-   Live game can be found here [Graveyard Guardians](https://jodymurray.github.io/graveyard-guardians/)
* [Purpose](#purpose)
* [User Experience (UX)](#user-experience-ux)
    * [User Stories](#user-stories)
    * [Structure](#structure)
* [Design](#design)
    * [Typography](#typography)
    * [Wireframes](#wireframes)
    * [Limitations](#limitations)
* [Features](#features)
    * [Existing Features](#existing-features)
* [Technologies](#technologies)
* [Testing](#testing)
    * [Test strategy](#test-strategy)
    * [Test results](#test-results)
* [Deployment](#deployment)
    * [Project creation](#project-creation)
    * [Local Development](#local-development)
        * [Making a clone](#making-a-clone)
        * [Fork Github Repository](#fork-github-repository)
    * [Remote Deployment](#remote-deployment)
    * [Run the app](#run-the-app)
* [Credits](#source--credits)

***

## Purpose
The purpose of the game is to provide players with a fun and entertaining experience. It's a way for players to immerse themselves in the Halloween spirit and enjoy the excitement of action-packed gameplay set in a spooky and supernatural environment.
          
## User Experience (UX)
-   ### User stories
    As a **(role)** I can **(capability)**, so that **(received benefit)**

    | User story id | As a/an | I want to be able to | So I |
    |---------------|---------|----------------------|----------|
    | 1 | User | See the overall theme of the game from the welcome page | Know what to expect |
    | 2 | User | Easily access the instructions | Learn how to play |
    | 3 | User | Toggle music / sound | Create my own comfort |
    | 4 | User | See game details | Know my score, life / lives |
    | 5 | User | Feel progression in difficulty | Stay focused |

- ### Structure
    -   Sound button will be displayed on the screen at all times
    -   Home page will have Start button and Instruction button
    -   Instruction page will display How to play and a Back button to return to home page
    -   Life bar will be displayed in the top left corner while playing
    -   Zombies will spawn from left and right of the level
    -   Zombies will attack the player and hit it from close distance
    -   The player will be able to shoot zombies

## Design

-   ### Typography
    -   Font-family: 'Oswald' used as main font with fallback sans-serif;

-   ### Wireframes
    ![home-page](assets/images/wireframes/Slide1.PNG)
    ![instructions](assets/images/wireframes/Slide2.PNG)
    ![level1](assets/images/wireframes/Slide3.PNG)
    ![game-diagram](assets/images/wireframe.png)

-   ### Limitations
    -   Zombies can't jump
    -   The game has only one level
    -   Player can jump off screen

## Features
-   ### Existing Features
    -   Instructions button - Sends player to instruction page<br>
        ![instruction-button](assets/images/features/instructions-button.png)
        <br>
    -   Instructions page - Tells player how to play the game<br>
        Satisfies user story - Easily access the instructions | Learn how to play |<br>
        ![Instructions](assets/images/howplay.png)
        <br>
    -   Start button - Starts the game<br>
        ![start-button](assets/images/features/start-button.png)
        <br>
    -   Level 1 - Play area map<br>
        ![level1](assets/images/level1.png)
        <br>
    -   Sound toggle - Turn sound on/off<br>
        Satisfies user story - Toggle music / sound | Create my own comfort |<br>
        ![sound-button](assets/images/features/sound-button.png)
        <br>
    -   Life bar - Shows to player the how much life has left<br>
        ![life-bar](assets/images/features/life-bar.png)
        <br>
    -   Next round page - Informs the player next round is comming
        ![NextRoundlook](assets/images/nextground.png)
        <br>

## Technologies

* HTML
* CSS
* Javascript
* Kaboom.js

## Testing
-   ### Test Strategy
    -   Manual testing
    -   Code validation

-   ### Test Results
    -   Css was passed  [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/) test with no errors<br>
    -   HTML was passed  [validator.w3.org](https://validator.w3.org/) test with no errors
    -   JS files passed [jshint.com](https://jshint.com/) tests with no errors

        | No | Test | Description | Pass / Fail | Fix | Pass / Fail |
        |----|------|-------------|-------------|-----|-------------|
        | 1 | See the overall theme of the game from the welcome page | Check the homepage background image is loaded | Pass | - | - | 
        | 2 | Easily access the instructions | Add button on the home page | Pass | - | - |
        | 3 | Toggle music / sound | Create a button on the screen to toggle sound on/off | Pass | - | - |
        | 4 | See game details | Life bar in the top left corner of the screen, Enemy killed after player die | Pass | - | - |
        | 5 | Feel progression in difficulty | Harder levels not developed yet | Fail | Future release | - |


## Deployment
-   ### Project Creation
    The code was committed to [Git](https://git-scm.com) and pushed to [GitHub](https://github.com) using the terminal.

    The project was started by navigating to [GitHub](https://github.com) and creating a new repository by clicking `New` button. Under 'Repository name' input 'graveyard-guardians' and then clicked 'Create repository'.

    Cloned the Github repository by typing the command: 
    ```
    git clone <repo URL>
    ```

    The following commands were used throughout the project:
    * `git add` - This command was used to add files to the staging area before commiting.
    * `git commit` -m *commit message explaining teh updates* - This command was used to commit changes to the local repository.
    * `git push` - This command was used to push all commited changes to the GitHub repository.
    * `git branch` - This command was used to create new branches
    * `git checkout` - This command was used to swap between branches
    * `git pull` - This command was used to get the latest version of the base code
    * `git merge` -This command was used to merge changes itno the main branch

-   ### Local Development
    -   #### Making a clone
        1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JodyMurray/graveyard-guardians)
        2. Click the [Code](assets/images/clone_button.png) button and then choose your method.
        3. To clone the repository using HTTPS, under the "HTTPS" tab copy the link. You could also choose to open it with Github Destop, Visual Studio or download it as a zip file.
        4. Open the command prompt on your computer
        5. Go to the location where you want the clone to be created.
        6. Type `git clone`, and then paste the URL you copied in Step 3.

        ```
        $ git clone https://github.com/JodyMurray/graveyard-guardians.git
        ```

        7. Pressing `Enter` will create the clone.
    -   #### Fork Github Repository
        Forking means making a copy of the original repository on your own GitHub account.
        This gives you your own version to make changes without affecting the original repository.

        1. Log in to GitHub and locate [GitHub Repository](https://github.com/JodyMurray/graveyard-guardians)
        2. Locate the `Fork` button at the top right of the GitHub page
        3. Click this to see the `Create a new fork` page. Click `Create fork` and you should now have a copy of the original repository in your GitHub account


-   ### Remote Deployment
    -   This game is deployed on Github Pages.
    1.  Navigate to Github repository
    2.  Go to `Settings` tab
    3.  Navigate to `Pages` tab
    4.  Select the branch `main` to deploy from
    5.  Click `Save`

-   ### Run the app
    To run this app on your local machine, after the repository was cloned, open a Live server starting with index.html page

## Credits

We took help for this project from following:
* Pixabay for sounds - [pixxabay](https://pixabay.com/sound-effects/)
* Background music - [itch.io](https://davidkbd.itch.io/spooky-playtime-spooky-and-crazy-music-pack)
* Flaticon for Background image - [flaticon](https://www.flaticon.com/search?word=halloween%20background)
* Freepik for images - [freepick](https://www.freepik.com/search?format=search&query=halloween)
* Remove.bg for Remove background image - [remove.bg](https://www.remove.bg/upload)
* Jack-o-Lantern sprites - [gameart2d.com](https://www.gameart2d.com/jack-o-lantern-free-sprites.html)
* Zombies sprites - [gameart2d.com](https://opengameart.org/content/free-graveyard-platformer-tileset)
* graveyard tile set - [opengameart.org](https://opengameart.org/content/free-graveyard-platformer-tileset)