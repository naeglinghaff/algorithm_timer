## Algorithm Timer

A tool to test the length of time it takes for an algorithm to finish executing.
Intended help anyone (mostly me) learn about algorithm efficiency and complexity through interaction.

### To run the code

Clone this repo and run

```
npm start
```

To run the test
```
npm test
```
### Design decisions

To improve accuracy of the timer I implemented the performance class from Node.js to calculate the runtime for each function.

This meant separating out the server-side and client-side JavaScript. A user can therefore select the algorithm they would like to test via a dropdown menu on the client, this is sent back to the server-side script which runs the calculation and returns the results to be mapped via Chart.js.

### Custom algorithms

My custom functions are stored in the server-side in src, each in a different script file.

The timer code will have to be adapted to accept these functions as they are not inbuilt Array properties.

#### Reverse

The first function I needed to implement. To see how I would solve such a problem in real life I tried to reverse the order of 4 coloured pens on my desk. The solution was as follows:

* Pick up item at index 0
* Move this item to the last position in the array -1
* Pick up the item now at index 0
* Move this item to the 2nd to last position in the array -2
* Pick up the item now at index 0
* Place this item at the 3rd to last item in the array -3
* Leave the item now at 0 where it is as each item has now been fully reversed.

This solution requires the array to take note of the oringal postion of each  of item and also acknowlege the length of the array.
