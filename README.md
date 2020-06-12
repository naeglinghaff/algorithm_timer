## Algorithm Timer

A tool to test the length of time it takes for an algorithm to finish executing.
Intended to help anyone (mostly me) learn about algorithm efficiency and time complexity.

### To run the code

Clone this repo and run

```
npm install
npm start
```
Navigate to localhost:3000 in Google Chrome and select an algorithm you would like to test in the dropdown menu. Then you should see the results plotted to the canvas. *Warning some of the quadratic algorithms may take quite a long time - I am currently looking into ways to optimise their efficiency*.

Algorithms that have been written by me are denoted by the custom keyword and I have tried to indicate their level of efficiency as part of their naming conventions to differentiate versions of the same algorithm.

To run the tests, clone the repo and navigate to the root directory. Run:
```
npm test
```

### Design decisions

To improve accuracy of the timer I implemented the performance class from Node.js to calculate the runtime for each function.

This meant separating out the server-side and client-side JavaScript. A user can therefore select the algorithm they would like to test via a dropdown menu on the client, this is sent back to the server which runs the calculation and returns the results to be mapped via Chart.js.

### Known issues

Node.js is not necessarily best suited for doing CPU intensive operations like the ones used here, as JavaScript is a single-threaded language. Worker thread pools have the potential to make the server-side JS more efficient. This is a current avenue of exploration for this project.

### Custom algorithms

My custom functions are stored, server-side in src under custom_algorithms.

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

To shuffle the values you need to generate a random value and then use that to select items. You can then remove that item, place it either in a temporary holding variable or in another array and repeat this process until everything has been moved.

In my first iteration I used the splice value to remove the item at the random index. On my second I reassigned the item to the end of the array before removing it.

The difference between a quadratic and linear result for this algorithm comes down to how you are manipulating memory. Assignment is less costly operation than deletion, since deletion sometimes means moving the entire array structure in your computer's memory. This is why the second solution results in a more efficient algorithm.

### Finding duplicates

Your choice of data structure will also influence how quickly a value can be found. Hashes or libraries have a find advantage over arrays since you don't have to iterate through the entire structure to locate a value. Find is a execution expressed in constant time for a hash table.

Another thing to take into consideration when designing an algorithm is the weaknesses and strengths of any given data structure. Which one is going to be best fit for your particular problem?

Sorting is an expensive operation because it involves searching, comparison and swapping or moving each item in a given dataset.

### Optimisation methods

* Avoid repeating operations
* Avoid expensive memory operations like deletion
* Choose a data structure optimised for your problem
