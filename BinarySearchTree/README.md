# Binary Search Tree
Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees. On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

## Complexities
### Time complexity

- Access: O(log(n))
- Search: O(log(n))
- Insertion: O(log(n))
- Deletion: O(log(n))
### Space complexity

O(n)

## Tests
We have a suite of unit tests that covers the major functionality of this data structure. To run this suite locally run `npm run test:binarytree` from parent directory.