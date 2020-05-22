## Algorithm Timer

A tool to test the length of time it takes for an algorithm to finish executing.
Intended to help anyone (mostly me) learn about algorithm efficiency and complexity.

### To run the code

Clone this repo and run

```
npm start
```
Navigate to localhost:3000 in Google Chrome.

To run the tests
```
npm test
```
### Design decisions

To improve accuracy of the timer I implemented the performance class from Node.js to calculate the runtime for each function.

This meant separating out the server-side and client-side JavaScript. A user can therefore select the algorithm they would like to test via a dropdown menu on the client, this is sent back to the server-side script which runs the calculation and returns the results to be mapped via Chart.js.

### Custom algorithms

My custom functions are stored, server-side in src under customAlgorithms.

In my first iteration, the Array object had these custom functions added as properties. This would NOT be something I would attempt outside of the bounds of this project as it would affect all Array objects across the code base. *Playing with global variables is not recommended.*

So I decided to rework the solution, concluding that abusing the DRY principle would be the lesser of two evils. Now the custom functions are fed through a custom timer. This custom timer contains adapted code which accepts an array as a parameter.

#### Reverse

The first function I needed to implement. To see how I would solve such a problem in real life I tried to reverse the order of 4 coloured pens on my desk. The solution was as follows:

* Pick up item at index 0
* Move this item to the last position in the array -1
* Pick up the item now at index 0
* Move this item to the 2nd to last position in the array -2
* Pick up the item now at index 0
* Place this item at the 3rd to last item in the array -3
* Leave the item now at 0 where it is as each item has now been fully reversed.

This solution requires the array to take note of the original position of each  of item and also acknowledge the length of the array.

An alternative and perhaps more efficient route would be to:

* Pick up the item at position 0
* Swap it with the item at position -1
* Pick up the item at position 1
* Swap it with the item at position -2
etc ..

The output of the second version gave me a linear line. Suggesting that the algorithm has an efficiency of O(n). This matches the line mapped by the inbuilt reverse function. Yay!

#### Shuffle

Shuffle is an interesting one because JavaScript doesn't come with its own inbuilt shuffle method. I've decided to measure my own custom algorithm against the standard measure - the Fisher-Yates Shuffle, which is O(n).

As a practice run I attempted to shuffle an array of 3 numbers - [1, 2, 3].
The possible 6 outcomes of this shuffle are:

[1,2,3]
[1,3,2]
[3,2,1]
[3,1,2]
[2,1,3]
[2,3,1]

The difference between getting a quadratic and linear result for this algorithm can come down to how you are manipulating memory. Assignment is less costly operation than deletion, since deletion sometimes means moving the entire array in memory. This is why the second solution results in a quicker a more efficient algorithm because there is no deletion.

### Finding Duplicates

Your choice of memory structure will also influence how quickly a value can be found in it. Hashes or libraries have a find advantage over arrays since you don't have to iterate through the entire structure to find a value. Find is in constant time in a hash table.
