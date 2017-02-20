# JS Drill: Counter 1

## In this drill, you'll be creating a counter with an increase, decrease, and log button.

### Big Picture
- The increase button should increase the counter by one.
- The decrease button should decrease the counter by one, as log as the counter isn't 0. If the counter is 0 and the decrease button is pressed, it should create a popup that warns the user that the count can't go below 0.
- The log button should output a message to console for as many times as the count. For example, if the count is 4 and the log button is pressed, it should print a message 4 times in the console.

### Steps:
- Go to scripts/main.js. All your work will be done in this file.
- In your browser, open up index.html. Every time you make a change to main.js, save it and go to your browser and refresh the page.
- Create a variable called count and set it equal to 0.
- Define the increaseCount function. It should simply increase the count by 1.
- Define the decreaseCount function. It should simply decrease the count by 1, but only if the count isn't currently 0. Hint: You're gonna need a conditional to do this
- Save your file, go to index.html in the browser, refresh, and make sure the counter is working before continuing.
- Next, define the logCountInConsole function. This function should create a loop that simply logs a message to the console as many times as the count. (Hint: You need a for loop for this part)
- Check your work by going into the browser and pressing the "Log" button; you should see messages in your console!
