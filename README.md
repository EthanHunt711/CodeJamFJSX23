# Code Jam FJSX23

## Guees the Number Game

This is a small project for a class assignment.

## Game Description

As the name suggests, the game is meant to challenge the user to find a secret number which is withheld by the program. The user must finish the game in 5 rounds. It is possibel to start over the game at anytime.

## Main Features

The original assignment specifies that the user is supposed to guess the number (in an unlimited number of attempts) which is hardcoded as a range between 1 and 100. The game ends when the user has found the number.

## New Features

1. Range selection

   - The user must choose the range for the secret number.
   - After setting the range, it is not possible to make further changes
   - Depending on the selected range, a comment message is shown
   - No limit in the range is presupposed, but the game recommends challenge.

2. Attempts are limited to 7
3. Restart the game at anytime
4. Out of bound inputs are commented and counted

## Disclaimer

The design is somewhat primitive with no special animations due to the pedogodgical purposes of using DOM.
