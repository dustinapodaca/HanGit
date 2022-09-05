<img src="https://members-csforall.imgix.net/members/logos/code-fellows-logo-horizontal-2-color-black.png" width="340" height="66">  

# ||  Foundations of Software Development - Group Project ||

# HanGit

*Code 201 Final Project - Hangman Git Command Game*

---

## Software Requirements


### Vision

* The vision is to create an interactive app, using the “Hangman” game as a model to help developers learn git commands.
* HanGit will help beginners with Git and Github in an interactive game format.
* HanGit will bridge the gap between more traditional ways of learning by utilizing an interactive experience to provide a fun way to learn. By implementing an interactive and competitive way to using git commands one may be able to retain the information in a new way.

### Scope (In / Out)

* In
  * The app will provide git scenarios to the user, and will require the user to input the correct git commands for those specifc scenarios.
  * The app will have difficulty modes that contain git scenarios that are tailored for beginners to more advanced users.
  * The app will display results to the user.
  * The app will allow the user to reset the game to start anew.

* Out
  * The app will not store scores if open in different browsers.
  * No animals were harmed in the making of this app. (Octocat)
  * The app is not making me lunch.
  * The app has no soul and is not self-aware.

### Minimum Viable Product (MVP)

* At a minimum the app should prompt the user Git questions
* Display the parts or figure if the answer is wrong.
* Display high scores
* CSS Styling for UI/UX
* Be able to go through the questions from start to finish.

### Stretch Goal

* Create a landing page that displays to the user multiple games to play- including a traditional "Hangman" game as well as "HanGit".
* Make animation for alaphet buttons to shake when a letter is incorrect.
* Make the hangman be an image of Octocat instead of a stick figure.

### Data Flow

* The user will access the website and access a *landing page* prompting games to play. Upon loading **HanGit** the user will be given instructions on how to play the game. The user will then be able to choose a difficulty mode which will trigger an event listener to an array of questions and answers. Upon deciding the difficulty mode the user will begin to be alerted with the questions to answer for their chosen difficulty at random. A digital keyboard will be displayed that will allow input of characters to answer the questions. Answers will be stored using localStorage & JSON.stringify and then parsed on the results page to display a chart.js graphic of the results for the user to view.

---