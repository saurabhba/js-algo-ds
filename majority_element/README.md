# Majority Element
Suppose we're given an array of numbers like the following:

[4, 2, 4]

Could you find the majority element? A majority is defined as "the greater part, or more than half, of the total. It is a subset of a set consisting of more than half of the set's elements."

Let's assume that the array length is always at least one, and that there's always a majority element.

In the example above, the majority element would be 4.

Examples
[4, 2, 4] -> 4 has majority

[4, 2, 4, 2] -> no majority

[4, 2, 4, 2, 1, 4, 1, 2, 4] -> no majority

### Solution-1
1. Save each element in a hash map (element as key and occurance as value)

2. Check which key has highest value in hash

3. Return that key

### Solution-2
1. Sort input array

    `[4, 2, 4]` after sort become `[2, 4, 4]`
2. Get the middle element from sorted array

