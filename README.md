Project 0 - Tic Tac Toe

Objective: Build a tic tac toe game in HTML and JavaScript.

Minimum Requirements:

// A user should be able to click on a square.
// Every click will alternate between marking an X and O.
// A cell should not be able to be replayed once marked.
// If a row, column or diagonal is filled with the O, player one will have won the game.
// If a row, column or diagonal is filled with the X, player two will have won the game.
// Add a reset button that will clear the contents of the board.

Approach taken:  

HTML:

//Created a index.html. Added necessary HTML tags, including script and link tags to link the JavaScript and CSS respectively, ensured these were connected using console.log and changing the body background.
// Constructed a "gameboard" using the table tag, so it displayed a 3x3 grid. Used id's so I could target the individual boxes.
// Added a "reset" button.

JavaSript:

// Started JavaScript next. Located the $".box" elements first and added a event listener. Used the console.log to make sure the selection worked.  
//After finding the elements, start writing the logic for the click events on those elements and whether or not an X or 0 is to be displayed.
//Determined the winning combinations and used if/ else statements to log these out.
//After the necessary moves have been played, check those combinations, and alert the winner if one player ends up winning with three in a row/column or diagonal.
//Display a message to indicate which turn is about to be played.

CSS:

//Lastly, I styled the game using CSS, the sweet alert library and animate library (added the script tags to the HTML file).
//Kept the X and O's and used google fonts for the text.
//Centred the board, changed the colour scheme.
//Used animated flipInX on the boxes.
//Used a hover effect on the "reset".
//Used a sweet alert for the winner. Changed the sweet alert colours to fit in with the colours theme of the game.


Unsolved problems:

//Would like to add a winner counter to keep track of multiple game rounds.
//How to personalise the game, using customised tokens.
//Support networked multiplayer.

Lesson's learnt:

//I originally had my files in the WDi21-homework folder, which meant I had to copy the files into a new folder to create a repository. The commits up until that point at in the WDi21-homework folder and then the commits after are in the repo folder.

//Break the task down into the smallest possible chunks, work through the pseudo-code and then tackle it bit by bit. Build one thing and then move on. 

//Start with the logic first.

//Build a working product and then go back and try to refactor the code to make it DRY.
