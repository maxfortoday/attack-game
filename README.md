# Attack Game

steps game, each click is a step

## Getting Started

import this project to your machine and start it

```
npm start
```

## rules:

* 3 circles, each one is a step depends on the status of the team (3 statuses)
* to color the circle the team should end 3 steps (each click is a step)
* if the team have all statuses on done then the 4th circle is colored also
* 4 cercles total
* score is showed down by who finished and it's place

## note: 
* if the app is rendered and there is no steps for the team the team will not be rendered
* if the app is rendered a team that have all 3 circles colored the this team will not be rendered
* if the app is rendered and some team have 3 steps already completed the app will render it as a finished status
* if the first step is not completed and you clicking on the second step it will not be colored, you need to finish first step before continuing to the next one