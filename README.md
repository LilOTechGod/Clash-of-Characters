# Clash of Characters
![License](https://img.shields.io/badge/License-MIT-blue)

## Description
Have you had enough of fighting monsters and want to play as said creatures, or maybe just want to satisfy some simple desires to play some good old retro arcade fighting games? You've come to the right place! In this interactive web-based browser game, players can choose between different monsters and/or characters to battle against an AI. Choose your moves wisely on the path to victory!

This game is also mobile-friendly, and deployed using Heroku app.

This full-stack MERN project was created as a culmination of the skills and technologies learned in the UT Austin Coding Bootcamp course in Fall 2022. The app is dynamic and interactive on the front end, complete with a database to track user accounts. Technologies used in this project include React, NodeJS, ExpressJS, JWT, GraphQL, MongoDB, Mongoose ODM, and Heroku. Character animations and sprites are included in the credits section.

## Table of Contents
* [Installation](#installation)
* [Gameplay](#gameplay)
* [Credits](#credits)
* [Collaborations](#collaborations)
* [Contact](#contact)
* [License](#license)

## Installation
If you wish to install this on your local machine, you may clone the repo using `git clone` with the link to the repo. 

Install all the dependencies using `npm install` at the root level. 

Run from the root folder using `npm run start`.

## Gameplay

Click [HERE](google.com) to play!

On entry, the main screen will ask players to login or signup to create an account. Currently, this allows players to track their wins.

(main screen pic)

Signing up for an account requires a username, email, and password of minimum length 5 characters.

(Signup screen pic)

Once logged in, players will be given a selection of different fighters to choose from.

(Char select pic)

Pick any of them! For the purposes of this initial game draft, we have 4 characters to start with.
Clicking any of the buttons will open up the fight screen and display the player-selected character along with an AI opponent.

(fight screen)

For this initial demo, players have 2 possible attacks: Fight or Strike. Choose wisely! The player and the AI will take turns attacking each other until one is defeated. The damage done to either the player or the AI will reflect in the health bars at the top of the page.

(attack screen)

Once the game ends, players will be given the option to either choose a new character, fight again, or end the game.

(end screen)

## Credits
Sprites were obtained from https://luizmelo.itch.io/monsters-creatures-fantasy. 

Backgrounds were procured from https://noranekogames.itch.io/yumebackground. 

Special thanks to Leah, Ian, Negin, and Diem for keeping us afloat through the bootcamp!

## Collaborations
This project was made possible by the hard work of the following contributors, with links to each of their respective GitHubs:

* [Oscar Perez](github.com/LilOTechGod)
* [Brandon Knight](github.com/blksmk8483)
* [Jimmy Huang](github.com/jimmehhuang)
* [David Garcia](github.com/parradavid300)
* [Casey Myers](github.com/BriefCasey)

## Contact
If you have any additional questions, feel free to reach out via any of the above links! Happy fighting!

## License
Refer to license in repo or as below:

MIT License

Copyright (c) 2022 LilOTechGod

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.